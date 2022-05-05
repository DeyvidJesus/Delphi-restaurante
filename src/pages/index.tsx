/* eslint-disable @next/next/no-img-element */
import { History } from '../components/History'
import { Introduction } from '../components/Introduction'
import { Menu } from '../components/Menu'

export default function Home() {
  return (
    <>
      <div>
        <Introduction />
      </div>
      <History />
      <Menu />
    </>
  )
}