import React, { Component } from "react";

export class ProductCart extends Component {

render() {
    
    return (
    // <div>
        <tbody>
        <tr>
            <td>982</td>
            <td>Rocky Doe</td>
            <td>
            <button
                type="button"
                className="btn btn-success"
                style={{ fontSize: "12px" }}
                // onClick={(e)=> onClickRemove(e, addedItem)}
            >
                เพิ่ม
            </button>
            </td>
        </tr>
        </tbody>
    // </div>
    );
}
}

export default ProductCart;
