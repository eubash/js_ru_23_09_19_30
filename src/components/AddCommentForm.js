import React, { Component, PropTypes } from 'react'

class AddCommentForm extends Component {
    static propTypes = {

    };

    state = {
        text: '',
        author: '',
        submitted: null
    }

    handleChange = (field, ev) => {
        let nextState = {}
        //да, но можно короче: this.setState({[field]: ev.target.value})
        nextState[field] = ev.target.value
        this.setState(nextState)
    }

    handleSubmit = () => {
        this.setState({submitted: console.log('---', `Author: ${this.state.author}, comment: ${this.state.text}`)})
    }

    render() {
        return (
            <div>
                <h3>Write a comment</h3>
                <div>Comment body: <textarea name="description" placeholder="enter your comment..." value = {this.state.text} onChange = {this.handleChange.bind(this, 'text')} /></div>
                <div>Comment author: <input type="text" value = {this.state.author} onChange = {this.handleChange.bind(this, 'author')} /></div>
                <div><button type="button" onClick={this.handleSubmit}>Submit</button></div>
            </div>
        )
    }
}

export default AddCommentForm
