import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
const Create_Customer_Components = () => {
    const [ten, setTen] = useState('');
    const [sinhNhat, setSinhNhat] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [gioiTinh, setGioiTinh] = useState(true);
    const [cmt, setCmt] = useState('');
    const [scc, setScc] = useState('');
    const [trangThai, setTrangThai] = useState(0);
    const [diemTichLuy, setDiemTichLuy] = useState(0);
    const changeName = (e) => {
        setTen(e.target.value);
    }
    const changeBirthDay = (e) => {
        setSinhNhat(e.target.value);
    }
    const changeLocation = (e) => {
        setDiaChi(e.target.value);
    }
    const changeNumberPhone = (e) => {
        setSdt(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeCMT = (e) => {
        setCmt(e.target.value);
    }
    const changeSCC = (e) => {
        setScc(e.target.value);
    }
    const changeStatus = (e) => {
        setTrangThai(e.target.value);
    }
    const changePoint = (e) => {
        setDiemTichLuy(e.target.value);
    }
    const saveCustomer = (e) => {
        e.preventDefault();
        let customer = {
            ten,
            sinhNhat,
            diaChi,
            sdt,
            email,
            gioiTinh,
            cmt,
            scc,
            trangThai,
            diemTichLuy
        }
        console.log('customer =>' + JSON.stringify(customer));
        CustomerService.createCustomer(customer).then(() => {
            alert('Save customer success')
            window.location.href = "/customer/index"
        });
    }
    return (
        <div>
            <div>
                <div className="container">
                    <h2 className="text-center">Add Customer</h2>
                    <div className="row">
                        <div className="col-md-2 padd2"><Link className="btn btn-success" to="/customer/index">Back</Link></div>
                    </div>
                    <form className="col-md-10" id="myForm">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Tên Khách Hàng
                                    </label>
                                    <input type="text" value={ten}
                                        onChange={changeName} className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Ngày Sinh
                                    </label>
                                    <input type="date" value={sinhNhat}
                                        onChange={changeBirthDay} className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Địa Chỉ
                                    </label>
                                    <input className="form-control" type="text" value={diaChi}
                                        onChange={changeLocation} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Số Điện Thoại
                                    </label>
                                    <input className="form-control" type="text" value={sdt}
                                        onChange={changeNumberPhone} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Email
                                    </label>
                                    <input className="form-control" type="email" value={email}
                                        onChange={changeEmail} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Giới Tính
                                    </label>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="true"
                                            checked={gioiTinh} onChange={() => setGioiTinh(true)} /> Nam
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="false"
                                            checked={!gioiTinh} onChange={() => setGioiTinh(false)} /> Nữ
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Chứng Minh Thư
                                    </label>
                                    <input type="text" className="form-control" value={cmt}
                                        onChange={changeCMT} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Trạng Thái
                                    </label>
                                    <select className="form-select" value={trangThai} onChange={changeStatus}>
                                        <option value="0">Khách Hàng Mới</option>
                                        <option value="1">Khách Hàng Thâm Niên</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Điểm Tích Luỹ
                                    </label>
                                    <input type="text" className="form-control" value={diemTichLuy}
                                        onChange={changePoint} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <label className="form-label">
                                        Số Căn Cước
                                    </label>
                                    <input type="text" className="form-control" value={scc}
                                        onChange={changeSCC} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-5">
                                        <br />
                                        <button type="submit" className="btn btn-success" onClick={saveCustomer}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create_Customer_Components;
