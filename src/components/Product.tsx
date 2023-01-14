export function Product() {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus blandit, tincidunt est ut, ultricies tellus. Cras dui tellus.'
  return <div className="w-72">
    <div className="max-w-2xl mx-auto">
    <svg aria-hidden="true" className="relative top-6 left-1 w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Bookmark</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <div className='w-full flex rounded-t-lg'>
            <img alt="product logo" className="flex-grow rounded-t-lg" src="/img/lego.jpg" />
          </div>
        </a>
        <div className="pl-3 ">
          <a href="/">
            <h3 className="pt-3 text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> Legos </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5 pb-2  ">
            <p className="text-white text-xs">{description.length > 93 ? description.substring(0, 90) + '...' : description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}