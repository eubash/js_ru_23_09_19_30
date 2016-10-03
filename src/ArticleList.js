import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import handleAccordeon from './decorators/accordeon'

class ArticleList extends Component {

    //ADD PropTypes

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func
    };

    render() {
        const { articles, openArticleId, toggleOpenArticle } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = { article.id == openArticleId} openArticle = {toggleOpenArticle(article.id)} />
            </li>))

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }

}

export default handleAccordeon(ArticleList)

