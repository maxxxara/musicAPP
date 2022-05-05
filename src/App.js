
import DeezerPublicApi from 'deezer-public-api';
import {useState, useEffect, Fragment, useRef} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './res/Header';
import SearchEl from './res/SearchEl';
import Player from './res/Player';

function App() {
  const audioRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false);
  const [music, setMusic] = useState(false);
  const [items, setItems] = useState([]);
  const [currentId, setCurrentId] = useState('');
  const [search, setSearch] = useState('');

  let chartMusics = () => {
    const DeezerPublicApi = require('deezer-public-api');
    let deezer = new DeezerPublicApi();
    deezer.chart(9).then((result) => {
      setItems(result.tracks.data);
      setIsLoaded(true)
    })
  }

  useEffect(() => {
    chartMusics();
  }, [])

  let searchChange = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    if(search !== '') {
      const DeezerPublicApi = require('deezer-public-api');
      let deezer = new DeezerPublicApi();
      deezer.search.track(search, 10, 10).then(function(result) {
         setItems(result.data)
      });
    } else {
      chartMusics()
    }
  }, [search])

  let onChoose = (link, id) => {
    setMusic(link);
    setCurrentId(id);
  }

  return (
    <Fragment>
      <Header />
      {isLoaded ?
      <Routes>
        <Route path="/" element={<Home items={items} onChoose={onChoose} search={search} setSearch={searchChange}/> } />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      : <p className="container">Loading...</p>
      }
      {music ?
        <Player link={music} id={currentId}/> :
        <span></span>
      }
    </Fragment>
  );
}

export default App;
