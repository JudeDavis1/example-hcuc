
import './App.css';
import j from './assets/f.jpg';
import p from './assets/p.jpg';
import arrest from './assets/arrest.jpg';

import Profile from './components/Profile';

function App() {
	return (
		<div className="App">
			<Profile name='Peter' age='122' img={ j } />
			<Profile name='Rob' age='16' img={ arrest } />
			<Profile name='Putin' age='70
			' img={ p } />
		</div>
	);
}

export default App;
