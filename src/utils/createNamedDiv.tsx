import { FC, ReactNode } from "react"

export default function createNamedDiv(className: string) : FC<{children: ReactNode}> {
  return ({children}) => {
    return <div className={className}>
    {children}
  </div>
  }
}
