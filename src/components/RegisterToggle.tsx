import { createContext, FC, ReactNode, useState, useContext } from "react"

const RegisterToggle = createContext({ registerToggled: false, toggleRegister: () => { } })

export const RegisterToggleState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  return <RegisterToggle.Provider value={{ registerToggled: toggleStatus, toggleRegister: () => setToggleStatus(status => !status) }}>
    {children}
  </RegisterToggle.Provider>
}

export function useRegisterToggle() {
  return useContext(RegisterToggle).toggleRegister
}

export function useRegisterToggleStatus() {
  return useContext(RegisterToggle).registerToggled
}

export const ShowWhenRegisterToggled: FC<{ children: ReactNode }> = ({children}) => {
  const toggled = useRegisterToggleStatus()
  return <div className={toggled?"":"hidden"}>
    {children}
  </div>
}
