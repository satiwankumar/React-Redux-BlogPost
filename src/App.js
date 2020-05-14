import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import Home from './Components/Home'

import About from './Components/About'
import Contact from './Components/Contact'

import Navbar from './Components/Navbar'
import AddNinja from './Components/NinjaForm'
import Header from './Components/HeaderNavbar'
import postDetail from './Components/postDetail';

class App extends Component {
constructor(){
  super()
  this.state = {
   
    

}
}
render(){

  return (
    <BrowserRouter>
        <div >
          <Header/>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/:post_id' component={postDetail} />
          

   
       

        </div>
    </BrowserRouter>
  )
}
}


export default App


//google api code

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};


//     var nietos = [];
//     var obj = {};
//     obj["country"] = "abc"
//     obj["state"] = "def"
//     nietos.push(obj);
//     console.log(nietos)

//     let product = "alloverworld"
  
    
    



//   }

//   componentDidMount() {
//     if ('geolocation' in navigator) {
//       console.log('Available');
//     } else {
//       console.log('Not Available');
//     }



//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((cords) => {
//         console.log(cords);
//         let latitude = cords.coords.latitude;
//         let longitude = cords.coords.longitude;
        
//         // let latitude1 = 14.898;
//         // let longitude2 = 79.1223;
         

//         console.log('Latitude is :', cords.coords.longitude);
//         console.log('Longitude is :', cords.coords.latitude);

//         axios
//           .get(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4`
//           )
//           .then(function (response) {
//             // handle success
//             console.log(response);

//             // console.log(response.data.results[0].address_components[5]["long_name"])
//             //  let  City = response.data.results[0].address_components[5]["long_name"]
//             //  console.log(response.data.results[0].formatted_address)
//             let Address = response.data.results[0].formatted_address;
//             //   Address.split("")
//             //   var arr1 = [];
//             //   Address.split('').forEach(function(item){
//             //     arr1.push(item);
//             //  });
//             let city = '';
//             let country = '';
//             let state = '';

//             for (
//               var i = 0;
//               i < response.data.results[0].address_components.length;
//               i++
//             ) {
//               for (
//                 var b = 0;
//                 b < response.data.results[0].address_components[i].types.length;
//                 b++
//               ) {
//                 switch (
//                   response.data.results[0].address_components[i].types[b]
//                 ) {
//                   case 'locality':
//                     city =
//                       response.data.results[0].address_components[i].long_name;
//                     console.log('city : ' + city);
//                     break;
//                   case 'administrative_area_level_1':
//                     state =
//                       response.data.results[0].address_components[i].long_name;
//                     console.log('state : ' + state);

//                     break;
//                   case 'country':
//                     country =
//                       response.data.results[0].address_components[i].long_name;
//                     console.log('country : ' + country);
//                     break;
//                 }
//               }
//             }
//           })
//           .catch(function (error) {
//             // handle error
//             console.log(error);
//           });
//       });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//       // x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }

//   // navigator.geolocation.getCurrentPosition(function(position) {
//   //   console.log(position)
//   //   console.log("Latitude is :", position.coords.latitude);
//   //   console.log("Longitude is :", position.coords.longitude);
//   // });

//   render() {
//     return (
//       <div>
//         <h4>Using geolocation JavaScript API in React</h4>
//       </div>
//     );
//   }
// }

