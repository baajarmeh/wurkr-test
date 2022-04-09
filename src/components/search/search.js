import './search.scss';
import React from 'react';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	search(e) {
		const newValue = e.target.value
		this.setState({ value: newValue });
		this.props.onSearch(newValue);
	}

	render() {
		return (
			<div className="cmp-search">
				<input type="text" placeholder="Search..." value={this.state.value} onChange={e => this.search(e)}></input>
			</div>
		);
	}
}

export default Search;