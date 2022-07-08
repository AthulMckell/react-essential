import React, { useState, useEffect} from "react";
import './App.css';

//https://api.github.com/users/AthulMckell

function App({ login }) {
  const [data, setData ] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    fetch(`https://api.github.com/users/${ login }`)
    .then((response)=> response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  },[login]);

  if(loading) return <h1>loading....</h1>
  if(error)
    return <pre> { JSON.stirngify(error, null, 2) } </pre>;
  if(!data) return null;

    return (<div>
      <h1>{data.name}</h1>
      {/* <p>{data.location}</p> */}
      <img alt={data.login} src={data.avatar_url} />
      </div>
    );

  
  return <div>No user available</div>;
    
}

export default App;


// function Header(props){
//   return (
//     <header>
//       <h1>{props.name} Workshop</h1>
//     </header>
//   );
// }

// function Main(props){
//   return(
//   <section>
//     <p>We Forge in {props.adj} fire, the weapon of Gods</p>
//     <img 
//     src={trav}
//     height={250}
//     alt='an image of a extreme sport' />
//     <ul style={{textAlign:"left"}}>
//       {props.dishes.map((dish)=>
//        <li key={dish.id}>{dish.title}</li>)}
//     </ul>
//   </section>
//   );
// }

// function Footer(props){
//   return (
//     <section>
//       <p>
//         Have a {props.ch} day.
//       </p>
//       <p>Copyright {props.ct}</p>
//     </section>
//   );
// }

// const dishes = [
//   "Armegeddon from hell",
//   "Thors hammer",
//   "iron suit"
// ];

// const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
