import { useEffect, useState } from "react"
import { useUserMutation, useUserQuery } from "../hooks/auth-status";
import { User } from "../sdk/User";

function EditableField({ value, onValueChange, onValueSubmit }: { value: string, onValueSubmit: () => void, onValueChange: (value: string) => void }) {
  const [open, setOpen] = useState(false)
  return <div className="p-2 bg-white border shadow rounded w-96">
    <div className="flex justify-between items-center">
      {
        open ? <input value={value} onChange={e => onValueChange(e.target.value)} className="ml-2 border-solid border-2 border-gray-300 rounded" /> : <div className="ml-2">{value}</div>
      }
      <button type="button" onClick={() => { if (open) onValueSubmit(); setOpen(!open) }} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">{open ? 'Save' : 'Edit'}</button>
    </div>
  </div >
}

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const {send} = useUserMutation(() => User.changePassword(oldPassword, newPassword), [oldPassword, newPassword])

  return <div>
    <h4 className="text-xl mt-4 text-gray-900 font-bold">Password</h4>
    <div className="p-2 bg-white border shadow rounded w-96">
      <div className="flex flex-col">
        <div>Old Password</div>
        <input value={oldPassword} onChange={e => setOldPassword(e.target.value)} type="password" className="mb-2 border-solid border-2 border-gray-300 rounded" />
        <div>New Password</div>
        <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="password" className="mb-2 border-solid border-2 border-gray-300 rounded" />
        <button onClick={send} type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">Change</button>
      </div>
    </div >
  </div>
}

interface UserProfile {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber?: string
}  

// todo: add error handling here
// todo: add error handing in register/login/logout
function PersonalInfo() {
  const profile = useUserQuery(user => user.metadata() as Promise<UserProfile>, ['profile'])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const {send} = useUserMutation(() => User.update({ email, firstName, lastName, phoneNumber }), [email, firstName, lastName, phoneNumber])

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName)
      setLastName(profile.lastName)
      setEmail(profile.email)
      setPhoneNumber(profile.phoneNumber ?? '')
    }
  }, [profile])


  return <div>
    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
    <EditableField value={firstName} onValueChange={setFirstName} onValueSubmit={send}></EditableField>
    <EditableField value={lastName} onValueChange={setLastName} onValueSubmit={send}></EditableField>
    <EditableField value={email} onValueChange={setEmail} onValueSubmit={send}></EditableField>
    <EditableField value={phoneNumber} onValueChange={setPhoneNumber} onValueSubmit={send}></EditableField>
  </div>
}

export function Profile() {
  return (
    <div>
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <PersonalInfo />
        <PasswordChange />
      </div>
    </div>
  )
}