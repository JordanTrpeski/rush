import { useState } from "react"
export  function Profile() {
  const [nameOpen, setNameOpen ] = useState(false)
  const [lastnOpen, setlastnOpen ] = useState(false)
  const [emailOpen, setemailOpen ] = useState(false)
  const [numberOpen, setnumberOpen ] = useState(false)
  const [passwordOpen, setpasswordOpen ] = useState(false)

  return ( 
    <div>
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
        <div className="p-2 bg-white border shadow rounded w-96">
          <div className="flex justify-between items-center">
            {
              nameOpen ? <input className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">Jontra</div>
            }
            <button type="button" onClick={() => setNameOpen(!nameOpen)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{nameOpen ? 'Save' : 'Edit'}</button>
          </div>
        </div >
        <div className="p-2 bg-white border shadow rounded w-96">
          <div className="flex justify-between items-center">
            {
              lastnOpen ? <input className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">Voltra</div>
            }
            <button type="button" onClick={() => setlastnOpen(!lastnOpen)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{lastnOpen ? 'Save' : 'Edit'}</button>
          </div>
        </div >
        <div className="p-2 bg-white border shadow rounded w-96">
          <div className="flex justify-between items-center">
            {
              emailOpen ? <input className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">emai@email.com</div>
            }
            <button type="button" onClick={() => setemailOpen(!emailOpen)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{emailOpen ? 'Save' : 'Edit'}</button>
          </div>
        </div >
        <div className="p-2 bg-white border shadow rounded w-96">
          <div className="flex justify-between items-center">
            {
              numberOpen ? <input className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">Phone Number</div>
            }
            <button type="button" onClick={() => setnumberOpen(!numberOpen)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{numberOpen ? 'Save' : 'Edit'}</button>
          </div>
        </div >
        <div className="p-2 bg-white  border shadow rounded w-96">
          <div className="flex justify-between items-center">
            {
              passwordOpen ? <input className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">Password </div>
            }
            <button type="button" onClick={() => setpasswordOpen(!passwordOpen)} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{passwordOpen ? 'Save' : 'Edit'}</button>
          </div>
        </div >

      </div>
    </div>
  )
}