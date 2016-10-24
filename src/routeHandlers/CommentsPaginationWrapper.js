import React, { Component, PropTypes } from 'react'
import CommentPaginationList from './CommentPaginationList'

class CommentsPaginationWrapper extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Comments Pagination</h1>
                <CommentPaginationList pageIndex = {this.props.params.pageIndex} limit = { 5 } />

            </div>
        )
    }
}

export default CommentsPaginationWrapper