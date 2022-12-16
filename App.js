//import logo from './logo.svg';
//import './App.css';
import './main.css';
import restaurants from './data.js';

function App() {
  //renderizar listas - map

  function addItems() {
     for (let i = 1; i < restaurants.length; i++) {
      const listItem = document.createElement("article");
      listItem.classList.add("list-restaurant-item");
      document.querySelector(".list-restaurant").appendChild(listItem);
      listItem.innerHTML = `<div className="list-restaurant-item-content"/>
      <img src=${restaurants[i].img}/>
      <p${restaurants[i].name}/>
      <p${restaurants[i].score}/>
      <p${restaurants[i].location}/>
      <p${restaurants[i].type}/>
      `;
    }
  }
  addItems();

  return (

    <section className="restaurant1">
            <div className="imgrest0">
                  <a href="./menu.html"><img src="" alt="rest_1" className="rest_1"/></a>
            </div> 
            <div className="rest1text">
                  <p>Cordoba Restaurant</p>
                  <p>0.5km away</p>
                  <p>Dine-in, take away, delivery...</p>
            </div>
      </section>
  );
}
export default App;
