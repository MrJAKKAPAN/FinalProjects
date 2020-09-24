import React from "react";
import Item from "./card";

class List extends React.Component {
  render() {
    const { add_to_cart, products } = this.props;

    return (
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">รุ่น</th>
            <th scope="col">ราคา</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {products.map((product) => (
          <Item
            key={product.name}
            product={product}
            add_to_cart={add_to_cart}
          />
        ))}
      </table>
    );
  }
}

export default List;
