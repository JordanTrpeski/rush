import { createContext, FC, ReactNode, useState, useContext } from "react"

const LoginToggle = createContext({ loginToggled: false, toggleLogin: () => { } })

export const LoginToggleState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  return <LoginToggle.Provider value={{ loginToggled: toggleStatus, toggleLogin: () => setToggleStatus(status => !status) }}>
    {children}
  </LoginToggle.Provider>
}

export function useLoginToggle() {
  return useContext(LoginToggle).toggleLogin
}

export function useLoginToggleStatus() {
  return useContext(LoginToggle).loginToggled
}

export const ShowWhenLoginToggled: FC<{ children: ReactNode }> = ({children}) => {
  const toggled = useLoginToggleStatus()
  return <div className={toggled?"":"hidden"}>
    {children}
  </div>
}
