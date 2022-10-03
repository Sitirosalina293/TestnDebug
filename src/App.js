import './App.css';
import PostsList from "./features/posts/PostsList";
import Home from './features/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Post" element={<PostsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
