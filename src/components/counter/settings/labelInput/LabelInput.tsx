import { ChangeEvent } from 'react'

import s from './LabelInput.module.scss'

type LabelInputProps = {
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  status: string
  value: number
}
export const LabelInput = ({ name, onChange, status, value }: LabelInputProps) => {
  return (
    <label>
      <span className={s.counterSettingsText}>{name}</span>
      <input name={name} onChange={onChange} type={'number'} value={value} />
    </label>
  )
}
