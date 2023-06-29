import React, { useEffect, useState } from 'react'
import VoucherService from '../services/VoucherService'

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
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>From</th>
                    <th>To</th>
                </thead>
                <tbody>
                    {
                        voucher.map(
                            voucher =>
                                <tr key={voucher.ma}>
                                    <td>{voucher.ma}</td>
                                    <td>{voucher.ngayBatDau}</td>
                                    <td>{voucher.ngayKetThuc}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListVoucher
