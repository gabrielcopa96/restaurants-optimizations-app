import { JSXElementConstructor, ReactElement, PropsWithChildren } from "react"

interface DropdownPropsI extends PropsWithChildren { }

const Dropdown = ({ children }: DropdownPropsI): ReactElement<JSXElementConstructor<HTMLElement>> => {
   /* ---------------------- RENDER -------------------- */
   return (
      <div>Dropdown</div>
   )
}

export default Dropdown