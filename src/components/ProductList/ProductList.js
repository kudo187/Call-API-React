/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-info text-white font-weight-bold text-uppercase">
                    Danh sách sản phẩm
              </div>
                <div className="card-body">
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
