import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
export default function PrivacyPolicy() {
    return <div>
        <NormalPage sideBar={<HomeSideBar />}>
            <div className="pl-5 pr-5 pt-5">
                <h1 className="text-xl font-bold pb-5 pl-5" >Privacy Policy</h1>
                <p> The applied Privacy Policy published on this side is based on the Law on Personal Data Protection of R. N. Macedonia. In electronic form, the purified text of the Law ( PDF) can be downloaded from the website of the Directorate for Personal Data Protection of R. N. Macedonia (dzlp.mk). We advise you to read the Personal Data Protection Policy and occasionally check it for the latest privacy policy data. By using our website you agree to the terms and conditions set forth in the Privacy Policy and the protection of personal data and the Terms of Use of the Website. If you do not agree with the stated terms, we recommend that you do not use our services.</p>
                <p className="pt-3"> Privacy and Personal Data Protection Policy covers Pazar3.mk privacy practices, mobile version of the website, Android application on Market3, the iOS app of Market3 and the data when communicating with the team of Market3. The personal data processing on this site is in accordance with the personal data protection regulations. We always strive to process personal data with maximum respect for privacy. In order to enable you to use our services, for example to register an advertisement, Market3 processes some types of data for you. This includes more information about the privacy and protection of your personal data.</p>
                <h1 className="text-xl font-bold pt-5 pl-5" >What types of data do we collect and process?</h1>
                <p className="pt-5">When you visit our website, your privacy is fully respected. If you use the website as a visitor, Market3 does not collect any personal information about you. Market3 has only access to data that cannot identify the end user ( non-personal data). These are data related to your device from which you access our web page, data about your Internet search engine, your IP address, location of the device, etc.</p>
                <p className="pt-3">If you, as a user, visit the website and want to contact an advertiser via the “ send e-mail ” field, then your email that you entered will be visible to the advertiser in order to continue communicating about the item. Market3 does not take responsibility and does not have access to communication between the buyer-buyer. The given e-mail will be used exclusively for that purpose and will not be used for other purposes for which the persons did not agree.</p>
                <p className="pt-3">If you recommend an ad to your friend, then an e-mail message from your friend that you enter will be sent via our system. The given e-mail will be used exclusively for that purpose and will not be used for other purposes for which the persons did not agree.</p>
            </div>
        </NormalPage>
    </div>
}