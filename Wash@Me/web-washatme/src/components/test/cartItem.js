import React  from "react";


class AddedItem extends React.Component  {
  render() {
    const { addedItem } = this.props;
    console.log('CartItem :', addedItem);

    return (
      <tbody>
        <tr>
          <td className="item__name">{addedItem.id}</td>
          <td className="item__name">{addedItem.name}</td>
          <td className="item__price">{addedItem.price.toFixed(2)}</td>
          <td>{addedItem.quantity}</td>
          <td>{addedItem.quantity}</td>
        </tr>
      </tbody>
    );
  }
}

export default AddedItem;
