import React from 'react'
import { Link } from 'react-router-dom';

const NavDiscussion = () => {
  return (
    <main className='Nav'>
    <ul>
        <li><Link to="/DiscussionBoard1">D1</Link></li>
        <li><Link to="/DiscussionBoard2">D2</Link></li>
        <li><Link to="/DiscussionBoard3">D3</Link></li>
        <li><Link to="/DiscussionBoard4">D4</Link></li>
        <li><Link to="/DiscussionBoard5">D5</Link></li>
        <li><Link to="/DiscussionBoard6">D6</Link></li>
        <li><Link to="/DiscussionBoard7">D7</Link></li>
        <li><Link to="/DiscussionBoard8">D8</Link></li>
    </ul>
    </main>
  )
}

export default NavDiscussion