import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


function App() {
  const useStyles = makeStyles(()=> ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
      
      <Header/>
      <Routes>           
      <Route path='/' component={<Homepage/>}/>
      <Route path='/coins:id' component={<CoinPage/>} />
      </Routes> 
  
      </div>
    </Router>   
    
  );
}

export default App;
