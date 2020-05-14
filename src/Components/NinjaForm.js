import React, { Component } from 'react'

 class AddNinja extends Component {
    constructor(){
        super()
        this.state={
            name: null,
            age : null,
            belt: null
        }
    } 
    
    render(){
         
       
        this.handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        this.handleSubmit= (e)=>{
                e.preventDefault();
                this.props.ninja(this.state)
            }
        
         
         
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
           <label htmlFor="name">Name : </label>
           <input type="text" id="name"  onChange={this.handleChange}/><br></br>
           <label htmlFor="age">Age : </label>
           <input type="text" id="age" onChange={this.handleChange}/><br></br>
           <label htmlFor="belt">Belt : </label>
           <input type="text" id="belt" onChange={this.handleChange}/><br></br>
           <button  >Submit</button>
           </form>        
           </div>
    )
    }
}
export default AddNinja
