import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SyncScreen from './components/SyncScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sync" element={<SyncScreen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
