import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.jsx';
import Footer from './components/Footer.jsx';
import MainContents from './pages/MainContents.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <ScrollToTop />

      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>

  );
}

export default App;
