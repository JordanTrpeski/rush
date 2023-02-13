import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProduct, useProduct, useRemove } from "../hooks/api/products";
import { useEditProductToggle } from "./EditProductToggle";

function useImageList(d: string[] = []) {
  const [images, setImages] = useState<string[]>(d)

  const addImage = useCallback((file: Blob) => {
    setImages(oldImages => [...oldImages, URL.createObjectURL(file)])
  }, [])

  const removeImage = useCallback((imageUrl: string) => {
    setImages(images => images.filter(image => image !== imageUrl))
  }, [])

  return { images, addImage, removeImage }
}

function errorToSaneObject(e: any) {
  if (e instanceof Error) {
    const { cause, message, name, stack } = e
    return { cause, message, name, stack }
  }
  return e
}

function EditProductInner({ product }: { product: ReturnType<typeof useProduct> }) {
  const [title, setTitle] = useState(product?.data?.metadata.title ?? '')
  const [category, setCategory] = useState(product?.data?.metadata.category ?? 'Vehicle')
  const [price, setPrice] = useState(product?.data?.metadata.price ?? 0)
  const [description, setDescription] = useState(product?.data?.metadata.description ?? '')
  const { images, addImage, removeImage } = useImageList(product?.images?.map(image => image.url()))
  const fileRef = useRef<HTMLInputElement>(null)
  const editProductToggle = useEditProductToggle()
  const navigate = useNavigate()
  const onAddImageButtonClick = useCallback(() => {
    fileRef.current?.click()
  }, [])

  const deleteProduct = useRemove(product?.product, () => {
    navigate('/my-product')
    editProductToggle()
  })

  const { send, isLoading, result, hasError, hasSentRequest, error } = useEditProduct(product?.product, title, images, price, category, description)

  useEffect(() => {
    if (hasSentRequest && !isLoading && !hasError) {
      editProductToggle()
      window.document.location = `/products/${result?.id}`
    }
  }, [hasSentRequest, isLoading, hasError, result, editProductToggle])

  if (isLoading) {
    return <div className="w-screen container">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
          <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
            <p className="text-base font-semibold">Sending...</p>
          </div>
        </div>
      </div>
    </div>
  }

  if (hasError) {
    return <div className="w-screen container">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
          <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
            <p className="text-base font-semibold">An error has occured</p>
          </div>
          <div className="p-4">
            <p>Please contact us and send us this error message:</p>
            <p className="min-h-[250px] max-h-[250px] text-red-900 text-xs break-all pt-2 font-mono">{JSON.stringify({ error: errorToSaneObject(error), hasSentRequest, result, hasError, isLoading })}</p>
          </div>
        </div>
      </div>
    </div>
  }



  return (
    <div className="w-screen container">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
          <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
            <p className="text-base font-semibold">Add New Product</p>
          </div>
          <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={images.length} className="flex items-center justify-center ">
              <div className="flex items-center">
                <ButtonBack aria-label="slide back" className="focus:outline-none focus:ring-2 pr-10">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L24 32L40 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonBack>
              </div>
              <div className="slider">
                <div className="slide-ana lg:relative">
                  <Slider className="flex-grow">
                    {
                      images.map((image, idx) => (
                        <Slide key={idx} index={idx}>
                          <div onClick={() => removeImage(image)} className="w-40 cursor-no-drop h-40 bg-gray-100 rounded-md flex items-center justify-center">
                            <img src={image} alt="product" />
                          </div>
                        </Slide>
                      ))
                    }
                  </Slider>
                </div>
              </div>
              <div className="flex items-center">
                <ButtonNext role="button" aria-label="next slide" className="focus:outline-none focus:ring-2">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 16L40 32L24 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
            <div className="mt-11">
              <div className="flex items-center space-x-9">
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                <input ref={fileRef} onChange={e => {
                  for (const file of e.target.files ?? []) {
                    addImage(file)
                  }
                }} type="file" className="hidden" />
                <button onClick={onAddImageButtonClick} className="w-1/2 focus:outline-none hover:bg-gray-200 placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Add Image</button>
              </div>
              <div className="flex items-center space-x-9 mt-8">
                <input onChange={e => setPrice(parseFloat(e.target.value))} value={price} placeholder="Price" type="number" className="w-1/2 font-mono focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                  <select value={category} onChange={e => setCategory(e.target.value)} className="text-sm text-gray-500 w-full focus:outline-none">
                    <option>Vehicle</option>
                    <option>Electronics</option>
                    <option>Accommodation</option>
                    <option>Home and Family</option>
                    <option>Sports and Recreation</option>
                    <option>Work and Business</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-9">
              <div onClick={editProductToggle} className="px-6 cursor-pointer py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                Cancel
              </div>
              <div onClick={deleteProduct} className="px-6 py-3 cursor-pointer bg-gray-700 hover:bg-gray-900 shadow rounded text-sm text-white">
                Delete
              </div>
              <div onClick={send} className="px-6 cursor-pointer py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                Edit Product
              </div>
            </div>
          </div>
        </div>
      </div >
      <style>{`
                .slider {
                    width: 200px;
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                }
    
                .slide-ana {
                    height: 360px;
                }
    
                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 0.7s;
                }
    
                @media (min-width: 200px) and (max-width: 639px) {
                    .slider {
                        height: 300px;
                        width: 170px;
                    }
                }
            `}</style>
    </div >
  );
}

export default function EditProducts() {
  const { id } = useParams()
  const product = useProduct(id ?? '')

  if (product) {
    return <EditProductInner product={product} />
  }

  return <></>

}