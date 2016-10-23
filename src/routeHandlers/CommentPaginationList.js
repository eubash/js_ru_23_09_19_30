import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import Comment from '../components/Comment'
import Loader from '../components/Loader'
import { loadPaginationComments } from '../AC/comments'
import { Link } from 'react-router'

class CommentPaginationList extends Component {
    static propTypes = {};

    componentDidMount() {
        const { loadPaginationComments, pageNum } = this.props
        loadPaginationComments()
    }

    render() {
        const { comments } = this.props
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
            <h1>Comments Pagination</h1>
                <ul>
                    {commentItems}
                </ul>
                <Link to='/1' activeClassName = "active" activeStyle = {{color: 'red'}}>1</Link> <Link to="/2" activeClassName = "active" activeStyle = {{color: 'red'}}>2</Link> <Link to="/3" activeClassName = "active" activeStyle = {{color: 'red'}}>3</Link>
            </div>
        )
    }
}

export default connect((state, props, response) => ({
    comments: state.comments.get('entities').valueSeq().toArray()
}), { loadPaginationComments })(CommentPaginationList)
