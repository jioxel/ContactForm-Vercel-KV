import Image from 'next/image'
import styles from './page.module.css'
import { Roboto } from 'next/font/google'
import {Form} from '../components'
const inter = Roboto({weight:"300",subsets:["latin"]})



export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.h1}>Contact Form</h1>
      <Form/>
    </main>
  )
}
