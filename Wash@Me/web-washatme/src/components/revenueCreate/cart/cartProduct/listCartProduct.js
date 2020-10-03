import React, { Component } from "react";
import ProductCart from './cardProduct';

export class listProduct extends Component {
render() {
    return (
        // table-head-fixed
    <table className="table  table-sm table-head-fixed">
        <thead >
        <tr>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>Action</th>
        </tr>
        </thead>
        <ProductCart  />
        {/* {products.map((product) => (
        <Item
            key={product.name}
            product={product}
            add_to_cart={add_to_cart}
        />
        ))} */}

    </table>
    );
}
}

export default listProduct;
