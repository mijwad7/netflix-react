import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
  const { user } = UserAuth(); // Fix the call to UserAuth()
  const [movies, setMovies] = useState([]); // Initialize as an empty array

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        setMovies(doc.data()?.savedShows || []); // Ensure `savedShows` is always an array
      });
      return () => unsubscribe(); // Cleanup the listener
    }
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const updatedMovies = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: updatedMovies, // Update Firestore with the filtered array
      });
      setMovies(updatedMovies); // Update local state
    } catch (error) {
      console.error('Error deleting show:', error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.length > 0 ? (
            movies.map((item) => (
              <div
                key={item.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item.title}
                  </p>
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center p-4">No saved shows available</p>
          )}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
