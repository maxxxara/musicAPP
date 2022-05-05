import {React, Fragment} from 'react';
import SearchEl from '.././res/SearchEl';
import Music from '.././res/Music';

const Home = ({ items, onChoose }) => {
	let onClick = (link,id) => {
		onChoose(link,id)
	}
	return(
		<Fragment>
			<SearchEl />
			<section className="musics">
				<div className="container">
					<div className="music__content">
						<div className="musics__text">
							New Releases
						</div>
						<div className="musics__list">
							{items.map(item =>
								<Music
									key={item.id}
									id={item.id}
									image={item.artist.picture_big}
									author={item.artist.name}
									title={item.title}
									onClick={onClick}
									preview={item.preview}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
};


export default Home;
