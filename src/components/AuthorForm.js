import React from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom'

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: '', title: '', body: ''};
        this.handleAuthorChange = this.handleChange.bind(this, 'author');
        this.handleTitleChange = this.handleChange.bind(this, 'title');
        this.handleBodyChange = this.handleChange.bind(this, 'body');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(keyName, e) {
        this.setState({ [keyName]: e.target.value });
    }

    handleSubmit(event) {
        alert('An author was submitted: ' + this.state.author + ', and a title: ' + this.state.title + '. The body was ' + this.state.body);
        const postinfo = {author: this.state.author, title: this.state.title, body: this.state.body};
        axios.post('https://hephaestus-backendv1.herokuapp.com/posts', postinfo)
            .then(response => this.setState({ TITLE: response.data.title, BODY: response.data.body, AUTHOR: response.data.author, PUBLISHED: new Date() }));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>uwu</p>
                <input id="title" onChange={this.handleTitleChange} value={this.state.title} type="text" placeholder="title" />
                <input id="author" onChange={this.handleAuthorChange} value={this.state.author} type="text" placeholder="name" />
                <input id="body" onChange={this.handleBodyChange} value={this.state.body} type="text" placeholder="body" />
                <input value="submit" type="submit"/>
            </form>
        );
    }
}

export default AuthorForm;