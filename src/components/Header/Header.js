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

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setWord('');
  };

  const onChangeWord = (val) => {
    setWord(val);
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
            onChange={e => onChangeWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Select Language"
            value={language}
            onChange={e => handleChangeLanguage(e.target.value)}
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
