import UserCard from './user-card'
import Header from '../header/header'
import Search from '../search/search'
import './user-card.scss'
import React from 'react'
import axios from 'axios';

class UserCards extends React.Component {

	state = {
		users: [],
		allUsers: [],
		page: 'Users'
	}

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const users = res.data;
				let newState = this.state;
				newState.users = users;
				newState.allUsers = users;
				this.setState(newState);
			});
	}

	handleSearch = (keyword) => {
		if (keyword != "") {
			let users = this.state.allUsers;
			users = users.filter(user => user.name.toString().toLowerCase().includes(keyword.toLowerCase()));
			let newState = this.state;
			newState.users = users;
			this.setState(newState);
		} else {
			let newState = this.state;
			newState.users = this.state.allUsers;
			this.setState(newState);
		}
	}

	render() {
		return (
			<div>
				<Header pageName="Users" />
				<Search onSearch={this.handleSearch} />
				<div className="cmp-user-cards">
					{this.state.users.map(user => {
						return (
							<UserCard key={user.id} user={user} />
						)
					})}
				</div>
			</div>
		);
	}
}

export default UserCards;