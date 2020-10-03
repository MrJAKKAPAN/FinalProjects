import React, { Component } from 'react'
import AddItem from './cartItem';

export class Cart extends Component {
    render() {
        return (
            // <table className="table table-sm table-head-fixed" style={{textAlign:'center'}}>
            <table className="table  table-sm table-head-fixed" style={{textAlign:'center'}}>
            <thead >
                <tr>
                <th scope="col">id</th>
                <th scope="col">รุ่น</th>
                <th scope="col">ราคา</th>
                <th scope="col">จำนวน</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
        </table>
        )
    }
}

export default Cart
