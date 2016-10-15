import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../AC/filters'

import 'react-select/dist/react-select.css'
import { filterArticles } from '../AC/filterArticles'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

<<<<<<< HEAD
    state = {
        selected: null
    }

=======
    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))
>>>>>>> 72e95cefac4fc527ca21f8317af1b94f3126cf04

    render() {
        const { articles, selected } = this.props
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
<<<<<<< HEAD
    articles: state.articles
}), { filterArticles })(SelectFilter)

=======
    selected: state.filters.get('selected'),
    articles: Object.keys(state.articles).map(id => state.articles[id])
}), { changeSelection })(SelectFilter)
>>>>>>> 72e95cefac4fc527ca21f8317af1b94f3126cf04
