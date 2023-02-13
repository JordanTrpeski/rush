import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountToggleState } from "./components/AccountToggle";
import { RegisterToggleState } from "./components/RegisterToggle";
import { LoginToggleState } from "./components/LoginToggle";
import { SideBarState } from "./components/SideBarToggle";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MyProduct from "./pages/MyProduct";
import ProductDetail from "./pages/ProductDetail";
import ProfilePage from "./pages/Profile";
import FavoriteProduct from "./pages/FavoriteProduct";
import ContactUs from "./pages/ContactUs";
import Warranty from "./pages/Warranty";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { NewProductToggleState } from "./components/AddNewProductToggle";
import { EditProductToggleState } from "./components/EditProductToggle";
import { CanvasProvider } from "./components/Canvas";


function App() {
  return (
    <CanvasProvider>
      <EditProductToggleState>
        <NewProductToggleState>
          <AccountToggleState>
            <RegisterToggleState>
              <LoginToggleState>
                <SideBarState>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/my-product" element={<MyProduct />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/favorite-product" element={<FavoriteProduct />} />
                      <Route path="/contact-us" element={<ContactUs />} />
                      <Route path="/warranty" element={<Warranty />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </SideBarState>
              </LoginToggleState>
            </RegisterToggleState>
          </AccountToggleState>
        </NewProductToggleState>
      </EditProductToggleState>
    </CanvasProvider>
  )
}

export default App
