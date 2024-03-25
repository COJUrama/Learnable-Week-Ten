import { useState } from 'react';
import Header from './components/Header';
import Left from './components/Left';
import List from './components/List';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <>
      <div className="general__page">
        <Header filter={filter} setFilter={setFilter} />
        <main className="dashboard">
          <div className="dashboard__header">
            <h1 className="dashboard__header__title">Leaderboard</h1>
          </div>

          <div className="dashboard__history">
            <List filter={filter} />
          </div>
        </main>
      </div>
      <Left />
    </>
  );
}

export default App;
