import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NavDiscussion from './NavDiscussion';
import NavWeeks from './NavWeeks';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';
import Week5 from './Week5';
import Week6 from './Week6';
import Week7 from './Week7';
import Week8 from './Week8';
import MissingAssignments from './MissingAssignments';
import DiscussionGrading from './DiscussionGrading';
import Penalties from './Penalties';
import DiscussionBoard1 from './DiscussionBoard1';
import DiscussionBoard2 from './DiscussionBoard2';
import DiscussionBoard3 from './DiscussionBoard3.js';
import DiscussionBoard4 from './DiscussionBoard4';
import DiscussionBoard5 from './DiscussionBoard5';
import DiscussionBoard6 from './DiscussionBoard6';
import DiscussionBoard7 from './DiscussionBoard7';
import DiscussionBoard8 from './DiscussionBoard8';
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
    <div className='App'>
    <Header title = "Teachy Time"/>
    <Router>
    <Nav /> 
    <NavDiscussion />
    <NavWeeks />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/missingassignments' element={<MissingAssignments />} />
        <Route exact path='/penalties' element={<Penalties />} />
        <Route path='/week1' element={<Week1 />} />
        <Route path='/week2' element={<Week2 />} />
        <Route path='/week3' element={<Week3 />} />
        <Route path='/week4' element={<Week4 />} />
        <Route path='/week5' element={<Week5 />} />
        <Route path='/week6' element={<Week6 />} />
        <Route path='/week7' element={<Week7 />} />
        <Route path='/week8' element={<Week8 />} />
        <Route path='/discussiongrading' element={<DiscussionGrading/>}/>
        <Route path='/DiscussionBoard1' element={<DiscussionBoard1/>}/>
        <Route path='/DiscussionBoard2' element={<DiscussionBoard2/>}/>
        <Route path='/DiscussionBoard3' element={<DiscussionBoard3/>}/>
        <Route path='/DiscussionBoard4' element={<DiscussionBoard4/>}/>
        <Route path='/DiscussionBoard5' element={<DiscussionBoard5/>}/>
        <Route path='/DiscussionBoard6' element={<DiscussionBoard6/>}/>
        <Route path='/DiscussionBoard7' element={<DiscussionBoard7/>}/>
        <Route path='/DiscussionBoard8' element={<DiscussionBoard8/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing />} />
      </Routes>
    </Router>
    <Footer />

  </div>
  );
};
export default App;


   