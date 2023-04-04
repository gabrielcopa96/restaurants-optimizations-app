import { JSXElementConstructor, ReactElement } from "react";

const Button = ({ title }: { title: string }): ReactElement<JSXElementConstructor<HTMLElement>> => {
  return (
    <button className="btn-primary">{title}</button>
  )
}

export default Button;