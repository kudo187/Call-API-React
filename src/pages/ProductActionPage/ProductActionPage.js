/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            status: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var product = nextProps.itemEditing;
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                status: product.status
            })
        }

    }

    render() {
        var { txtName, txtPrice, status } = this.state;
        return (
            <div className="col-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label> Tên Sản Phẩm:</label>
                        <input
                            type="text"
                            name="txtName"
                            value={txtName} id=""
                            className="form-control"
                            placeholder=""
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label> Giá: </label>
                        <input type="text"
                            name="txtPrice"
                            value={txtPrice}
                            id=""
                            className="form-control"
                            placeholder=""
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label> Trạng Thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                value={status}
                                name="status"
                                className="mr-2"
                                checked={status}
                                onChange={this.onChange}
                            />
                            Còn hàng
                    </label>
                    </div>
                    <Link to="/product-list" className="btn btn-info mr-2">Trở lại</Link>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
                </form>
            </div>
        );
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, status } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: status
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();

    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
