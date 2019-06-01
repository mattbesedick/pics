import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID 9da8dd3f114a3b05fe86a04aa0c86cc32d14c70dfb05cfa55f4f91cd119434a0'
			}
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
