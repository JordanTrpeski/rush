import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountToggleState } from "./components/AccountToggle";
import { RegisterToggleState } from "./components/RegisterToggle";
import { LoginToggleState } from "./components/LoginToggle";
import { SideBarState } from "./components/SideBarToggle";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Test from './pages/Test'
import AddProduct from "./components/AddProduct";
import EditProduct from "./pages/EditProduct";
import MyProduct from "./pages/MyProduct";
import ProductDetail from "./pages/ProductDetail";



function App() {
  return (
    <AccountToggleState>
      <RegisterToggleState>
        <LoginToggleState>
          <SideBarState>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test/:id" element={<Test />} />
                <Route path="/test" element={<Test />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/edit-product" element={<EditProduct />} />
                <Route path="/my-product" element={<MyProduct />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </SideBarState>
        </LoginToggleState>
      </RegisterToggleState>
    </AccountToggleState>
  )
}

export default App
