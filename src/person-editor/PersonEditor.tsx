import React, { ReactElement, useEffect, useState } from "react"
import localforage from "localforage"

import { LabeledInput, Loading } from "../components"
import { initialPersonBio } from "../utils"
import { Person } from "../types/person"

function savePersonBio(personBio: Person | null): void {
  console.log("..Saving..")
  localforage.setItem("personBio", personBio)
}

export function PersonEditor(): ReactElement {
  const [personBio, setPersonBio] = useState<Person | null>(null)

  useEffect(() => {
    async function getPersonBio() {
      const savedPersonBio = await localforage.getItem<Person>("personBio")
      setPersonBio(savedPersonBio ?? initialPersonBio)
    }

    getPersonBio()
  }, [])

  useEffect(() => {
    savePersonBio(personBio)
  }, [personBio])

  if (!personBio) {
    return <Loading />
  }
  return (
    <form
      className="person-editor"
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Submitting\n${JSON.stringify(personBio, null, 2)}`)
      }}
    >
      <h2>Bio Editor</h2>
      <LabeledInput
        label="Firstname:"
        value={personBio.firstname}
        onChange={(e) => {
          setPersonBio((personBio) => ({
            ...personBio!,
            firstname: e.target.value,
          }))

          if (e.target.value === "Ford") {
            setPersonBio((personBio) => ({
              ...personBio!,
              surname: "Henry",
              address: "Semarang",
            }))
          }
        }}
      />
      <LabeledInput
        label="Surname:"
        value={personBio.surname}
        onChange={(e) => {
          const newData = { ...personBio, surname: e.target.value }
          setPersonBio(newData)
        }}
      />
      <LabeledInput
        label="Email:"
        value={personBio.email}
        onChange={(e) => {
          const newData = { ...personBio, email: e.target.value }
          setPersonBio(newData)
        }}
      />
      <LabeledInput
        label="Address:"
        value={personBio.address}
        onChange={(e) => {
          const newData = { ...personBio, address: e.target.value }
          setPersonBio(newData)
        }}
      />
      <LabeledInput
        label="Phone:"
        value={personBio.phone}
        onChange={(e) => {
          const newData = { ...personBio, phone: e.target.value }
          setPersonBio(newData)
        }}
      />
      <hr />
      <div className="btn-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <hr />
      <pre>{JSON.stringify(personBio, null, 2)}</pre>
    </form>
  )
}
