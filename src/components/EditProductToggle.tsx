import { createContext, FC, ReactNode, useState, useContext } from "react"

const EditProductToggle = createContext({ editProductToggled: false, toggleEditProduct: () => { } })

export const EditProductToggleState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  return <EditProductToggle.Provider value={{ editProductToggled: toggleStatus, toggleEditProduct: () => setToggleStatus(status => !status) }}>
    {children}
  </EditProductToggle.Provider>
}

export function useEditProductToggle() {
  return useContext(EditProductToggle).toggleEditProduct
}

export function useEditProductToggleStatus() {
  return useContext(EditProductToggle).editProductToggled
}

export const ShowWhenEditProductToggled: FC<{ children: ReactNode }> = ({children}) => {
  const toggled = useEditProductToggleStatus()
  return <div className={toggled?"":"hidden"}>
    {children}
  </div>
}
