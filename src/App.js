import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListVoucher from './components/ListVoucher';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import ListCustomer from './components/ListCustomer';
import Create_Voucher_Componets from './components/Create_Voucher_Componets';
import Update_Voucher_Components from './components/Update_Voucher_Components';
import Create_Customer_Components from './components/Create_Customer_Components';
import { APP_ROUTERS } from './constants';

function App() {
  return (
    <div>
      <HeaderComponents />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListCustomer />}></Route>
          <Route path="customer/add" element={<Create_Customer_Components />}></Route>
          <Route path={APP_ROUTERS.CUSTOMER.INDEX.VALUE} element={<ListCustomer />}></Route>
          <Route path={APP_ROUTERS.CUSTOMER.ADD.VALUE} element={<ListVoucher />}></Route>
          <Route path="voucher/add" element={<Create_Voucher_Componets />}></Route>
          <Route path="voucher/view-update/:id" element={<Update_Voucher_Components />}></Route>
        </Routes>
      </div>
      <FooterComponents />
    </div>
  );
}
export default App;
