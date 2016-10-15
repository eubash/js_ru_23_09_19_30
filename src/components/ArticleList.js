import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

<<<<<<< HEAD
export default connect(state => ({
    articles: (!state.filters.length) ? state.articles : state.articles.filter(o => state.filters.some(i => i.value == o.id))
}))(accordion(ArticleList))
=======
export default connect(state => {
    const { articles, filters } = state
    const selected = filters.get('selected')
    const { from, to } = filters.get('dateRange')

    const articleArray = Object.keys(articles).map(id => articles[id])
    const filteredArticles = articleArray.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        articles: filteredArticles
    }
})(accordion(ArticleList))
>>>>>>> 72e95cefac4fc527ca21f8317af1b94f3126cf04
