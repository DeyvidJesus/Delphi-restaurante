/* eslint-disable @next/next/no-img-element */
import { History } from '../components/History'
import { Introduction } from '../components/Introduction'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Introduction />
      </div>
      <History />
    </>
  )
}