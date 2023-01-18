import ContactUs from "../components/ContactUs"
export default function NotFound() {
  return <div>
    <ContactUs></ContactUs>
    <p className="text-bold text-xl"> You clicked a dead end link. </p>
  </div>
}