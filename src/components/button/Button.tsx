import s from './button.module.scss'

type ButtonProps = {
  className?: string
  disabled?: boolean
  name: string
  onClick: () => void
}
export const Button = ({ className, disabled, name, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type={'button'}>
      {name}
    </button>
  )
}
