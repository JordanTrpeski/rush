export default function Home() {
    return <div className="flex flex-col min-h-screen">
        <nav className="flex items-center justify-between flex-wrap bg-[#4A5568] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Website Name</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-[#FFFFFF] text-[16px] border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#CCCCCC] hover:text-white mr-4">
                        Products
                    </a>
                </div>
                <div>
                    <svg className=" w-6 h-6" fill="none" stroke="#CCCCCC" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
            </div>
        </nav>

        <div className="flex-grow min-h-[calc(100vh-76px)] flex  font-regular text-[16px]">
        <div className="box-border min-h-full w-1/6  bg-[#F7FAFC]">
            <div className="mb-0 flex justify-center p-1">
                <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <p className="pl-2" >  General Settings </p>
            </div>
            <div className="mb-0 flex justify-center p-1 ">
                <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                <p className="pl-2  "> Products </p>
            </div>
            <div className="pl-20">
                <p className="pl-5 "> Add New </p>
                <p className="pl-5 "> Edit Product </p>
                <p className="pl-5 "> abc </p>
            </div>
        </div>
        <div>
            <p className="text-[20px] pt-8 pl-20 align-top-left "> Product</p>
            
        </div>
        </div>



        <footer className="p-4 bg-white sm:p-6  ">
            <div className="md:flex md:justify-between mt-0 mb-4 ml-8 mr-9">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 mr-36 text-sm font-bold text-[16px] text-[#AAAAAA] uppercase">Company</h2>
                        <ul className="text-[#1451B8] ">
                            <li className="mb-1">
                                <a href="/" className="hover:underline font-medium">About us</a>
                            </li>
                            <li className="mb-1">
                                <a href="/" className="hover:underline font-medium">Our team</a>
                            </li>
                            <li className="mb-1">
                                <a href="/" className="hover:underline font-medium">Career</a>
                            </li>
                             <li className="mb-1    ">
                                <a href="/" className="hover:underline font-medium">Media</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-[16px] text-[#AAAAAA] uppercase">Shoping</h2>
                        <ul className="text-[#1451B8] ">
                            <li className="mb-1">
                                <a href="#" className="hover:underline font-medium ">Delivery</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline font-medium">Warranty</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline font-medium">Privacy policy</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline font-medium">Customer support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    </div>
}
