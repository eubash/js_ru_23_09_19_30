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
        const { loadPaginationComments } = this.props
        loadPaginationComments(this.props.params.pageIndex)

    }

    componentWillUpdate(nextProps, nextState) {
       // console.log('Component WILL UPDATE!');
        if(this.props.params.pageIndex == nextProps.params.pageIndex) return
        const { loadPaginationComments } = this.props
        loadPaginationComments(nextProps.params.pageIndex)
    }


    render() {
        const i = 1
        const { comments } = this.props
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
            <h1>Comments Pagination</h1>
                <ul>
                    {commentItems}
                </ul>
                <Link to={`/comments/${i}`} activeClassName = "active" activeStyle = {{color: 'red'}}>1</Link> <Link to={`/comments/${i + 1}`} activeClassName = "active" activeStyle = {{color: 'red'}}>2</Link> <Link to={`/comments/${i + 2}`} activeClassName = "active" activeStyle = {{color: 'red'}}>3</Link>
            </div>
        )
    }
}

export default connect((state, props, response) => ({
    total: state.comments.get('total'),
    comments: state.comments.get('entities').valueSeq().toArray() || []
}), { loadPaginationComments })(CommentPaginationList)
