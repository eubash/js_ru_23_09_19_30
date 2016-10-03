import React from 'react'

export default function handleAccordeon(Component) {
    return class WrappedComponent extends React.Component {
        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {

                this.setState({
                    openArticleId: this.state.openArticleId == id ? null : id
                })


        }

    }
}
