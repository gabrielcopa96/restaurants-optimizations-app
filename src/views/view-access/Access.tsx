import { JSXElementConstructor, ReactElement } from 'react';
import { AccessHeader, AccessContent } from './components';

const Access = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  /* ------------------------ RENDER --------------------------- */
  return (
    <>
      <AccessHeader />
      <AccessContent />
    </>
  )
}

export default Access;