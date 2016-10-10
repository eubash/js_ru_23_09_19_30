import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { filterArticles } from '../AC/filterArticles'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
    //это нужно брать из стора, иначе два источника правды будет, а это плохо
    state = {
        selected: null
    }


    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }

    handleChange = selected => {

        this.setState({ selected })
        this.props.filterArticles(selected)
    }

}

export default connect(state => ({
    articles: state.articles
}), { filterArticles })(SelectFilter)

