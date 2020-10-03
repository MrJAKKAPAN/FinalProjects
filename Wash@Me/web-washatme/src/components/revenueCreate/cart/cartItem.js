import React, { Component } from 'react'

export class cartItem extends Component {
    render() {
        return (
            <tbody >
            <tr>
              <td className="item__name">sadad</td>
              <td className="item__name">asdad</td>
              <td className="item__price">33333</td>
              <td>1</td>
              <td>
              <button
                  type="button"
                  className="btn btn-danger"
                  style={{ fontSize: "12px" }}
                //   onClick={(e)=> onClickRemove(e, addedItem)}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          </tbody>
        )
    }
}

export default cartItem;
