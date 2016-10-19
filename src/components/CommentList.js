import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadAllComments } from '../AC/comments'
import Loader from './Loader'

//function CommentList(props) {
//    const { article, comments, addComment, isOpen, toggleOpen } = props
//    if (!comments || !comments.length) return <div>
//        <p>No comments yet</p>
//        <NewCommentForm articleId = {article.id} addComment = {addComment}/>
//    </div>
//
//    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
//    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
//    const body = isOpen && <div>
//            <ul>{commentItems}</ul>
//            <NewCommentForm articleId = {article.id} addComment = {addComment}/>
//        </div>
//
//    return (
//        <div>
//            <a href="#" onClick={toggleOpen}>{text}</a>
//            {body}
//        </div>
//    )
//}
//
//CommentList.propTypes = {
//    comments: PropTypes.array,
//    //form toggleOpen decorator
//    isOpen: PropTypes.bool,
//    toggleOpen: PropTypes.func
//}
//
//export default connect((state, props) => ({
//    comments: getRelation(props.article, 'comments', state)
//}), { addComment })(toggleOpen(CommentList))


class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
  }

    componentWillUpdate(nextProps) {
            const { article, isOpen, loadAllComments } = this.props
            if (nextProps.isOpen && !isOpen && (!article.loaded_comments || !article.loading_comments)) loadAllComments(article.id)
          }

    render() {
        const { article, comments, addComment, isOpen, toggleOpen } = this.props
        const loader = article.loading_comments ? <Loader /> : null

        if (!comments || !comments.length)
            return (<div>
                <p>No comments yet</p>
                <NewCommentForm articleId={article.id} addComment={addComment}/>
            </div>)

        const commentItems = article.loaded_comments ?
            comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <div>
                {loader}
                <ul>{commentItems}</ul>
                <NewCommentForm articleId={article.id} addComment={addComment}/>
            </div>

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }

}

export default connect((state, props) => ({
    comments: getRelation(props.article, 'comments', state)
}), { addComment, loadAllComments })(toggleOpen(CommentList))