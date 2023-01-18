import { useState } from "react"
import { useLogin } from "../hooks/auth-status"
import { ShowWhenLoginToggled, useLoginToggle } from "./LoginToggle"

export function Login() {
  const loginToggle = useLoginToggle()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { send } = useLogin(email, password)
  
  return <ShowWhenLoginToggled>
    <div className="fixed w-screen h-screen bg-transparent top-0 left-0" onClick={loginToggle}>
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white drop-shadow shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="w-full  py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">Login</h1>
          </div>
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                  <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button onClick={() => send().then(loginToggle)} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Login Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ShowWhenLoginToggled>

}