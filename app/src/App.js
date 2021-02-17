import React from 'react';
import Quotes from './components/Quotes';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ron Swanson Quotes!</h1>
      <img src="https://www.gannett-cdn.com/-mm-/582568e00c17e48a137dbf529626145d89c4861c/c=0-151-3000-1846/local/-/media/2016/08/03/INGroup/Indianapolis/636058464185558674-parksandrec13.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp" alt="Ron Swanson" />
      <Quotes />
    </div>
  );
}

export default App;
