import React from 'react'
import { Link } from 'react-router-dom';

const NavWeeks = () => {
  return (
    <main className='Nav'>
    <ul>
        <li><Link to="/Week1">W1</Link></li>
        <li><Link to="/Week2">W2</Link></li>
        <li><Link to="/Week3">W3</Link></li>
        <li><Link to="/Week4">W4</Link></li>
        <li><Link to="/Week5">W5</Link></li>
        <li><Link to="/Week6">W6</Link></li>
        <li><Link to="/Week7">W7</Link></li>
        <li><Link to="/Week8">W8</Link></li>
    </ul>
    </main>
  )
}

export default NavWeeks