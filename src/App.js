import './App.css';
import { useEffect } from 'react';


function App() {
  const MY_ID = "f8d5c297";
  const MY_KEY = "261b2e6790ec7580369fa3062441ca66";

  useEffect( async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f8d5c297&app_key=261b2e6790ec7580369fa3062441ca66`);
    console.log(response);
  })



  return (
    <div className="App">
      <p>RECIPES</p>
    </div>
  );
}

export default App;
