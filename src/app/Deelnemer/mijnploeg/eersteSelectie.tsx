"use client"
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { useState } from "react"


interface Props {
  boodschap:string;
  user: KindeUser<Record<string, any>>
}
const EersteSelectie = ({boodschap,user}: Props) => {
  const [huidigeSelectie, setHuidigeSelectie]=useState(null)
  console.log(`huidige gebruiker: ${user.id}`)
  console.log(boodschap)
  return (
    <>
    <h2 className='text-2xl'>Huidige Selectie</h2>
    <p>
      eersteSelectie
      </p>
    </>
  )
}

export default EersteSelectie