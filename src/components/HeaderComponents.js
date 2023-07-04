import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HeaderComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <header className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className='col-md-1'><Link to="/customer/index" className='link-offset-2 link-underline link-underline-opacity-0'>Customer</Link></div>
                    <div className='col-md-1'><Link to="/voucher/index" className='link-offset-2 link-underline link-underline-opacity-0'>Voucher</Link></div>
                </header>
            </div>
        )
    }
}
export default HeaderComponents;
