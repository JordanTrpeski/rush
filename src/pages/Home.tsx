function Product() {
  return <div className="w-72">
  <div className="max-w-2xl mx-auto">
    <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <div className='w-full flex rounded-t-lg'>
          <img alt="product logo" className="flex-grow rounded-t-lg" src="/img/lego.jpg" />
        </div>
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> Legos </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
      </div>
    </div>
  </div>
</div>
}


export default function Home() {
  return <div className="flex flex-col min-h-screen">
    <nav className="flex items-center justify-between flex-wrap bg-[#4A5568] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-logo font-semibold text-xl tracking-tight">Website Name</span>
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
          <img src="/svg/user.svg" className="w-6 h-6" alt="login"/>
        </div>
      </div>
    </nav>

    <div className="flex-grow min-h-[calc(100vh-76px)] flex  font-regular text-[16px]">
      <div className="box-border min-h-full w-1/6  bg-[#F7FAFC]">
        <div className="mb-0 flex justify-center p-1">
          <img src="/svg/house.svg" alt="general settings" className="w-5 h-5" />
          <p className="pl-2" >  General Settings </p>
        </div>
        <div className="mb-0 flex justify-center p-1 ">
          <img alt="products" src="/svg/products.svg" className="w-5 h-5"/>
          <p className="pl-2  "> Products </p>
        </div>
        <div className="pl-20">
          <p className="pl-5 "> Add New </p>
          <p className="pl-5 "> Edit Product </p>
          <p className="pl-5 "> abc </p>
        </div>
      </div>

      <div className="w-full">
        <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Products</p>
        <div className="grid grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
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
                <a href="/" className="hover:underline font-medium ">Delivery</a>
              </li>
              <li className="mb-1">
                <a href="/" className="hover:underline font-medium">Warranty</a>
              </li>
              <li className="mb-1">
                <a href="/" className="hover:underline font-medium">Privacy policy</a>
              </li>
              <li className="mb-1">
                <a href="/" className="hover:underline font-medium">Customer support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  </div>
}
