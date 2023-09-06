import React from 'react';
import Requests from '../Requests';


interface NoteProps {
  data: { id: string | number; content: string };
  updateCards: (cards: { id: string | number; content: string }[]) => void;
}
  
  const Note: React.FC<NoteProps> = ({ data, updateCards }) => {

    return (
      <>
       <div className='content-area'>{data.content}</div>
       <button onClick={() => Requests.delete(data.id, updateCards )}>Remove</button>
      </>
    );
  };
  
  export default Note;
   