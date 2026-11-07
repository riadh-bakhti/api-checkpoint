import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>User Directory</h1>
        <p>
          A React application that consumes the JSONPlaceholder API with{' '}
          <strong>axios</strong>, <strong>useEffect</strong> and{' '}
          <strong>useState</strong>.
        </p>
      </header>
      <main>
        <UserList />
      </main>
      <footer className="app-footer">
        Data source:{' '}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
        >
          jsonplaceholder.typicode.com/users
        </a>
      </footer>
    </div>
  );
}

export default App;
