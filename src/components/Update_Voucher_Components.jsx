// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import CustomerService from '../services/CustomerService'
// import VoucherService from '../services/VoucherService';

// export default class Update_Voucher_Components extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             ngayBatDau: '',
//             ngayKetThuc: '',
//             ma: 'p',
//             ten: '',
//             hinhThucGiam: true,
//             trangThai: 0,
//             giaTriGiam: '',
//             giaTriGiamToiDa: '',
//             customer: [],
//             selectedCustomer: null,
//         }
//         this.changeDateTo = this.changeDateTo.bind(this);
//         this.changeDateFrom = this.changeDateFrom.bind(this);
//         this.changeId = this.changeId.bind(this);
//         this.changeName = this.changeName.bind(this);
//         this.changeStatus = this.changeStatus.bind(this);
//         this.changeCustomer = this.changeCustomer.bind(this);
//         this.changeValue = this.changeValue.bind(this);
//         this.changeValueMax = this.changeValueMax.bind(this);
//     }

//     updateCustomer = (e) => {
//         e.preventDefault();
//         let voucher = {
//             ngayBatDau: this.state.ngayBatDau, ngayKetThuc: this.state.ngayKetThuc, ma: this.state.ma,
//             ten: this.state.ten, hinhThucGiam: this.state.hinhThucGiam, trangThai: this.state.trangThai, giaTriGiam: this.state.giaTriGiam,
//             giaTriGiamToiDa: this.state.giaTriGiamToiDa, kh: { ma: this.state.selectedCustomer }
//         }
//         console.log('voucher =>' + JSON.stringify(voucher));
//     }
//     componentDidMount() {
//         this.ListCustomer();
//         console.log(this.state.ma);
//         VoucherService.getById(this.state.ma).then((res) => {
//             let voucher = res.data;
//             this.setState({
//                 ma: voucher.ma,
//                 ten: voucher.ten,
//                 ngayBatDau: voucher.ngayBatDau,
//                 ngayKetThuc: voucher.ngayKetThuc,
//                 hinhThucGiam: voucher.hinhThucGiam,
//                 trangThai: voucher.trangThai,
//                 giaTriGiam: voucher.giaTriGiam,
//                 giaTriGiamToiDa: voucher.giaTriGiamToiDa,
//                 selectedCustomer: voucher.kh.ma
//             });
//         });
//     }

//     ListCustomer = () => {
//         CustomerService.getAllCustomer().then((response) => {
//             this.setState({ customer: response.data }); // Lưu danh sách khách hàng vào state
//         }).catch(error => {
//             console.log(error);
//         })
//     }
//     changeDateTo = (e) => {
//         this.setState({ ngayBatDau: e.target.value });
//     }
//     changeDateFrom = (e) => {
//         this.setState({ ngayKetThuc: e.target.value });
//     }
//     changeId = (e) => {
//         this.setState({ ma: e.target.value });
//     }
//     changeName = (e) => {
//         this.setState({ ten: e.target.value });
//     }
//     changeStatus = (e) => {
//         this.setState({ trangThai: e.target.value })
//     }
//     changeCustomer = (e) => {
//         this.setState({ selectedCustomer: e.target.value });
//     }
//     changeValue = (e) => {
//         this.setState({ giaTriGiam: e.target.value })
//     }
//     changeValueMax = (e) => {
//         this.setState({ giaTriGiamToiDa: e.target.value })
//     }
//     render() {

//         return (
//             <div>
//                 <div className="container">
//                     <h2 className="text-center">Add Voucher</h2>
//                     <div className="row">
//                         <div className="col-md-2 padd2"><Link className="btn btn-success" to="/voucher/index">Back</Link></div>
//                     </div>
//                     <form className="col-md-10" id="myForm" onSubmit={this.submit}>
//                         <div className="row">
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         From
//                                     </label>
//                                     <input type="date" value={this.state.ngayBatDau} name="ngayBatDau"
//                                         onChange={this.changeDateTo} className='form-control' />
//                                 </div>
//                             </div>
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         To
//                                     </label>
//                                     <input type="date" value={this.state.ngayKetThuc} name="ngayKetThuc"
//                                         onChange={this.changeDateFrom} className='form-control' />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Mã Giảm Giá
//                                     </label>
//                                     <input type="text" value={this.state.ma} name="ma"
//                                         onChange={this.changeId} className='form-control' disabled />
//                                 </div>
//                             </div>
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Tên Phiếu
//                                     </label>
//                                     <input className="form-control" type="text" name="ten" value={this.state.ten}
//                                         onChange={this.changeName} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Khách Hàng
//                                     </label>
//                                     <select className="form-select" aria-label="Default select example" name="ma_kh" value={this.state.selectedCustomer || ''}
//                                         onChange={this.changeCustomer}>
//                                         <option value={0}>Select Customer</option>
//                                         {this.state.customer.map((cus) => (
//                                             <option key={cus.ma} value={cus.ma}>
//                                                 {cus.ten}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Hình Thức Giảm
//                                     </label>
//                                     <div className="form-check">
//                                         <input type="radio" className="form-check-input" name="hinhThucGiam" value="true"
//                                             checked={this.state.hinhThucGiam} onChange={this.changeForm = () => this.setState({ hinhThucGiam: true })} /> Giảm %
//                                     </div>
//                                     <div className="form-check">
//                                         <input type="radio" className="form-check-input" name="hinhThucGiam" value="false"
//                                             checked={!this.state.hinhThucGiam} onChange={this.changeForm = () => this.setState({ hinhThucGiam: false })} /> Giảm
//                                         Giá Tiền
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Trạng Thái
//                                     </label>
//                                     <select className="form-select" name="trangThai" value={this.state.trangThai} onChange={this.changeStatus}>
//                                         <option value="0">Chưa Dùng</option>
//                                         <option value="1">Đã Dùng</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Giá trị giảm
//                                     </label>
//                                     <input type="text" className="form-control" name="giaTriGiam" value={this.state.giaTriGiam}
//                                         onChange={this.changeValue} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <label className="form-label">
//                                         Giá trị giảm tối đa
//                                     </label>
//                                     <input type="text" className="form-control" name="giaTriGiamToiDa" value={this.state.giaTriGiamToiDa}
//                                         onChange={this.changeValueMax} />
//                                 </div>
//                             </div>
//                             <div className="col-md-5">
//                                 <div className="row">
//                                     <div className="col-md-5">
//                                         <br />
//                                         <button type="submit" className="btn btn-success" onClick={this.updateCustomer}>Save</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import VoucherService from '../services/VoucherService';

