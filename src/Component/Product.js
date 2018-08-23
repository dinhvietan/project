import React from 'react';
import {Panel, Table} from 'react-bootstrap';
import DataUtils from '../Utils/DataUtils';

import $ from 'jquery';
import './Style/Profile.css'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.onDetail = this.onDetail.bind(this);
    }

    onDetail(event) {
        let Id = $(event.target).parent().attr("id");
        window.location.href = "/productdetail?id="+Id;
        //event.preventDefault();
    }

    buildProductList() {
        let ProductList = DataUtils.getProductList();
        let _productList = [];

        for(let i in ProductList) {
            _productList.push(
                <tr key={i} id={ProductList[i].id} onDoubleClick={this.onDetail}>
                    <td>{parseInt(i) + 1}</td>
                    <td>{ProductList[i].name}</td>
                    <td>{ProductList[i].type}</td>
                    <td>{ProductList[i].price}</td>
                </tr>
            )
        }

        return _productList;
    }

    render() {
        let _productList = this.buildProductList();
        return (
            <div>
                <Panel className="page-panel">
                    <Panel.Heading>
                    <Panel.Title className="parallax"><h2>Product Management</h2></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Table className="product-list" striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_productList}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Product;