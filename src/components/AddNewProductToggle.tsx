import { createContext, FC, ReactNode, useState, useContext, useCallback } from "react"

const NewProductToggle = createContext({ newProductToggled: false, toggleNewProduct: () => { } })

export const NewProductToggleState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  const callback = useCallback(() => setToggleStatus(status => !status), [])
  return <NewProductToggle.Provider value={{ newProductToggled: toggleStatus, toggleNewProduct: callback }}>
    {children}
  </NewProductToggle.Provider>
}

export function useNewProductToggle() {
  return useContext(NewProductToggle).toggleNewProduct
}

export function useNewProductToggleStatus() {
  return useContext(NewProductToggle).newProductToggled
}

export const ShowWhenNewProductToggled: FC<{ children: ReactNode }> = ({ children }) => {
  const toggled = useNewProductToggleStatus()
  return <div className={toggled ? "" : "hidden"}>
    {children}
  </div>
}
