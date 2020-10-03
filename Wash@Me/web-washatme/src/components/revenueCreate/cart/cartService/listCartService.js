import React, { Component } from "react";
import ServiceCart from './cardService';

export class listService extends Component {
render() {
    return (
        // table-head-fixed
    <table className="table  table-sm table-head-fixed">
        <thead >
        <tr>
            <th>ชื่อบริการ</th>
            <th>ราคา</th>
            <th>Action</th>
        </tr>
        </thead>
        <ServiceCart  />
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

export default listService;
