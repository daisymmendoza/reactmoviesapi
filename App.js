import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const fetchData = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
		const response = await fetch(url);
		const json = await response.json();

		if (json.Search) {
			setMovies(json.Search);	
		}
	};

	useEffect(() => {
		fetchData(searchValue);
	}, [searchValue]);

	return (
		<div>
			<div className='header'>
        		<h1>Movie List</h1>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;