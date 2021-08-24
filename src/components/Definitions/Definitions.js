import './Definitions.css';

const Definitions = ({ word, meanings, language }) => {
  return (
    <div className="meanings">
      {
        meanings[0] && word && language === 'en' && (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            style={{ backgroundColor: '#fff' }}
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
              style={{ backgroundColor: 'white', color: 'black' }}
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
