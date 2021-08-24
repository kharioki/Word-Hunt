import './Definitions.css';

const Definitions = ({ word, meanings, language, isDarkMode }) => {
  return (
    <div className="meanings">
      {
        meanings[0] && word && language === 'en' && (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            style={{
              backgroundColor: '#fff',
              width: '100%',
              borderRadius: '10px',
            }}
            controls
          >
            Your Browser doesn't support HTML5 audio.
          </audio>
        )
      }
      {word === '' ? (
        <span className='subTitle'>Start by typing a word in Search</span>
      ) : (
        meanings.map((meaning) => meaning.meanings.map(({ definitions }) => (
          definitions.map(({ definition, example, synonyms, index }) => (
            <div
              key={index}
              className='meaning'
              style={{
                backgroundColor: isDarkMode ? 'white' : '#282c34',
                color: isDarkMode ? 'black' : 'white',
              }}
            >
              <b>{definition}</b>
              <hr style={{ backgroundColor: 'black', width: '100%' }} />
              {example && (
                <span>
                  <b>Example : </b>
                  {example}
                </span>
              )}
              {synonyms && (
                <span>
                  <b>Synonyms : </b>
                  {synonyms.map((synonym, i) => `${synonym}, `)}
                </span>
              )}
            </div>
          ))
        )))
      )}
    </div>
  )
}

export default Definitions
