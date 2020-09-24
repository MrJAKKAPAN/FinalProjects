import React from "react";

class Item extends React.Component {
  render() {
    const { add_to_cart, product } = this.props;

    return (
      <tbody>
        <tr>
          <td className="item__name">{product.id}</td>
          <td className="item__name">{product.name}</td>
          <td className="item__price">{product.price.toFixed(2)}</td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => add_to_cart(e, product)}
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Item;
