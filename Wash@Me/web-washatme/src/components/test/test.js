import React, { Component } from "react";
import "./test.scss";
import List from './listCart';
import Cart from './cart';

const product = [
    {
      id: 1,
      name: "BM",
      price: 10,
    },
    {
      id: 2,
      name: "Lambogini",
      price: 20,
    },
    {
      id: 3,
      name: "Benz",
      price: 10,
    },
    {
      id: 4,
      name: "Honda",
      price: 5,
    },
    {
        id: 5,
        name: "Susuki",
        price: 15,
      },
  ];


class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
        products: product,
        cart: "",
        total: 0,
        addedItems: [],
        
    };
    this.add_to_cart = this.add_to_cart.bind(this);
    
  }

  add_to_cart = (e, item) => {
      console.log('func_addToCart_item:',item);
        const addedItems = this.state.addedItems.slice();
        // console.log(addedItems);
        const addedItem = addedItems.find(cartItem => item.name === cartItem.name);
        console.log('func_addToCart_addedItems:',addedItems);
        let total = this.state.total;

        if (addedItem) {
            addedItem.quantity++;
          } else {
            let new_item = item;
            new_item.quantity = 1;
            addedItems.push(new_item);
          }

        this.setState({ addedItems })
        
    //   totalPrice
    if(addedItems.length === 0) {
      total = 0;
    }else{
        total = addedItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0 
        );
    }
    this.setState({ total });

  }



  render() {
    const { addedItems, products, keyword, total,  } = this.state;

console.log(this.state);
    // console.log('render data:',products);


    return (
      <div className="content-wrapper">
         {/* this.state.product */}

         <div class="container-fluid" style={{width:'70%'}}>
            <List products={products} add_to_cart={this.add_to_cart} />
        </div>
        <div class="container-fluid" style={{width:'70%'}}>
            <Cart addedItems={addedItems}/>
        </div>

<div style={{textAlign:'center'}}>
{/* <h1>Items: </h1> */}
<h2>total price: {total}</h2>
</div>

</div>
    );
  }
}





export default Test;
