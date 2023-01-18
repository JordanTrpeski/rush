import { FC, ReactNode } from "react"
import createNamedDiv from "../utils/createNamedDiv"
import AccountMenu from "./AccountMenu"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Login } from "./Login"
import { Register } from "./Register"
import { SideBar } from "./SideBar"
import { HideWhenSideBarToggled, useSideBarToggle } from "./SideBarToggle"

export const Layout = createNamedDiv('flex flex-col min-h-screen')
export const Page = createNamedDiv('flex-grow min-h-[calc(100vh-76px)] flex font-regular text-[16px] relative')

export const EmptyPage: FC<{ children: ReactNode }> = ({ children }) => {
  return <Layout>
    <Header />
    <Page>
      {children}
      <AccountMenu />

    </Page>
    <Footer />
    <Register />
    <Login/>
  </Layout>
}


export const NormalPage: FC<{ children: ReactNode, sideBar: ReactNode }> = ({ children, sideBar }) => {
  const toggleSideBar = useSideBarToggle()

  return <Layout>
    <Header toggleSideBar={toggleSideBar} />
    <Page>
      <SideBar content={sideBar} />
      <HideWhenSideBarToggled>
        {children}
      </HideWhenSideBarToggled>
      <AccountMenu />
    </Page>
    <Footer />
    <Register />
    <Login/>
  </Layout>
}