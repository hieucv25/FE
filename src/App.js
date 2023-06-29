import './App.css';
import { Component } from 'react';
import ListVoucher from './components/ListVoucher';

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
      <ListVoucher></ListVoucher>
    </div>
  );
}
export default App;
// export const getList = fe;
// export const getList2 = getListKH;
