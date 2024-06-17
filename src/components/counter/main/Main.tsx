import { Controls } from '@/components/counter/main/controls/controls'

import s from './main.module.scss'

import { Button } from '../../../components/button/button'
import { Display } from '../../../components/counter/main/display/display'

type MainProps = {
  currentValue: number
}

export const Main = ({ currentValue }: MainProps) => {
  return (
    <>
      <Display>
        <span className={s.counterText}>{currentValue}</span>
      </Display>
      <Controls>
        <Button />
      </Controls>
    </>
  )
}
