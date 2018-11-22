/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    },
    
]

const MenuLink = ({lable, to, activeOnLyWhenExact}) =>{
    return(
        <Route
        path={to}
        exact={activeOnLyWhenExact}
        children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={`nav-item ${active}`}>
                    <Link className="nav-link" to={to}>{lable}</Link>
                </li>   
            )
        }}
        />
    )
}
class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">CALL API</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.showMenu(menus)}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    showMenu = (menus) =>{
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return(
                    <MenuLink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnLyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;
