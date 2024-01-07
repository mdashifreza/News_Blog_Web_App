import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import ArticleDetailPage from './components/ArticleDetailPage/ArticleDetailPage';
import ArticleCard from './components/ArticleDetailPage/ArticleCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={ <Home/> } />
        <Route path = "/sign-up" element={ <SignUp/> }/>
        <Route path = "/sign-in" element={ <SignIn/> }/>
        <Route path = "/dashboard" element={ <Dashboard/> } />
        <Route path = "/article-card" element={ <ArticleCard/> } />
        <Route path = "/article-detail-page" element={ <ArticleDetailPage/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
