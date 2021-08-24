import { useState } from 'react';
import './Header.css';
import { TextField, MenuItem } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import categories from '../../data/category';

const Header = ({ word, setWord, language, setLanguage }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  const handleChange = (e) => {
    console.log('lang', e.target.value);
    setLanguage(e.target.value);
  };

  const onChangeWord = (e) => {
    console.log('word', e.target.value);
    setWord(e.target.value);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search word"
            value={word}
            onChange={onChangeWord}
          />
          <TextField
            className="select"
            select
            label="Select Language"
            value={language}
            onChange={handleChange}
            helperText="Please select a language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
