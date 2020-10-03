import React, { Component } from "react";

class ServiceCart extends Component {
    state = {

    };
render() {
    const { addCart, dataService,itemService } = this.props;
    console.log(this.props);
    return (
    // <div>
        <tbody>
            {/* {this.props.itemService.map((item, index) =>{ */}
                {/* {this.props.itemService.map((item, index) => {
                return ( */}
                   <tr >
                    {/* <td>{item.id}</td> */} 
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
                {/* );
            })} */}
        
        </tbody>
    // </div>
    );
}
}

export default ServiceCart;
