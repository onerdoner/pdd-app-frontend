import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/HomePage/homePage';
import CardsPage from './pages/CardsPage/cardsPage';
import QuizPage from './pages/QuizPage/quizPage';
import Button from '@mui/material/Button';


function App() {
  return (
    <Router>
      <Header />
      <Button variant= 'outlined' color='inherit' >Hello World</Button>;
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/cards" element = {<CardsPage />} />
        <Route path = "/quiz" element = {<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
