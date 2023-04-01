import { JSXElementConstructor, ReactElement } from "react";
import Button from "../../../components/utils/Button";

export const AccessContent = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  /* ------------------------ RENDER --------------------------- */
  return (
    <section className="container__content">
      <div className="first__box__content">
        <span>Aca puedes generar tus nuevas claves de acceso</span>
        <Button title="GENERAR NUEVA CLAVE DE ACCESO"/>
      </div>
    </section>
  )
}

export default AccessContent;