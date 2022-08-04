import './App.css';
import RegularSearch from './components/regularSearch';
import DebounceSearch from './components/debounceSearch';
import RegularResize from './components/regularResize';
import ThrottleResize from './components/throttleResize';

function App() {
	return (
		<div className="App ">
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
				<RegularSearch />
				<DebounceSearch/>
			<RegularResize/>
			<ThrottleResize/>
		</div>
	);
}

export default App;
