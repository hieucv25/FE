import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import { Link } from 'react-router-dom';

const ListCustomer = () => {
    const [customer, setCustomer] = useState([])
    useEffect(() => {
        CustomerService.getAllCustomer().then((response) => {
            setCustomer(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className="container">
            <h2 className="text-center">List Customer</h2>
            <div className="row">
                <div className="col-md-2 padd2"><Link className="btn btn-success" to="/customer/add">Add Customer</Link></div>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Birth</th>
                    <th>Location</th>
                    <th>Number Phone</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        customer.map(
                            customer =>
                                <tr key={customer.ma}>
                                    <td>{customer.ma}</td>
                                    <td>{customer.ten}</td>
                                    <td>{customer.sinhNhat}</td>
                                    <td>{customer.diaChi}</td>
                                    <td>{customer.sdt}</td>
                                    <td><Link className='btn btn-danger' to={``}>Delete</Link>
                                        <span className="padd"></span>
                                        <Link className='btn btn-success' to={``}>Detail</Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomer