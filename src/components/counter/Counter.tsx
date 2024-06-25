import { useEffect, useState } from 'react'

import { Main } from '@/components/counter/main/Main'
import { Settings } from '@/components/counter/settings/Settings'

import s from './counter.module.scss'

type CounterProps = {
  max: number
  min: number
}
export const Counter = ({ max, min }: CounterProps) => {
  const [status, setStatus] = useState('')
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const [currentValue, setCurrentValue] = useState(minValue)

  useEffect(() => {
    localStorage.setItem(`counterCurrentValue`, JSON.stringify(currentValue))
  }, [currentValue])

  const incrementHandler = () => currentValue < maxValue && setCurrentValue(prev => prev + 1)
  const resetHandler = () => currentValue > minValue && setCurrentValue(minValue)
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
          incrementHandler={incrementHandler}
          maxValue={maxValue}
          minValue={minValue}
          resetHandler={resetHandler}
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
