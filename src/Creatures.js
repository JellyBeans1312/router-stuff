import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom'

const Creatures = ({ data }) => {
  let something;
  const displayCreatures = data.map(creature => {
    const {id, image, type} = creature;
    something = type
    return(
      <Link to={`/${type}/${id}`} key={id}>
        <img src={image} key={id} className='app-img' alt={creature}/>

      </Link>
    ) 
  })
  return (
    <>
      <h1>
        {something === 'unicorns' && 'Ima Unicorn Motherfuckaa!!!!'}
      </h1>
      <h1>
        {something === 'sharks' && 'Ima shark. CHOMP CHOMP!!!!'}
      </h1>
      <h1>
        {something === 'puppies' && 'Im FLUFFFAAAAYYYY'}
      </h1>
      {displayCreatures}
    </>
  )
}

export default Creatures