import { Routes, Route } from 'react-router-dom';
import './output.css';
import ShowProfile from './pages/ShowProfile';
import ShowBlog from './pages/ShowBlog';
import Register from './pages/Register';
import Login from './pages/Login';
import AddBlog from './pages/AddBlog';
import Index from './pages';
function App() {


  return (
    <>
       <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<ShowProfile/>} />
            <Route path="/blog" element={<ShowBlog />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/add-blog" element={<AddBlog />} />
       </Routes>
    </>
  
  )
}

export default App
