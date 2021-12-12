import { CheckboxStyle, CheckboxWrapper, CheckboxMap } from "."
import { useCurrentIcon } from "./Hooks/useCurrentIcon"

const Checkbox = props => {
  const { currentIcon, setCurrentIcon } = useCurrentIcon()

  return (
    <CheckboxWrapper>
      <CheckboxStyle onChange={() => setCurrentIcon(!currentIcon)} />
      {CheckboxMap[currentIcon]}
    </CheckboxWrapper>
  )
}

export default Checkbox
