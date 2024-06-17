import { ReactNode } from 'react'

import s from './display.module.scss'
type DisplayProps = {
  children: ReactNode
}
export const Display = ({ children }: DisplayProps) => {
  return <div className={s.counterDisplay}>{children}</div>
}
