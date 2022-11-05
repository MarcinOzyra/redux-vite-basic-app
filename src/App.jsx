import { useSelector } from 'react-redux/es/exports';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
