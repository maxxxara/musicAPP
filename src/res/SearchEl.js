import React from 'react';

const SearchEl = () => {
  return(
  	<section className="search">
		<div className="container">
			<div className="search__content">
				<i data-feather="search"></i>
				<input type="text" className="search__input" placeholder="Search your music" />
			</div>
		</div>
	</section>
  )
};


export default SearchEl;