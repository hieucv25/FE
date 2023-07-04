import React, { useEffect, useState } from 'react'
import VoucherService from '../services/VoucherService'
import { Link } from 'react-router-dom';

const ListVoucher = () => {
    const [voucher, setVoucher] = useState([])
    useEffect(() => {
        VoucherService.getAllVouchers().then((response) => {
            setVoucher(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className="container">
            <h2 className="text-center">List Voucher</h2>
            <div className="row">
                <div className="col-md-2 padd2"><Link className="btn btn-success" to="/voucher/add">Add Voucher</Link></div>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                    <th>Customer</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        voucher.map(
                            voucher =>
                                <tr key={voucher.ma}>
                                    <td>{voucher.ma}</td>
                                    <td>{voucher.ten}</td>
                                    <td>{voucher.ngayBatDau}</td>
                                    <td>{voucher.ngayKetThuc}</td>
                                    <td>{voucher.trangThai == 0 ? 'Not Use' : 'Used'}</td>
                                    <td>{voucher.kh.ten}</td>
                                    <td><Link className='btn btn-danger'>Delete</Link>
                                        <span className="padd"></span>
                                        <Link className='btn btn-success' to={`/voucher/view-update/${voucher.ma}`}>Detail</Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListVoucher
// import React, { Component } from 'react';
// import VoucherService from '../services/VoucherService';
// import { Link } from 'react-router-dom';

// class ListVoucher extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vouchers: [],
//         };
//     }
//     componentDidMount() {
//         VoucherService.getAllVouchers()
//             .then((response) => {
//                 this.setState({ vouchers: response.data });
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     render() {
//         const { vouchers } = this.state;

//         return (
//             <div className="container">
//                 <h2 className="text-center">List Voucher</h2>
//                 <div className="row">
//                     <div className="col-md-2 padd2">
//                         <Link className="btn btn-success" to="/voucher/add">
//                             Add Voucher
//                         </Link>
//                     </div>
//                 </div>
//                 <table className="table table-bordered table-striped">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>From</th>
//                             <th>To</th>
//                             <th>Status</th>
//                             <th>Customer</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {vouchers.map((voucher) => (
//                             <tr key={voucher.ma}>
//                                 <td>{voucher.ma}</td>
//                                 <td>{voucher.ten}</td>
//                                 <td>{voucher.ngayBatDau}</td>
//                                 <td>{voucher.ngayKetThuc}</td>
//                                 <td>{voucher.trangThai === 0 ? 'Not Use' : 'Used'}</td>
//                                 <td>{voucher.kh.ten}</td>
//                                 <td>
//                                     <Link className="btn btn-danger">Delete</Link>
//                                     <span className="padd"></span>
//                                     <Link className="btn btn-success" to={'/voucher/view-update/' + voucher.ma}>
//                                         Detail
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default ListVoucher;
