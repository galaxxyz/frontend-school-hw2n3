import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components';
import TrendingFeed from './pages/TrendingFeed';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router basename="/frontend-school-hw2n3">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<TrendingFeed />} />
          <Route path="/:nickname" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
