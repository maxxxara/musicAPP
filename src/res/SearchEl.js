import React from 'react';

const SearchEl = ({setSearch, search}) => {
  let onChange = (e) => {
    setSearch(e.target.value)
  }
  return(
  	<section className="search">
		<div className="container">
			<div className="search__content">
				<i data-feather="search"></i>
				<input type="text" className="search__input" value={search} placeholder="Search your music" onChange={onChange} />
			</div>
		</div>
	</section>
  )
};


export default SearchEl;
