import React, { useState } from 'react';

import Modal from './components/Modal';
import './index.scss';

function App() {
  const [open, setOpen] = useState(false);

  const clicked = () => setOpen(false);

  return (
    <div className="wrapper">
      <h1 className="heading">Click me to open modal</h1>
      <div className = 'button'>
        <button className="button-open" onClick={() => setOpen(true)}>
          Open
        </button>
      </div>
      {open ? <Modal clickedClose={clicked} /> : ''}
    </div>
  );
}

export default App;
