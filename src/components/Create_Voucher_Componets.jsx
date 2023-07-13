import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import VoucherService from '../services/VoucherService'
export default class Create_Voucher_Componets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ngayBatDau: '',
            ngayKetThuc: '',
            ma: '',
            ten: '',
            hinhThucGiam: true,
            trangThai: 0,
            giaTriGiam: '',
            giaTriGiamToiDa: '',
            customer: [],
            selectedCustomer: null,
        }
        this.changeDateTo = this.changeDateTo.bind(this);
        this.changeDateFrom = this.changeDateFrom.bind(this);
        this.changeId = this.changeId.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeCustomer = this.changeCustomer.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeValueMax = this.changeValueMax.bind(this);
        this.saveVoucher = this.saveVoucher.bind(this);
    }

    saveVoucher = (e) => {
        e.preventDefault();
        let voucher = {
            ngayBatDau: this.state.ngayBatDau, ngayKetThuc: this.state.ngayKetThuc, ma: this.state.ma,
            ten: this.state.ten, hinhThucGiam: this.state.hinhThucGiam, trangThai: this.state.trangThai, giaTriGiam: this.state.giaTriGiam,
            giaTriGiamToiDa: this.state.giaTriGiamToiDa, kh: { ma: this.state.selectedCustomer }
        }
        console.log('voucher =>' + JSON.stringify(voucher));
        if (Number(this.state.selectedCustomer) === 0) {
            alert('Please select a customer');
        }
        else if (this.state.ma.length > 10) {
            alert('Id voucher must be less than 10 characters');
        }
        else {
            VoucherService.createVoucher(voucher).then(res => {
                alert('Save Successful');
                window.location.href = "/voucher/index";
            });
        }
    }
    componentDidMount() {
        this.ListCustomer();
    }

    ListCustomer = () => {
        CustomerService.getAllCustomer().then((response) => {
            this.setState({ customer: response.data }); // Lưu danh sách khách hàng vào state
        }).catch(error => {
            console.log(error);
        })
    }
    changeDateTo = (e) => {
        this.setState({ ngayBatDau: e.target.value });
    }
    changeDateFrom = (e) => {
        this.setState({ ngayKetThuc: e.target.value });
    }
    changeId = (e) => {
        this.setState({ ma: e.target.value });
    }
    changeName = (e) => {
        this.setState({ ten: e.target.value });
    }
    changeStatus = (e) => {
        this.setState({ trangThai: e.target.value })
    }
    changeCustomer = (e) => {
        this.setState({ selectedCustomer: e.target.value });
    }
    changeValue = (e) => {
        this.setState({ giaTriGiam: e.target.value })
    }
    changeValueMax = (e) => {
        this.setState({ giaTriGiamToiDa: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center">Add Voucher</h2>
                    <div className="row">
                        <div className="col-md-2 padd2"><Link className="btn btn-success" to="/voucher/index">Back</Link></div>
                    </div>
                    <form className="col-md-10" id="myForm" onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        From
                                    </label>
                                    <input type="date" value={this.state.ngayBatDau} name="ngayBatDau"
                                        onChange={this.changeDateTo} className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        To
                                    </label>
                                    <input type="date" value={this.state.ngayKetThuc} name="ngayKetThuc"
                                        onChange={this.changeDateFrom} className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Mã Giảm Giá
                                    </label>
                                    <input type="text" value={this.state.ma} name="ma"
                                        onChange={this.changeId} className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Tên Phiếu
                                    </label>
                                    <input className="form-control" type="text" name="ten" value={this.state.ten}
                                        onChange={this.changeName} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Khách Hàng
                                    </label>
                                    <select className="form-select" aria-label="Default select example" name="ma_kh" value={this.state.selectedCustomer || ''}
                                        onChange={this.changeCustomer}>
                                        <option value={0}>Select Customer</option>
                                        {this.state.customer.map((cus) => (
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
                                            checked={this.state.hinhThucGiam} onChange={this.changeForm = () => this.setState({ hinhThucGiam: true })} /> Giảm %
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="hinhThucGiam" value="false"
                                            checked={!this.state.hinhThucGiam} onChange={this.changeForm = () => this.setState({ hinhThucGiam: false })} /> Giảm
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
                                    <select className="form-select" name="trangThai" value={this.state.trangThai} onChange={this.changeStatus}>
                                        <option value="0">Chưa Dùng</option>
                                        <option value="1">Đã Dùng</option>
                                        <option value="2">Hết Hạn</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Giá trị giảm
                                    </label>
                                    <input type="text" className="form-control" name="giaTriGiam" value={this.state.giaTriGiam}
                                        onChange={this.changeValue} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Giá trị giảm tối đa
                                    </label>
                                    <input type="text" className="form-control" name="giaTriGiamToiDa" value={this.state.giaTriGiamToiDa}
                                        onChange={this.changeValueMax} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-5">
                                        <br />
                                        <button type="submit" className="btn btn-success" onClick={this.saveVoucher}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


