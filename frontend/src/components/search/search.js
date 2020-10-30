import React from 'react';



class CategorySearch extends React.Component {
    constructor(props){
        super(props)
        this.state={search: ''}
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,15) })
    }

    render() {
        const cats = Object.values(this.props.categories)
        // let filteredCats = this.state.entities.categories(
        //     (category) =>{
        //         return category.name.indexOf(this.state.search) !== -1;
        //     }
        // )

        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                    <ul>
                        {cats.map((category)=> {
                            return <h2>{category.name}</h2>
                        })}
                    </ul>
            </div>
        );
    }
}


export default CategorySearch;


