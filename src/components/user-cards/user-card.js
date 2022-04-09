function UserCard(props) {
	return (
		<div className="cmp-user-card">
			<h2 className="cmp-user-card__heading">User Data</h2>
			<div className="cmp-user-card__details">
				<h2 className="cmp-user-card__sub-heading"><b>Name:</b> {props.user.name}</h2>
				<h2 className="cmp-user-card__sub-heading"><b>Website:</b> {props.user.website}</h2>
				<h2 className="cmp-user-card__sub-heading"><b>Email:</b> {props.user.email}</h2>
				<h2 className="cmp-user-card__sub-heading"><b>Phone:</b> {props.user.phone}</h2>
			</div>
		</div>
	);
}

export default UserCard;