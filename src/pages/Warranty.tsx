import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
import CustomerSupport from "../components/CustomerSupport"
export default function Warranty() {
  return <div>
  <NormalPage sideBar={<HomeSideBar/>}>   
  <div className="pl-5 pr-5">
    <h1 className="text-xl font-bold pb-5 pl-5" >Purchase and sale of vehicles</h1>
<p> Never pay in advance! Check the functionality of the item before paying.
Do not share confidential information such as: transaction account number, payment card number, usernames and passwords with anyone.
Always ask for a personal identification document with the person you are contracting with. Check if the person is the legal owner of the item you want to buy. The owner of the item is always required to return the stolen item, even if he/she is not aware of the item's origin when placing the order.
Be careful when dealing with people outside the country. Foreign transactions are high-risk and difficult to control and stop. The fraudster can manipulate with fake documentation or certificates.
Never use payment services such as: Western Union, BidPay or Money Gram because they are often subject to fraud. Control and refund procedures are complicated.
Be careful when an offer seems too good to be true or if the other party is in a rush to close the deal faster.
For transactions involving large sums of money, it is a good idea to first consult with a bank to get advice and instructions for a safe transaction.</p>

<h1 className="text-xl font-bold pb-5 pt-5 pl-5" >Purchase and sale of vehicles</h1>

<p>Check if the person selling has documentation that he is the owner of the vehicle. Try to find out if it is under mortgage, there is a record of participation in a traffic accident and caused damage or performed repairs.
If you're selling a vehicle, don't let the interested buyer take the test drive alone. Ask the buyer to show a driver's license with the appropriate category for the vehicle.
Beware of bogus "car brokers". They call with the promise that they will help you sell the vehicle faster. </p>
</div>
  </NormalPage>
  </div>
}