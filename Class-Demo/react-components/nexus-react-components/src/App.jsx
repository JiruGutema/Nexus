import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Sidebar from './pages/Sidebar/Sidebar'
function App() {
  
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Home />
        <Sidebar />
      </div>
      
      <Footer />
    </div>
  )
}


export default App

