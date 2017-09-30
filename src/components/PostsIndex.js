import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts } from '../actions';
import { Link } from 'react-router-dom'; //React's equivalence to anchor tag

class PostsIndex extends Component {
	constructor(props) {
		super(props);

		this.renderPosts = this.renderPosts.bind(this);
	}

	//this lifecycle method is perfect for api calls
	//as it is called immediately after rendering
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		//map over posts
		_.map(this.props.posts, post => {
			return (
				<li key={post.id}
					className="list-group-item">
					{post.title}
				</li>
			)
		});
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<div>
					<Link to='/posts/new' className='btn btn-primary'>
						Add a Post!
					</Link>
				</div>
				<h3>Blog Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

PostsIndex.propTypes = {
	posts: PropTypes.object.isRequired,
	fetchPosts: PropTypes.func.isRequired
};

//turns app state into props
function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);