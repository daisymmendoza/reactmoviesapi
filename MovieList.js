import React from 'react';

const MovieList = (props) => {
	return (
		<div className='movieSection'>
			{props.movies.map((movie) => (
				<div className='movie'>
					<img src={movie.Poster} alt='movie'></img>
					<div className='movieTitle'>
						<p>{movie.Title} ({movie.Year})</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;