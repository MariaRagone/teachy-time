import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Week1 from './Week1';
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


const App = () => {
  
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handleDelete =(id) =>{

  }
  return (
    <div>
    <Header title = "Teachy Time"/>
    <Nav search={search} setSearch={setSearch} />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/week1' element={<Week1 />} />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing />} />
      </Routes>
    </Router>
    <Footer />

  </div>
  );
};
export default App;


   