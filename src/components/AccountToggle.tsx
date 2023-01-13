import { createContext, FC, ReactNode, useState, useContext } from "react"

const AccountToggle = createContext({ accountToggled: false, toggleAccount: () => { } })

export const AccountToggleState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  return <AccountToggle.Provider value={{ accountToggled: toggleStatus, toggleAccount: () => setToggleStatus(status => !status) }}>
    {children}
  </AccountToggle.Provider>
}

export function useAccountToggle() {
  return useContext(AccountToggle).toggleAccount
}

export function useAccountToggleStatus() {
  return useContext(AccountToggle).accountToggled
}

export const ShowWhenAccountToggled: FC<{ children: ReactNode }> = ({children}) => {
  const toggled = useAccountToggleStatus()
  return <div className={toggled?"":"hidden"}>
    {children}
  </div>
}
