import { createContext, FC, ReactNode, useState, useContext } from "react"

const SideBarContext = createContext({ sideBarToggled: false, toggleSideBar: () => { } })

export const SideBarState: FC<{ children: ReactNode }> = ({ children }) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  return <SideBarContext.Provider value={{ sideBarToggled: toggleStatus, toggleSideBar: () => setToggleStatus(status => !status) }}>
    {children}
  </SideBarContext.Provider>
}

export function useSideBarToggle() {
  return useContext(SideBarContext).toggleSideBar
}

export function useSideBarToggleStatus() {
  return useContext(SideBarContext).sideBarToggled
}

export const HideWhenSideBarToggled: FC<{ children: ReactNode }> = ({children}) => {
  const toggled = useSideBarToggleStatus()
  return <div className={toggled?"xl:block hidden w-full":"w-full"}>
    {children}
  </div>
}
