import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';


function App() {
  const MY_ID = "f8d5c297";
  const MY_KEY = "261b2e6790ec7580369fa3062441ca66";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
    }
    fetchData();
}, []);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form>
          <input className='search' placeholder='Search ...' onChange={myRecipeSearch} value={mySearch}>

          </input>
        </form>
        <button>
          <img src="https://img.icons8.com/emoji/48/cooking-pot-emoji.png" className='icons' alt="pot"/>
        </button>    
      </div>
      {myRecipes.map(element => (
        <MyRecipesComponent/>
      ))}

    </div>
  );
}

export default App;
