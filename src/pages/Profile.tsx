import { EmptyPage } from "../components/Layout";
import { Profile } from "../components/Profile";

export default function ProfilePage() {
  return <EmptyPage>
    <div className="flex justify-center w-full pt-10">
      <Profile />
    </div>
  </EmptyPage>
}