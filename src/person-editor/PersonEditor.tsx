import React, { ReactElement, useEffect, useRef } from "react"
import { initialPersonBio } from "../utils"
import { LabeledInput, Loading } from "../components"
import { usePersonBio } from "../hooks/usePersonBio"

export function PersonEditor(): ReactElement {
  const [personBio, setPersonBio] = usePersonBio(initialPersonBio)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTimeout(() => {
      input.current?.focus()
    }, 1000)
  }, [])

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
        ref={input}
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
