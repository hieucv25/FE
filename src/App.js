import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListVoucher from './components/ListVoucher';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import ListCustomer from './components/ListCustomer';
import Create_Voucher_Componets from './components/Create_Voucher_Componets';
import Update_Voucher_Components from './components/Update_Voucher_Components';

// class fe extends Component {
//   state = {
//     isLoading: true,
//     kh: []
//   };

//   async componentDidMount() {
//     const response = await fetch('/khach-hang/index');
//     const body = await response.json();
//     this.setState({ kh: body, isLoading: false });
//   }

//   render() {
//     const { kh, isLoading } = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="App-intro">
//             <h2>List KH</h2>
//             {kh.map(kh =>
//               <div key={kh.ma}>
//                 {kh.ten}
//               </div>)}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
// class getListKH extends Component {
//   state = {
//     isLoading: true,
//     kh: []
//   };

//   async componentDidMount() {
//     const response = await fetch('/khach-hang/index');
//     const body = await response.json();
//     this.setState({ kh: body, isLoading: false });
//   }

//   render() {
//     const { kh, isLoading } = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="container">
//         <h2 className="text-center">List Customer</h2>
//         <table className="table table-bordered table-striped">
//           <thead>
//             <th>Name</th>
//             <th>Birth Date</th>
//             <th>Location</th>
//           </thead>
//           <tbody>
//             {
//               kh.map(
//                 kh =>
//                   <tr key={kh.ma}>
//                     <td>{kh.ten}</td>
//                     <td>{kh.sinhNhat}</td>
//                     <td>{kh.diaChi}</td>
//                   </tr>
//               )
//             }
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
function App() {
  return (
    <div>
      <HeaderComponents />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListCustomer />}></Route>
          <Route path="customer/index" element={<ListCustomer />}></Route>
          <Route path="voucher/index" element={<ListVoucher />}></Route>
          <Route path="voucher/add" element={<Create_Voucher_Componets />}></Route>
          <Route path="voucher/view-update/:id" element={<Update_Voucher_Components />}></Route>
        </Routes>
      </div>
      <FooterComponents />
    </div>
  );
}
export default App;
// export const getList = fe;
// export const getList2 = getListKH;
