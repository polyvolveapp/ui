import * as React from "react"


import "./style.scss"

interface Props {
  value: number
  onChange: (value: number) => void
}

export default class NumericSlider extends React.Component<Props> {
  render(): JSX.Element {
    const { value, onChange } = this.props

    return (
      null
    )
  }
}
