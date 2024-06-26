import { useEffect } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import HomeFeedPage from './pages/HomeFeedPage1';
import Login from './asan/Login/Login';
import Signup from './asan/Signup/Signup';
import EchoLandingPage from './pages/EchoLandingPage';
import Profile from './pages/ProfileNew';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/homepage" element={<HomeFeedPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<EchoLandingPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
