import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import EditPage from './pages/edit_page';

function App() {



  
  return (
    <Router>
       <div className="App">
       <Navbar/>
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/edit_page' component={EditPage}/>
       </Switch>
    </div>
    </Router>
    
  );
}

export default App;
