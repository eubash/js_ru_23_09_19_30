import React, { Component, PropTypes } from 'react'
import CommentPaginationList from '../components/CommentPaginationList'

class CommentsPaginationWrapper extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Comments Pagination</h1>
                <CommentPaginationList pageIndex = {this.props.params.pageIndex} />
            </div>
        )
    }
}

export default CommentsPaginationWrapper