import React, { Component, PropTypes } from 'react'
import CommentPaginationList from './CommentPaginationList'

class CommentsPaginationWrapper extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Comments Pagination</h1>
                <CommentPaginationList />

            </div>
        )
    }
}

export default CommentsPaginationWrapper