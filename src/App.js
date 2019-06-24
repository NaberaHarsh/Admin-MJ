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
    this.state.image={};
    this.state.desc={};

  }

  fileUpload(e){
   console.log(e.target.files[0])
    let fd = new FormData()
  fd.append("file",e.target.files[0])
   axios.post("http://localhost:8080/profile",fd,{headers:{
    'Content-Type': "multipart/form-data"
  }}).then((res)=>{
    this.setState({
      image:res.data
    })
  })
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

            getValue7(k){
              this.desc=k.target.value;  }

  Submit(){
    let obj={category:this.category, id:this.id, name:this.name, price:this.price, jewellery_type:this.jewellery_type, ocassion:this.ocassion,image:this.state.image,desc:this.desc}
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
          <select 
          onChange={(e)=> this.getValue1(e)}>>
            <option value="Pendant">Pendant</option>
            <option value="Earring">Earring</option>
            <option value="Necklace">Necklace</option>
            <option value="Jhumki">Jhumki</option>
            <option value="Mangalsutra">Mangalsutra</option>
            <option value="Bangles">Bangles</option>
            <option value="Chain">Chain</option>
            <option value="Nosepin">Nosepin</option>
            <option value="Ring">Ring</option>
            <option value="Watch">Watch</option>

          </select>
          <br></br>
          <label>ID</label>
          <input type="number" onChange={(f)=> this.getValue2(f)}></input><br></br>
          <label>name</label>
          <input type="text" onChange={(g)=> this.getValue3(g)}></input><br></br>
          <label>price</label>
          <input type="number" onChange={(h)=> this.getValue4(h)}></input><br></br>
          <label>jewellery_type</label>
          <select 
          onChange={(i)=> this.getValue5(i)}>>
            <option value="American Diamond">American Diamond</option>
            <option value="Victorian Jewellery">Victorian Jewellery</option>
            <option value="Antique Items">Antique Items</option>

          </select>
            <br></br>
          <label>ocassion</label>
          <select 
          onChange={(j)=> this.getValue6(j)}>>
            <option value="Diwali">Diwali</option>
            <option value="Wedding">wedding</option>
            <option value="Raksha Bandhan">Raksha bandhan</option>

          </select><br></br>
          <label>Description</label>
          <input type="text" onChange={(k)=> this.getValue7(k)}></input><br></br>
          <label>upload image here:</label>
<input type="file" onChange={(e)=>{this.fileUpload(e)}}></input>
          <button onClick={()=> this.Submit()}>Add item</button><br></br>

<br></br>       </form>
      </div>
    )
  }
}

export default App;
