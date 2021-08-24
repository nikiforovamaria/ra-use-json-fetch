import './App.css';
import FetchData from './components/FetchData';

export default function App() {
  const url = 'http://localhost:7070'
  return (
    <div className="app">
      <FetchData url={url} opts = 'data' />
      <FetchData url={url} opts = 'loading' />
      <FetchData url={url} opts = 'error' />
    </div>
  );
}