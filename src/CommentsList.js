import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const { isOpen } = this.state

        const buttonText = isOpen ? <span>Close</span> : <span>Open</span>

        const commentsHead = !comments ? null : <section>
            <h4>Comments</h4>
            <button onClick = {this.handleOpen}>{buttonText}</button>
        </section>

        const commentComponent = !comments ? null : comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)

        const commentsBody = isOpen ? <section>
                <ul>
                    {commentComponent}
                </ul>
            </section> : null

        return (
            <div>
                {commentsHead}
                {commentsBody}
            </div>
        )
    }

    handleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}