import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import About from './components/about/About'
import Events from './components/events/Events'
import Library from './components/library/Library'
import Programs from './components/programs/Programs'
import Contact from './components/contact/contact'
import Auth from './components/auth/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/events" component={Events}/>
          <Route path="/library" component={Library}/>
          <Route path="/programs" component={Programs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/auth" component={Auth}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
