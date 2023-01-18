import { useState } from "react"
import { useParams } from "react-router-dom"
import { EmptyPage } from "../components/Layout"

export default function Test() {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-2 bg-white border shadow rounded w-96">
      <div className="flex justify-between items-center">
        {
          open ? <input className="ml-2"/> : <div className="ml-2">Jontra voltra
          </div>
        }
        <button type="button" onClick={() => setOpen(!open)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{open ? 'Save' : 'Edit'}</button>
      </div>
    </div >
  )
}
