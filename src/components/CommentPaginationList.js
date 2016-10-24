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

    paginationMenu(total, step) {
        let pages = []
        for(let i = 0, j=1; i < total; i += step, j++) {
            pages.push(j)
        }
        return pages.map(page => <Link key={ page } to={`/comments/${page}`} activeStyle = {{color: 'red'}}> { page } </Link>)
    }


    render() {
        const { comments, total } = this.props
        const paginationMenu = this.paginationMenu(total, 5)
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
                <ul>
                    {paginationMenu}
                    {commentItems}
                </ul>
            </div>
        )
    }
}


export default connect((state, {pageIndex}) => {

    const filteredComments = state.comments.get('entities').filter((el, index) => index >= ((pageIndex * 5) - pageIndex) && index < (pageIndex * 5))

    return {
        total: state.comments.get('total'),
        comments: filteredComments.valueSeq().toArray()
    }

}, { loadPaginationComments })(CommentPaginationList)
