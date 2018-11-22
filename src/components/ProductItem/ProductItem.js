/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className={`bg-${statusClass}`}>{statusName}</td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Sửa</Link>
                    <span onClick = {() => this.onDelete(product.id)} className="ml-2 btn btn-danger ">Xóa</span>
                </td>
            </tr>
        );
    }

    onDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Bạn chắc chắn muốn xóa ?")) {
            this.props.onDelete(id);
        }
        
    }
}

export default ProductItem;
