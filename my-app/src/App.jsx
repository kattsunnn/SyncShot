import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <MainContent />   {/* これで中の Routes が使える */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
