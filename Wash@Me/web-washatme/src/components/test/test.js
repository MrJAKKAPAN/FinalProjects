// import React, { Component } from "react";
// import "./test.scss";
// import { render } from 'react-dom';


// class Test extends React.Component{
//   constructor(){
//     super();
//     this.products = {
//       carrot: 5,
//       apple: 3,
//       BM: 5,
//       Benz: 10
//     }
    

//     this.state = {
//       cart: "",
//       total: 0
//     }
//   }

//   addHandler = e => {
//     let product = e.target.name
//     let items = this.state.cart
//     if(items){
//       if (items[product]) {
//         items[product] = items[product]+1
//       }else{
//         items[product] = 1
//       }
//     }else{
//       items = {[product]: 1}
//     }
//     console.log(this.state.total, this.products[product])
//     this.setState({ cart: items, total: this.state.total + this.products[product]  })
//   }

//   addService = e => {
//     let service = e.target.name
//     let items = this.state.cart
//     if(items){
//       if (items[service]) {
//         items[service] = items[service]+1
//       }else{
//         items[service] = 1
//       }
//     }else{
//       items = {[service]: 1}
//     }
//     console.log(this.state.total, this.services[service])
//     this.setState({ cart: items, total: this.state.total + this.services[service]  })
//   }

//   removeHandler = e => {
//     let product = e.target.name
//     let items = this.state.cart
//     items[product] = items[product] - 1
//     this.setState({ cart: items, total: this.state.total - this.products[product] })
//   }
//   // removeService = e => {
//   //   let service = e.target.name
//   //   let items = this.state.cart
//   //   items[service] = items[service] - 1
//   //   this.setState({ cart: items, total: this.state.total - this.services[service]})
//   // }



//   cart = ( ) => {
//     const itemLis = []
//     for ( let key in this.state.cart ) {
//       if(this.state.cart[key] > 0){
//         itemLis.push(<div><li>{key} quantity: {this.state.cart[key]}</li><button name={key} onClick={this.removeHandler}>remove</button></div>)
//       }
//     }
//     return itemLis
//   }
  

//   render( ) {
//     console.log(this.state);
//     return(
//       <div className="content-wrapper">


//         <h1>Items: </h1>
//         <p>carrot price: 5 <button onClick={this.addHandler} name="carrot">Add To Cart</button></p>
//         <p>apple price: 3 <button onClick={this.addHandler} name="apple">Add To Cart</button></p>
//         <p>apple price: 3 <button onClick={this.addHandler} name="BM">Add To Cart</button></p>
//         <p>apple price: 3 <button onClick={this.addHandler} name="Benz">Add To Cart</button></p>
//         <h1>Cart: </h1>


//         <h2>total price: {this.state.total}</h2>
//         <ul>
//           {this.cart()}
//         </ul>


//       </div>
//     )
//   }
// }

      
// export default Test;
