import { JSXElementConstructor, ReactElement } from "react"

export const AccessHeader = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   /* ------------------------ RENDER --------------------------- */
   return (
      <div className="access__header">
         <h3>ACCESOS</h3>
      </div>
   )
}

export default AccessHeader;