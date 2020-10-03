import React  from "react";


class AddedItem extends React.Component  {
  render() {
    const { addedItem, onClickRemove } = this.props;
    // console.log('CartItem :', addedItem);

    return (
      <tbody>
        <tr>
          <td className="item__name">{addedItem.id}</td>
          <td className="item__name">{addedItem.name}</td>
          <td className="item__price">{addedItem.price.toFixed(2)}</td>
          <td>{addedItem.quantity}</td>
          <td>
          <button
              type="button"
              className="btn btn-danger"
              onClick={(e)=> onClickRemove(e, addedItem)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default AddedItem;
