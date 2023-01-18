export function Footer() {
  return <footer className="ml-32 p-4 bg-white sm:p-6 ">
    <div className="md:flex md:justify-between mt-0 mb-4 ml-8 mr-9">
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 mr-36 text-sm font-bold text-[16px] text-[#AAAAAA] uppercase">About Me</h2>
          <ul className="text-[#1451B8] ">
            <li className="mb-1">
              <a href="/" className="hover:underline font-medium">This Project</a>
            </li>
            <li className="mb-1">
              <a href="/" className="hover:underline font-medium">Instagram</a>
            </li>
            <li className="mb-1">
              <a href="/" className="hover:underline font-medium">Facebook</a>
            </li>
            <li className="mb-1    ">
              <a href="/" className="hover:underline font-medium">Linkedin</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-bold text-[16px] text-[#AAAAAA] uppercase">Trade safely!</h2>
          <ul className="text-[#1451B8] ">
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
}