const Update_Voucher_Component = () => {
    const { id } = useParams();
    const [ngayBatDau, setNgayBatDau] = useState('');
    const [ngayKetThuc, setNgayKetThuc] = useState('');
    const [ma, setMa] = useState(id);
    const [ten, setTen] = useState('');
    const [hinhThucGiam, setHinhThucGiam] = useState(true);
    const [trangThai, setTrangThai] = useState(0);
    const [giaTriGiam, setGiaTriGiam] = useState('');
    const [giaTriGiamToiDa, setGiaTriGiamToiDa] = useState('');
    const [customer, setCustomer] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        ListCustomer();
        VoucherService.getById(ma).then((res) => {
            let voucher = res.data;
            setMa(voucher.ma);
            setTen(voucher.ten);
            setNgayBatDau(voucher.ngayBatDau);
            setNgayKetThuc(voucher.ngayKetThuc);
            setHinhThucGiam(voucher.hinhThucGiam);
            setTrangThai(voucher.trangThai);
            setGiaTriGiam(voucher.giaTriGiam);
            setGiaTriGiamToiDa(voucher.giaTriGiamToiDa);
            setSelectedCustomer(voucher.kh.ma);
        });
    }, [ma]);

    const ListCustomer = () => {
        CustomerService.getAllCustomer()
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const changeDateTo = (e) => {
        setNgayBatDau(e.target.value);
    };

    const changeDateFrom = (e) => {
        setNgayKetThuc(e.target.value);
    };

    const changeId = (e) => {
        setMa(e.target.value);
    };

    const changeName = (e) => {
        setTen(e.target.value);
    };

    const changeStatus = (e) => {
        setTrangThai(e.target.value);
    };

    const changeCustomer = (e) => {
        setSelectedCustomer(e.target.value);
    };

    const changeValue = (e) => {
        setGiaTriGiam(e.target.value);
    };

    const changeValueMax = (e) => {
        setGiaTriGiamToiDa(e.target.value);
    };

    const updateCustomer = (e) => {
        e.preventDefault();
        let voucher = {
            ngayBatDau,
            ngayKetThuc,
            ma,
            ten,
            hinhThucGiam,
            trangThai,
            giaTriGiam,
            giaTriGiamToiDa,
            kh: { ma: selectedCustomer },
        };
        console.log('voucher =>' + JSON.stringify(voucher));
    };

    return (
        <div>
            <div className="container">
                <h2 className="text-center">Add Voucher</h2>
                <div className="row">
                    <div className="col-md-2 padd2">
                        <Link className="btn btn-success" to="/voucher/index">
                            Back
                        </Link>
                    </div>
                </div>
                <form className="col-md-10" id="myForm" onSubmit={updateCustomer}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    From
                                </label>
                                <input type="date" value={ngayBatDau} name="ngayBatDau"
                                    onChange={changeDateTo} className='form-control' />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    To
                                </label>
                                <input type="date" value={ngayKetThuc} name="ngayKetThuc"
                                    onChange={changeDateFrom} className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Mã Giảm Giá
                                </label>
                                <input type="text" value={ma} name="ma"
                                    onChange={changeId} className='form-control' disabled />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Tên Phiếu
                                </label>
                                <input className="form-control" type="text" name="ten" value={ten}
                                    onChange={changeName} />
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
                                    <option value={0}>Select Customer</option>
                                    {customer.map((cus) => (
                                        <option key={cus.ma} value={cus.ma}>
                                            {cus.ten}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Hình Thức Giảm
                                </label>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="hinhThucGiam" value="true"
                                        checked={hinhThucGiam} onChange={() => setHinhThucGiam(true)} /> Giảm %
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="hinhThucGiam" value="false"
                                        checked={!hinhThucGiam} onChange={() => setHinhThucGiam(false)} /> Giảm
                                    Giá Tiền
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Trạng Thái
                                </label>
                                <select className="form-select" name="trangThai" value={trangThai} onChange={changeStatus}>
                                    <option value="0">Chưa Dùng</option>
                                    <option value="1">Đã Dùng</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Giá trị giảm
                                </label>
                                <input type="text" className="form-control" name="giaTriGiam" value={giaTriGiam}
                                    onChange={changeValue} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <label className="form-label">
                                    Giá trị giảm tối đa
                                </label>
                                <input type="text" className="form-control" name="giaTriGiamToiDa" value={giaTriGiamToiDa}
                                    onChange={changeValueMax} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <br />
                                    <button type="submit" className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update_Voucher_Component;
