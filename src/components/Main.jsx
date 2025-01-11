import React, { useState, useEffect } from 'react';
import { BannerMovieURL } from '../Requests';
import axios from 'axios';

const Main = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(BannerMovieURL).then((response) => {
      setMovie(response.data);
    });
  }, []);

  console.log(movie);

  return (
    <>
      <div className="w-full h-[550px] text-white relative">
        {movie ? (
          <div className="w-full h-full">
            {/* Gradient Overlay */}
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
  
            {/* Movie Poster */}
            <img
              className="w-full h-[550px] object-cover"
              src="https://image.tmdb.org/t/p/original/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg" // Replace low-quality image with higher-quality
              alt={movie.Title}
            />
  
            {/* Movie Title */}
            <div className="absolute w-full top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold">{movie.Title}</h1>
              <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
              </div>
              <p className="text-gray-400 text-sm">Released: {movie.Released}</p>
              <p className="w-full hidden md:block md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{movie.Plot}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Main