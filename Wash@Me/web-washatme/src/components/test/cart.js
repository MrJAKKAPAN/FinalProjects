import React from "react";
import AddedItem from "./cartItem";

class Cart extends React.Component{
  render() {
    const { addedItems, onClickRemove } = this.props;

    return (
    //   <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">id</th>
                <th scope="col">รุ่น</th>
                <th scope="col">ราคา</th>
                <th scope="col">จำนวน</th>
                <th scope="col">Action</th>
                </tr>
            </thead>

            {addedItems.map((addedItem) => (
                <AddedItem 
                    key={addedItem.name} 
                    addedItem={addedItem} 
                    onClickRemove={onClickRemove}
                    />
            ))}

        </table>
    //   </div>
    );
  }
}

export default Cart;
