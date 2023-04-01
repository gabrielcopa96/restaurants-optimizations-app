import { PropsWithChildren, createContext } from "react";

/* --------------------- CONTEXT --------------------------- */
export const AccessMainContext = createContext({})
/* --------------------- PROVIDER --------------------------- */
const { Provider: AccessProvider } = AccessMainContext;

const AccessContext = ({ children }: PropsWithChildren) => {
  /* --------------------- RETURN CHILDREN PLUS CONTEXT --------------------------- */
  return (
    <AccessProvider
      value={{}}
    >
      {children}
    </AccessProvider>
  )
}

export default AccessContext;