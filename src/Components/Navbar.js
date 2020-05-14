import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Function Component or UI component 
function Navbar(props) {
    //Destructuring
    const {ninjas,deleteNinja} = props;
    const ninjalist =  ninjas.map(ninja=>{
        return (
            <div   key={ninja.id}>
            <div>Name : {ninja.name}</div>
            <div>Age : {ninja.age}</div>
            <div>belt : {ninja.belt}</div>
            <button onClick={() =>{deleteNinja(ninja.id)}} >Delete Ninja</button>
               
            </div>
        )
    })
    return (
        <div>
           {ninjalist}
            
        </div>
    )
}

export default Navbar


