import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.category={};
    this.state.id={};
    this.state.name={};
    this.state.price={};
    this.state.jewellery_type={};
    this.state.ocassion={};

  }

  getValue1(e){
    this.category=e.target.value;  }

  getValue2(f){
    this.id=f.target.value;  }

    getValue3(g){
      this.name=g.target.value;  }

      getValue4(h){
        this.price=h.target.value;  }

        getValue5(i){
          this.jewellery_type=i.target.value;  }

          getValue6(j){
            this.ocassion=j.target.value;  }

  Submit(){
    let obj={category:this.category, id:this.id, name:this.name, price:this.price, jewellery_type:this.jewellery_type, ocassion:this.ocassion}
    axios.post('http://localhost:8080/product', obj)
  .then((res)=>{
console.log(res)
   })
  }

  render(){

    return(
      <div style={{textAlign:"center"}}>
        <h4>Add New Product</h4>
        <form><br></br>
          <label>category</label>
          <input type="text" onChange={(e)=> this.getValue1(e)}></input>
          <br></br>
          <label>ID</label>
          <input type="number" onChange={(f)=> this.getValue2(f)}></input><br></br>
          <label>name</label>
          <input type="text" onChange={(g)=> this.getValue3(g)}></input><br></br>
          <label>price</label>
          <input type="number" onChange={(h)=> this.getValue4(h)}></input><br></br>
          <label>jewellery_type</label>
          <input type="text" onChange={(i)=> this.getValue5(i)}></input><br></br>
          <label>ocassion</label>
          <input type="text" onChange={(j)=> this.getValue6(j)}></input><br></br>
          <button onClick={()=> this.Submit()}>Add item</button>
        </form>
      </div>
    )
  }
}

export default App;
