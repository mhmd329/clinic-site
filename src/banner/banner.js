import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './baner.css';
export const Banner = (props) => {
  return (
   <section className='banneer'>
<div className='container'>
    <div className='row'>
        <div className='col-12'>
            <h2 > {props.title}</h2>
            <li>
             <Link to="/home">  <FontAwesomeIcon icon={faHome}/> home </Link> 
             /{props.smtitle}
            </li>
        </div>
    </div>
</div>
   </section>
  )
}
