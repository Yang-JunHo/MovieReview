import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {

  // console.log('MovieCard', movie);

  // 장르를 표기해야하기 때문에 redux에 있는 장르 불러오기
  const { genreList } = useSelector(state => state.movie)
  // console.log('genreList', genreList); 
  const bgStyle = {
    position: "relative",
    width: '220px',
    height: '330px',
    backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px'
  }

  return (
    <div className='movie-card' style={bgStyle}>
      <Link to={`/movie/${movie.id}`}>
        <div className='overlay'>
          <h1>{movie.title}</h1>
          <div className='genres'>
            {movie.genre_ids.map(id => (
              <Badge bg="danger" key={id}>{genreList.find(item => item.id === id).name}</Badge>
            ))}
          </div>
          <div className='info'>
            <span>평점 : {Math.round(movie.vote_average * 10) / 10}점</span>
            <span>|</span>
            <span>{movie.adult ? '청소년 관람불가' : '청소년 관람가능'}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}



export default MovieCard