type LabelInputProps = {
  label: string
  onChange: () => void
}
export const LabelInput = ({ label, onChange }: LabelInputProps) => {
  return (
    <label>
      <span>
        <input />
      </span>
    </label>
  )
}
