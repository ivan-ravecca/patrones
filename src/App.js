import './App.css';
import RegularSearch from './components/regularSearch';
import DebounceSearch from './components/debounceSearch';
import RegularResize from './components/regularResize';
import ThrottleResize from './components/throttleResize';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<RegularSearch />
				<DebounceSearch/>
			</header>
			<ThrottleResize/>
			<RegularResize/>
		</div>
	);
}

export default App;
