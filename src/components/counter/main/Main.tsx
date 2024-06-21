import { Button } from '@/components/button/Button'
import { BUTTONS_NAME, ERRORS_STATUS } from '@/components/counter/counterSettings'
import { Controls } from '@/components/counter/main/controls/controls'
import { Display } from '@/components/counter/main/display/display'

import s from './main.module.scss'

type MainProps = {
  currentValue: number
  maxValue: number
  minValue: number
  setStatus: (status: string) => void
  status: string
}

export const Main = ({ currentValue, setStatus, status }: MainProps) => {
  const onClickHandler = () => !status && setStatus(ERRORS_STATUS.change)

  return (
    <>
      <Display>
        <span className={s.counterText}>{currentValue}</span>
      </Display>
      <Controls>
        <Button name={BUTTONS_NAME.set} onClick={onClickHandler} />
      </Controls>
    </>
  )
}
