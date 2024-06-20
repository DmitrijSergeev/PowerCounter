import { useState } from 'react'

import { Main } from '@/components/counter/main/Main'
import { Settings } from '@/components/counter/settings/Settings'

import s from './counter.module.scss'

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

  const setNewValuesHandler = () => {
    if (status) {
      setStatus('')
    }
  }

  return (
    <div className={s.counter}>
      {!status ? (
        <Main
          currentValue={currentValue}
          maxValue={maxValue}
          minValue={minValue}
          setStatus={setStatus}
          status={status}
        />
      ) : (
        <Settings
          maxValue={maxValue}
          minValue={minValue}
          setNewValuesHandler={setNewValuesHandler}
          status={status}
        />
      )}
    </div>
  )
}
