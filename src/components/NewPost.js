import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends Component {
	constructor(props) {
		super(props);

		this.renderField = this.renderField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	renderField(field) {
		const { meta: { touched, error} } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input 
					className='form-control'
					type="text" 
					{...field.input}/>
					<div className="text-help">
						{touched ? error : ''}
					</div>
					
			</div>
		)
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<Field
					label='Title'
					name='title'
					component={this.renderField}
				/>
				<Field 
					label='Categories'
					name='categories'
					component={this.renderField}
				/>
				<Field 
					label='Post Content'
					name='content'
					component={this.renderField}
				/>
				<button type='submit' className='btn btn-primary'>Post!</button>
				<Link className='btn btn-secondary' to='/'>
					Go Back
				</Link>
			</form>
		)
	};
};

NewPost.propTypes = {

}

function validate(values) {
	//if errors, form not valid, else form valid
	const errors = {};

	//create errors if input empty
	if (!values.title) {
		errors.title = 'Enter a title!';
	}
	if (!values.categories) {
		errors.categories = 'Enter some categories!';
	}
	if (!values.content) {
		errors.content = 'Enter some content!';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'NewPostForm'
})(NewPost);