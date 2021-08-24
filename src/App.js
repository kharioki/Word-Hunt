import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('en');
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;
    try {
      const data = await axios.get(url);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, language])

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          word={word}
          setWord={setWord}
          language={language}
          setLanguage={setLanguage}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            language={language}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
