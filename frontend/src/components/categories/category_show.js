import React from 'react';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const catId = this.props.match.catId
        this.props.fetchCategory(catId)
        debugger;
    }

    render() {
        return (
            <div>
                this is {this.props.category.name}
            </div>
        )
    }
}

export default CategoryShow;