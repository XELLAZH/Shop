import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminFeedbackPage from "./Pages/AdminFeedbackPage";
import AdminPopularPage from "./Pages/AdminPopularPage";
import AdminBoughtAmountPage from "./Pages/AdminBoughtAmountPage";
import AdminMostActiveDistrictPage from "./Pages/AdminMostActiveDistrictPage";
import AdminOrdersPage from "./Pages/AdminOrdersPage";
import ContactsPage from "./Pages/ContactsPage";
import PaymentPage from "./Pages/PaymentPage";
import DeliveryPage from "./Pages/DeliveryPage";
import ProductsVideoPage from "./Pages/ProductsVideoPage";
import ProductsDoorphonesPage from "./Pages/ProductsDoorphonesPage";
import ProductsCabelsPage from "./Pages/ProductsCabelsPage";
import ProductsFiresecurePage from "./Pages/ProductsFiresecurePage";
import CartPage from "./Pages/CartPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/feedback" element={<AdminFeedbackPage />} />
          <Route path="/admin/popular" element={<AdminPopularPage />} />
          <Route
            path="/admin/bought-amount"
            element={<AdminBoughtAmountPage />}
          />
          <Route
            path="/admin/active-district"
            element={<AdminMostActiveDistrictPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/payment-info" element={<PaymentPage />} />
          <Route path="/delivery-info" element={<DeliveryPage />} />

          <Route path="/products/video" element={<ProductsVideoPage />} />
          <Route
            path="/products/doorphones"
            element={<ProductsDoorphonesPage />}
          />
          <Route path="/products/cabels" element={<ProductsCabelsPage />} />
          <Route
            path="/products/firesecure"
            element={<ProductsFiresecurePage />}
          />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
