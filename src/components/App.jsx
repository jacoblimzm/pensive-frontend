import '../App.css';
import axios from "axios";
import { useEffect } from 'react';

function App() {

  const getAllPosts = async () => {
    const endPoint = "api-blog/"
    const response = await axios.get(endPoint);
    console.log(response.data)
  }

  useEffect( () => {
    getAllPosts();
  }, []);

  return (
    <div className="App">
    

    </div>
  );
}

export default App;
