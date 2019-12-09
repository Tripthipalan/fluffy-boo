import React  from 'react';
import './App.css';
import Nav from './Nav';

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
			<Route path="/" exact component={Home}/>
				<Route path="/home" exact component={Home}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/resume" component={Resume}/>
			</Switch>
		</div>
	</Router>
  );
}



export default App;
