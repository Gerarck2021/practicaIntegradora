import logo from './logo.svg';
import './assets/css/app.css';
import ContentWrapper from './components/ContentWrapper/ContentWrapper'
import SideBar from './components/SideBar/SideBar'
// import TopBar from './components/TopBar/TopBar'

function App() {
  return (
    <div id="wrapper">
     <SideBar></SideBar>
     <ContentWrapper></ContentWrapper>
    </div>
  );
}

export default App;
