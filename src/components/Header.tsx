import { useAccountToggle } from "./AccountToggle"

export function Header({ toggleSideBar }: { toggleSideBar?: () => void }) {
  const toggleAccount = useAccountToggle()
  return <nav className="flex items-center justify-between flex-wrap bg-[#4A5568] p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-logo font-semibold text-xl tracking-tight">Website Name</span>
    </div>
    {
      toggleSideBar && <div className="block lg:hidden">
        <button onClick={toggleSideBar} className="flex items-center px-3 py-2 border rounded text-[#FFFFFF] text-[16px] border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
    }

    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#CCCCCC] hover:text-white mr-4">
          Products
        </a>
      </div>
      <div className="cursor-pointer" onClick={toggleAccount}>
        <img src="/svg/user.svg" className="w-6 h-6" alt="login" />
      </div>
    </div>
  </nav>
}
