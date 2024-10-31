import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './app/page';
import PlaceDetails from './pages/PlaceDetails';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:slug" element={<PlaceDetails />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;