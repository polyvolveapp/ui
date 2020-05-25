import * as React from "react"
import Link from "next/link"

import { SVG } from "../.."

interface Props {
  name?: string
  url?: string
  icon?: any
  index?: boolean
  className?: string
  onClick?: () => void
}

export default class NavigationItem extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { url, onClick, name, icon } = this.props

    return (
      <li>
        {url && this.renderLink()}
        {!url && !icon && <a onClick={onClick}>{name}</a>}
        {!url && icon && <a onClick={onClick}><SVG html={icon} size={{ width: 16, height: 16 }} /></a>}
      </li>
    )
  }

  renderLink(): JSX.Element {
    const { name, url, index, icon, className } = this.props

    return icon ? (
      <Link href={url!}>
        <a className={className}>
          {!name && icon && <SVG html={icon} size={{ width: 16, height: 16 }} />}
        </a>
      </Link>
    ) : (
        <Link href={url!}>
          <a className={className}>{name}</a>
        </Link>
      )
  }
}

