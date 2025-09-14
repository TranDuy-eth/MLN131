import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SinglePage from './pages/SinglePage'
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App
