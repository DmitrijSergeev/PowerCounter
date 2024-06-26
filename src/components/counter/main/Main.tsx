import { Button } from '@/components/button/Button'
import { BUTTONS_NAME, ERRORS_STATUS } from '@/components/counter/counterSettings'
import { Controls } from '@/components/counter/main/controls/controls'
import { Display } from '@/components/counter/main/display/display'
import clsx from 'clsx'

import s from './main.module.scss'

type MainProps = {
  currentValue: number
  incrementHandler: () => void
  maxValue: number
  minValue: number
  resetHandler: () => void
  setStatus: (status: string) => void
  status: string
}

export const Main = ({
  currentValue,
  incrementHandler,
  maxValue,
  minValue,
  resetHandler,
  setStatus,
  status,
}: MainProps) => {
  const onClickHandler = () => !status && setStatus(ERRORS_STATUS.change)
  const disabledButtonCondition = (value: number) => currentValue === value || !!status

  const textErrorClasses = clsx(
    s.counterText,
    `${currentValue === maxValue ? ' ' + s.counterTextError : ''}`
  )

  return (
    <>
      <Display>
        <span className={textErrorClasses}>{currentValue}</span>
      </Display>
      <Controls>
        <Button
          disabled={disabledButtonCondition(maxValue)}
          name={BUTTONS_NAME.inc}
          onClick={incrementHandler}
        />
        <Button
          disabled={disabledButtonCondition(minValue)}
          name={BUTTONS_NAME.reset}
          onClick={resetHandler}
        />
        <Button name={BUTTONS_NAME.set} onClick={onClickHandler} />
      </Controls>
    </>
  )
}
