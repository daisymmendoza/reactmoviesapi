import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='searchSection'>
			<label>Search</label>
			<input
				className='searchBox'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search'
			></input>
		</div>
	);
};

export default SearchBox;