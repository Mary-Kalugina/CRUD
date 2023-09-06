import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import Note from './components/Note';
import Requests from './Requests';
import './App.css';


const App: React.FC = () => {
  
  const [cards, updateCards] = useState<{id: number | string, content: string}[]>([]);
  const [newText, setNewText] = useState('');
  useEffect(() => {
    Requests.update(updateCards)
  }, [])

  const uniqueId = nanoid();

  return (
  <>
  <div className='top'>
    <div>Notes</div>
    <button onClick={() => Requests.update(updateCards)}>update</button>
  </div>
  <div className='cards'>
     {cards.map((card) => (
          <Note key={card.id} data={card} updateCards={updateCards}/>
    ))}
  </div>
   
    <textarea value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
    <button onClick={() => {Requests.add({id: uniqueId, content: newText}, updateCards); setNewText('') }}>add</button>
  </>
  );
}

export default App;