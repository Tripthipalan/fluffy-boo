import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


function App() {
  return (
	<Router>
		<div className="App">
			<Nav />
			<Switch>
				<Route path="/home" exact component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/resume" component={Resume}/>
			</Switch>
		</div>
	</Router>
  );
}



export default App;
