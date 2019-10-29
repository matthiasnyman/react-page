import React from 'react';
import CuteDog from '../../img/cutedog.jpg'

function Home() {
  return(
    <>
      <h1>Welcome to my React dispaly site</h1>
      <h3>Watch some of my react projekts here</h3>
      <img src={ CuteDog } alt='just a cute dog!'  />
    </>
  )
}

export default Home;