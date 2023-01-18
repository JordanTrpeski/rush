import { useNavigate } from "react-router-dom"
import { useIsLoggedIn, useLogout } from "../hooks/auth-status"
import { ShowWhenAccountToggled } from "./AccountToggle"
import { useLoginToggle } from "./LoginToggle"
import { useRegisterToggle } from "./RegisterToggle"

export default function AccountMenu() {
  const loggedIn = useIsLoggedIn()

  const toggleRegister = useRegisterToggle()
  const toggleLogin = useLoginToggle()
  const navigate = useNavigate()
  const logout = useLogout()

  return <ShowWhenAccountToggled>
    {
      !loggedIn ? <div className="absolute text-white bg-[#4A5568] drop-shadow top-0 right-0">
        <div className="m-4">
          <button onClick={() => toggleLogin()} className="outline w-full p-2 my-2">
            Login
          </button>
          <div>Don't have an account yet?</div>
          <button onClick={() => toggleRegister()} className="outline w-full p-2 my-2">
            Register
          </button>
        </div>
      </div> :
        <div className="absolute text-white bg-[#4A5568] drop-shadow top-0 right-0">
          <div className="m-4">
            <button onClick={() => navigate('/profile')} className="outline w-full p-2 my-3">
              Profile
            </button>
            <div>Do you want to log out ?</div>
            <button onClick={() => logout.send()} className="outline w-full p-2 my-3">
              Logout
            </button>
          </div>
        </div>
    }
  </ShowWhenAccountToggled>
}