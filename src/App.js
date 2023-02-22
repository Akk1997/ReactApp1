import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { Main } from './components/Main';
import AllRoutes from './components/router';
import SideNavbar from './components/SideNavbar';

function App() {
  return (
    <>
    <div className='container'>
      <SideNavbar/>
      <Main/>
    </div>
    </>
  );
}

export default App;

