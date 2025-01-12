import React from 'react'
import Main from '../components/Main'
import { topRatedMovies, horrorMovies, actionMovies, comedyMovies } from '../Requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Top Rated Movies' moviesList={topRatedMovies} />
        <Row rowID='2' title='Action Movies' moviesList={actionMovies} />
        <Row rowID='3' title='Comedy Movies' moviesList={comedyMovies} />
        <Row rowID='4' title='Horror Movies' moviesList={horrorMovies} />
    </>
  )
}

export default Home