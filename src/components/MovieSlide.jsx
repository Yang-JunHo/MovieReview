import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

const MovieSlide = ({ movies }) => {

  // console.log('movies', movies);
  const selectedmovie = useSelector(state => state.movie.keyword)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.filter(item => item.title.includes(selectedmovie)).map(item => (
          <div key={item.id} style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MovieCard movie={item} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MovieSlide