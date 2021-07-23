import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import About from './components/about/About'
import Events from './components/events/Events'
import Library from './components/library/Library'
import Programs from './components/programs/Programs'
import Contact from './components/contact/contact'
import Auth from './components/auth/auth';
import History from './components/history/history'
import Solidarity from './components/home/solidarity/solidarity'
import MaumauTv from './components/home/maumauTv/maumauTv';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/events" component={Events}/>
          <Route path="/library" component={Library}/>
          <Route path="/programmes" component={Programs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/history" component={History}/>
          <Route path="/revoutions" component={Solidarity}/>
          <Route path="/maumauTv" component={MaumauTv}/>
          <Route path="/auth" component={Auth}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
