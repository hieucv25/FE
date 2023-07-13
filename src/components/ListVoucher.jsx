import React, { useEffect, useState } from 'react'
import VoucherService from '../services/VoucherService'
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';

const ListVoucher = () => {
    const [voucher, setVoucher] = useState([]);
    const [customer, setCustomer] = useState([]);
    // const [ngayBatDau, setNgayBatDau] = useState('');
    // const [ngayKetThuc, setNgayKetThuc] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageData, setPageData] = useState([]);
    useEffect(() => {
        ListCustomer();
        fetchData();
    }, [pageNumber])
    const fetchData = async () => {
        try {
            const response = await VoucherService.paging(pageNumber);
            const data = response.data.content;
            setPageData(data);
            console.log(data);
        } catch (error) { console.log(error); }
    };
    const handlePreviousPage = () => {
        if (pageNumber > 0) {
            setPageNumber((prevPageNumber) => prevPageNumber - 1);
        }
    };

    const handleNextPage = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
    const deleteById = (id) => {
        VoucherService.deleteById(id).then((response) => {
            if (response.status === 200) {
                alert('Delete successfully');
            }
            fetchData();
        }).catch(error => {
            console.log(error);
        })
    }

    const ListCustomer = () => {
        CustomerService.getAllCustomer()
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const changeCustomer = (e) => {
    //     const customerValue = e.target.value;
    //     if (Number(customerValue) === 0) {
    //         VoucherService.getAllVouchers().then((response) => {
    //             setVoucher(response.data);
    //             console.log(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //         })
    //     } else {
    //         setSelectedCustomer(customerValue);
    //         VoucherService.searchByCustomer(customerValue).then((response) => {
    //             setVoucher(response.data);
    //             console.log(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //         })
    //     };
    // }
    return (
        <div className="container">
            <h2 className="text-center">List Voucher</h2>
            <div className="row">
                <div className="col-md-2 padd2"><Link className="btn btn-success" to="/voucher/add">Add Voucher</Link></div>
            </div>
            {/* <form className="col-md-10 padd2" id="myForm">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <label className="form-label">
                                From
                            </label>
                            <input type="date" value={ngayBatDau} name="ngayBatDau"
                                className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <label className="form-label">
                                To
                            </label>
                            <input type="date" value={ngayKetThuc} name="ngayKetThuc"
                                className='form-control' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <label className="form-label">
                                Khách Hàng
                            </label>
                            <select className="form-select" aria-label="Default select example" name="ma_kh" value={selectedCustomer || ''}
                                onChange={changeCustomer}>
                                <option value={0}>All Customer</option>
                                {customer.map((cus) => (
                                    <option key={cus.ma} value={cus.ma}>
                                        {cus.ten}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>

            </form> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                    <th>Discount Form</th>
                    <th>Customer</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        pageData.map(
                            (voucher) =>
                                <tr key={voucher.ma}>
                                    <td>{voucher.ma}</td>
                                    <td>{voucher.ten}</td>
                                    <td>{voucher.ngayBatDau}</td>
                                    <td>{voucher.ngayKetThuc}</td>
                                    <td>{(() => {
                                        switch (voucher.trangThai) {
                                            case 0:
                                                return 'Not Use';
                                            case 1:
                                                return 'Used';
                                            case 2:
                                                return 'Expired';
                                            default:
                                                return 'Unknown';
                                        }
                                    })()}</td>
                                    <td>{voucher.hinhThucGiam === 0 ? 'Discount' : 'Reduce %'}</td>
                                    <td>{voucher.kh.ten}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteById(voucher.ma)}>Delete</button>
                                        <span className="padd"></span>
                                        <Link className='btn btn-success' to={`/voucher/view-update/${voucher.ma}`}>Detail</Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" onClick={handlePreviousPage}>Previous</button></li>
                    <li class="page-item"><button class="page-link" disabled>{pageNumber}</button></li>
                    <li class="page-item"><button class="page-link" onClick={handleNextPage}>Next</button></li>
                </ul>
            </nav>
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
