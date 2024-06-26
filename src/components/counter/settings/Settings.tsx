import { ChangeEvent } from 'react'

import { Button } from '@/components/button/Button'
import { BUTTONS_NAME } from '@/components/counter/counterSettings'
import { Controls } from '@/components/counter/main/controls/controls'
import { Display } from '@/components/counter/main/display/display'
import { LabelInput } from '@/components/counter/settings/labelInput/LabelInput'

type SettingsProps = {
  changeCounterMinValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  maxValue: number
  minValue: number
  setNewValuesHandler: () => void
  status: string
}
export const Settings = ({
  changeCounterMinValueHandler,
  maxValue,
  minValue,
  setNewValuesHandler,
  status,
}: SettingsProps) => {
  return (
    <>
      <Display>
        <LabelInput
          name={'Min value'}
          onChange={changeCounterMinValueHandler}
          status={status}
          value={minValue}
        />
        <LabelInput name={'Max value'} onChange={() => {}} status={status} value={maxValue} />
      </Display>
      <Controls>
        <Button name={BUTTONS_NAME.set} onClick={setNewValuesHandler} />
      </Controls>
    </>
  )
}
