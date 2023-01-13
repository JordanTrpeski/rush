import { ReactNode } from "react"
import { useSideBarToggleStatus } from "./SideBarToggle"

export function SideBar({content}:{content: ReactNode}) {
  const sideBarToggleStatus = useSideBarToggleStatus()
  return <div className={"box-border min-h-full md:w-48 w-full md:block bg-[#F7FAFC] " + (sideBarToggleStatus ? 'block' : 'hidden')}>
    {content}
  </div>
}
