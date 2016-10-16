import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', this.state)

        const { articleId, addComment } = this.props

        addComment(articleId, this.state.user, this.state.text)

        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                author: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(state => ({}), {
    addComment
})(NewCommentForm)