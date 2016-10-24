import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'
import Loader from './Loader'
import { loadPaginationComments } from '../AC/comments'
import { Link } from 'react-router'

class CommentPaginationList extends Component {
    static propTypes = {};

    componentDidMount() {
        const { loadPaginationComments, pageIndex } = this.props
        loadPaginationComments(pageIndex)

    }

    componentWillUpdate(nextProps, nextState) {
       // console.log('Component WILL UPDATE!');
        const { loadPaginationComments, pageIndex } = this.props
        if(pageIndex == nextProps.pageIndex) return
        loadPaginationComments(nextProps.pageIndex)
    }


    render() {
        const i = 1
        const { comments } = this.props
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <Link to={`/comments/${i}`} activeClassName = "active" activeStyle = {{color: 'red'}}>1</Link> <Link to={`/comments/${i + 1}`} activeClassName = "active" activeStyle = {{color: 'red'}}>2</Link> <Link to={`/comments/${i + 2}`} activeClassName = "active" activeStyle = {{color: 'red'}}>3</Link> <Link to={`/comments/${i + 3}`} activeClassName = "active" activeStyle = {{color: 'red'}}>4</Link>
            </div>
        )
    }
}

export default connect((state, props, response) => ({
    total: state.comments.get('total'),
    comments: state.comments.get('entities').valueSeq().toArray() || []
}), { loadPaginationComments })(CommentPaginationList)
