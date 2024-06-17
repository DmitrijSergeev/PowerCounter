import { useState } from 'react'

import s from './counter.module.scss'

import { Main } from '../../components/counter/main/main'
import { Settings } from '../../components/counter/settings/settings'

type CounterProps = {
  id: number
  max: number
  min: number
}
export const Counter = ({ id, max, min }: CounterProps) => {
  const [status, setStatus] = useState('')

  return <div className={s.counter}>{!status ? <Main /> : <Settings />}</div>
}
