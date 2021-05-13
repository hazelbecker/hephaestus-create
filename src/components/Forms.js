import React from 'react';
import axios from 'axios';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: '', title: '', body: '', label: '', postId: 0};
        this.handleAuthorChange = this.handleChange.bind(this, 'author');
        this.handleTitleChange = this.handleChange.bind(this, 'title');
        this.handleBodyChange = this.handleChange.bind(this, 'body');
        this.handleTagsChange = this.handleChange.bind(this, 'label');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(keyName, event) {
        this.setState({[keyName]: event.target.value});
    }

    handleSubmit(event) {
        //alert('An author was submitted: ' + this.state.author + ', and a title: ' + this.state.title + '. The body was ' + this.state.body);
        //alert('Tags were submitted: ' + this.state.tags);
        //const postInfo = {author: this.state.author, title: this.state.title, body: this.state.body};
        //axios.post('https://hephaestus-backendv1.herokuapp.com/posts', postInfo)
        //    .then(response => this.setState({ TITLE: response.data.title, BODY: response.data.body, AUTHOR: response.data.author, PUBLISHED: new Date() }));

        const myDate = new Date();

        let tagArray = this.state.label.split(',');

        const postInfo = {author: this.state.author, title: this.state.title, body: this.state.body, date: myDate};
        axios.post('https://hephaestus-backendv1.herokuapp.com/posts/', postInfo)
            .then(response => this.setState({postId: response.data.id, title: response.data.title, body: response.data.body, author: response.data.author, published: response.data.date }));

        for(let i = 0; i < tagArray.length; i++) {
            let tagsInfo = {label: tagArray[i], postId: this.state.postId};
            axios.post('https://hephaestus-backendv1.herokuapp.com/tags/', tagsInfo)
                .then(response => {
                    this.setState({label: response.data.label, postId: response.data.postId})
                });
        }

        //alert('Tags were submitted: ' + tagArray);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Insert your post title, author, and body. Include tags -without punctuation, -separated by commas, -with no spaces after the commas.</p>
                <input id="title" onChange={this.handleTitleChange} value={this.state.title} type="text" placeholder="title" />
                <input id="author" onChange={this.handleAuthorChange} value={this.state.author} type="text" placeholder="name" />
                <input id="body" onChange={this.handleBodyChange} value={this.state.body} type="text" placeholder="body" />
                <input id="tags" onChange={this.handleTagsChange} value={this.state.label} type="text" placeholder="tags" />
                <input value="submit" type="submit"/>
            </form>
        );
    }
}

export default Forms;