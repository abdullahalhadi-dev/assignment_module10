'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  const [name, setName] = useState('Pranto');

  const apple = () => {
    setName('Abdullah');
  }

  return (
    <main className={styles.main}>
      <h1>Hello Next Js with {name}</h1>

      <button onClick={()=>apple()}>Submit</button>
    </main>
  )
}
