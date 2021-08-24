import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('en');
  const [meanings, setMeanings] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;
    try {
      const data = await axios.get(url);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, language])

  return (
    <div
      className="App"
      style={{
        height: '100vh',
        backgroundColor: isDarkMode ? '#282c34' : 'white',
        color: isDarkMode ? 'white' : '#282c34',
        transition: 'all 0.5s linear',
      }}>
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly'
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>
          <DarkMode checked={isDarkMode} onChange={e => setIsDarkMode(!isDarkMode)} />
        </div>
        <Header
          word={word}
          setWord={setWord}
          language={language}
          setLanguage={setLanguage}
          isDarkMode={isDarkMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            language={language}
            isDarkMode={isDarkMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
