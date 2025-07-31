import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Nav from './components/Nav.jsx';
import Users from './pages/Users.jsx';



// to use <nav> in Router, add Link to imports
/**
 * 1. Create "posts" component in pages folder
 * 2. Create new route fot "/posts" URL
 * 3. Render "posts" component at "/posts" route
 */



function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={ <Users /> } />
      </Routes>
      <div></div>
    </Router>
  )
}

export default App

