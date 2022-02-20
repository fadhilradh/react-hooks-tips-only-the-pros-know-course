import localforage from "localforage"
import { useEffect, useState } from "react"
import { Person } from "../types/person"

function savePersonBio(personBio: Person | null): void {
  localforage.setItem("personBio", personBio)
}

export function usePersonBio(initialPersonBio: Person) {
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

  return [personBio, setPersonBio] as const
}
