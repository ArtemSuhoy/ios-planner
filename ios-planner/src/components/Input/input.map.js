const INPUT_STYLE = {
  search: `border: 3px solid transparent;
    background-color: #4f5052;
    border-radius: 6px;
    padding: 5px 10px 5px 25px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #007aff;
    }
    color: #fff;
    line-height: 20px;`,

  addTaskList: `border: 1px solid #000;
  max-width: 100%;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  outline: none;`,

  default: `
  color: inherit;
  font-family: inherit;
  line-height: 24px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  height: 24px;
  width: 100%;
  &:focus {
    background-color: transparent;
  } `,
}

export default INPUT_STYLE
