/* eslint-disable @next/next/no-img-element */
import { Footer } from '../components/Footer'
import { History } from '../components/History'
import { Introduction } from '../components/Introduction'
import { Location } from '../components/Location'
import { Menu } from '../components/Menu'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Introduction />
      </div>
      <History />
      <Menu />
      <Location />
      <Footer />
    </div>
  )
}