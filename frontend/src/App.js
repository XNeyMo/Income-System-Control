import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/container/NavBar';

import HomePage from './pages/home/homePage';
import SigninPage from './pages/auth/signinPage';
import LoginPage from './pages/auth/loginPage';
import VisitorPage from './pages/income/visitorPage';
import EventPage from './pages/income/eventPage';
import AuthorizedPersonnelPage from './pages/income/authorizedPersonelPage';
import CredencialPage from './pages/credential/credencialPage';
import NotFoundPage from './pages/404/notFoundPage';

import './styles/allPages.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        {/* A <Switch> looks through its children <Routes> and
 renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/visitor" element={<VisitorPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/authorized" element={<AuthorizedPersonnelPage />} />
          <Route path="/credential" element={<CredencialPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <NavBar></NavBar>
      </div>
    </Router>
  );
}

export default App;
