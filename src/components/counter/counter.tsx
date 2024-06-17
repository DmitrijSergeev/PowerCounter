import { useState } from 'react'

import s from './counter.module.scss'

import { Main } from '../../components/counter/main/Main'
import { Settings } from '../../components/counter/settings/settings'

type CounterProps = {
  id: number
  max: number
  min: number
}
export const Counter = ({ id, max, min }: CounterProps) => {
  const [status, setStatus] = useState('')
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const [currentValue, setCurrentValue] = useState(minValue)

  return (
    <div className={s.counter}>{!status ? <Main currentValue={currentValue} /> : <Settings />}</div>
  )
}
