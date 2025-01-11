import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const key = '257dee3e';

const Row = ({ title, moviesList, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    // Fetch data for each movie
    const fetchMovies = async () => {
      try {
        const movieData = await Promise.all(
          moviesList.map((movieId) =>
            axios.get(`https://www.omdbapi.com/?apikey=${key}&i=${movieId}`)
          )
        );
        setMovies(movieData.map((response) => response.data));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (moviesList.length > 0) {
      fetchMovies();
    }
  }, [moviesList]);

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((movie, index) => (
                <div key={index} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                    <img className="w-full h-auto block" src={movie.Poster.replace('SX300', 'SX800')} alt={movie.Title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movie.Title}</p>
                        <p>
                            {like ? (
                                <FaHeart className='absolute top-4 left-4 text-red-500' />
                            ) : (
                                <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"  size={40}/>
      </div>
    </div>
  );
};

export default Row;
