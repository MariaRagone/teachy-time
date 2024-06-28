import React from 'react'
import { Link } from 'react-router-dom';

const NavWeeks = () => {
  return (
    <main className='Nav'>
    <ul>
        <li><Link to="/Week1">Week 1</Link></li>
        <li><Link to="/Week2">Week 2</Link></li>
        <li><Link to="/Week3">Week 3</Link></li>
        <li><Link to="/Week4">Week 4</Link></li>
        <li><Link to="/Week5">Week 5</Link></li>
        <li><Link to="/Week6">Week 6</Link></li>
        <li><Link to="/Week7">Week 7</Link></li>
        <li><Link to="/Week8">Week 8</Link></li>
    </ul>
    </main>
  )
}

export default NavWeeks