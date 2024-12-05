import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import ProductsDisplay from './ProductsDisplay';
import SellerForm from './SellerForm';
import { ProductsProvider } from './Context/ProductsProvider';
import Cart from './Cart';
import LoginFile from './Login';
import Registration from './Register';
import SellerRegistration from './SellerRegistration';
import { SellerProvider } from './Context/SellerProvider';
import { RegistrationProvider } from './Context/RegistrationProvider';
import { PastOrderProvider } from './Context/PastOrderProvider';
import CartProvider from './Context/CartProvider';
import ViewPastOrders from './Components/ViewPastOrders';
import AdminLogin from './Components/AdminLogin';
import { AdminProvider } from './Context/AdminProvider';
import DashBoard from './Components/DashBoard';
import SellerRequests from './Components/SellerRequests';
import DashBoardHost from './Components/DashBoardHost';
import { SellerRequestProvider } from './Context/SellerRequestProvider';
import Orders from './Components/Orders';
import ProductListAdmin from './Components/ProductListAdmin';
import UserListAdmin from './Components/UserListAdmin';
import { UsersProvider } from './Context/UsersProvider';
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
          <PastOrderProvider>
            <UsersProvider>
              <AdminProvider>
                <SellerRequestProvider>
                  <SellerProvider>
                    <RegistrationProvider>
                      <BrowserRouter>
                        <Routes>
                          <Route path='/' element={<Home />}>
                            <Route path='home' element={<ProductsDisplay />} />
                            {/* <Route path='seller' element={<SellerForm />} /> */}
                            <Route path='cart' element={<Cart />} />
                            <Route path='sellerInfo' element={<SellerRegistration />} />
                            <Route path='login' element={<LoginFile />} />
                            <Route path='register' element={<Registration />} />
                            <Route path='pastOrdersTable' element={<ViewPastOrders />} />
                            <Route path='/adminLogin' element={<AdminLogin />} />
                          </Route>
                          <Route path='/dashboard' element={<DashBoardHost />} >
                            <Route path='sellerRequest' element={<SellerRequests />} />
                            <Route path='productList' element={<ProductListAdmin />} />
                            <Route path='pastOrdersTable' element={<ViewPastOrders />} />
                            <Route path='users' element={<UserListAdmin />} />
                          </Route>
                        </Routes>
                      </BrowserRouter>
                    </RegistrationProvider>
                  </SellerProvider>
                </SellerRequestProvider>
              </AdminProvider>
            </UsersProvider>
          </PastOrderProvider>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
