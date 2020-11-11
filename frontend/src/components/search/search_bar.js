import React from 'react';
import CardBox from '../card/cardbox';



class CategorySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
        this.submitSearch = this.submitSearch.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

    }
    componentDidMount() {
        this.props.fetchCards()
        this.props.fetchCategories()
    }
   
    updateSearch(e) {
        this.setState({ search: e.currentTarget.value })
    }
    
    submitSearch(e) {
        e.preventDefault();
        this.setState({ search: e.currentTarget.value });
      
    }    

    render() {  
        const CardsArr = Object.values(this.props.cards)

        const returnCard = CardsArr.find(card => {
            if (!card.backside || !this.state.search){
                return null
            }else{
            return card.backside.toLowerCase() === this.state.search.toLowerCase()
            }
        })
        
        return (
            <div className="ui category search">
                <form onSubmit={this.submitSearch}>
                    <input className="prompt" value={this.state.search} onChange={this.updateSearch} type="text" placeholder="Search cards..."></input>
                    
                    <div className="results"></div>
                
                </form>

                <div>

                    <div className="ui segment center aligned grid">
                        <div  className="ui centered cards">
                            {/* {returnCard} */}

           {(returnCard !== undefined) && <CardBox card={returnCard} key={returnCard._id} frontside={returnCard.frontside}
                backside={returnCard.backside} />}

                        </div>
                    </div>
                </div>
            </div>
      
         ) }
}


export default CategorySearch;


