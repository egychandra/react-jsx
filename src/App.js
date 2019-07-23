import React, { Component } from 'react';

class App extends Component {
  showInfoProduct(product){
    if(product.status){
      return(
        <h3>
          ID : {product.id} <br/>
          Name : {product.name} <br/>
          Price : IDR {product.price} <br/>
          Status : { product.status ? 'Active' : 'Pending' }
        </h3>  
      );    
    }
  }
  render() {
    var a = 5;
    var b = 7;
    var name = 'Egy Chandra Legita';
    var product = {
      id : 1,
      name : 'Nokia 3',
      price : 2000000,
      status : true
    }
    var users = [
      {
        id : 1,
        name : 'Egy Chandra Legita',
        age : 28
      },
      {
        id : 2,
        name : 'Ahmad Hidayat Asrori',
        age : 27
      },
      {
        id : 3,
        name : 'Dwi Warsono',
        age : 32
      }
    ];
    var elements = users.map((user) => {
        return( 
          <div key={user.id}>
            <h2>Nama : {user.name}</h2>
            <p>Umur : {user.age}</p>
          </div>
        )
});
    return (
      <div>
        <div>
        <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="react-jsx">React JSX</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="link">Link</a>
          </li>
        </ul>
        </nav>
        </div>
        <div className="ml-30">
          <h2>
            a : {a} <br/>
            b : {b} <br/>
            a + b : {a+b}
          </h2>
          <h3>
            name : {name}
          </h3>
          { this.showInfoProduct(product) }
          <br/>
          <hr/>
          { elements }
        </div>
      </div>
    );    
  }
}

export default App;
