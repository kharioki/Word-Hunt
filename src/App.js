import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('hello');
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
  console.log(word);
  console.log(language);

  useEffect(() => {
    dictionaryApi();
  }, [])

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
      </Container>
    </div>
  );
}

export default App;
