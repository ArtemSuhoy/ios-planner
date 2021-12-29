import {
  CheckboxChecked,
  CheckboxUnchecked,
  CheckboxFlagChecked,
  CheckboxFlagUnchecked,
} from "."

const CheckboxMap = {
  default: {
    true: <CheckboxChecked />,
    false: <CheckboxUnchecked />,
  },
  flag: {
    true: <CheckboxFlagChecked />,
    false: <CheckboxFlagUnchecked />,
  },
}

export default CheckboxMap
