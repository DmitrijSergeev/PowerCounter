import { Button } from '@/components/button/Button'
import { BUTTONS_NAME } from '@/components/counter/counterSettings'
import { Controls } from '@/components/counter/main/controls/controls'
import { Display } from '@/components/counter/main/display/display'

type SettingsProps = {
  maxValue: number
  minValue: number
  setNewValuesHandler: () => void
  status: string
}
export const Settings = ({ maxValue, minValue, setNewValuesHandler, status }: SettingsProps) => {
  return (
    <>
      <Display>
        <input />
      </Display>
      <Controls>
        <Button name={BUTTONS_NAME.set} onClick={setNewValuesHandler} />
      </Controls>
    </>
  )
}
