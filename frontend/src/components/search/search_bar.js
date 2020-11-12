import React from 'react';
import CardBox from '../card/cardbox';



class CategorySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
        // this.submitSearch = this.submitSearch.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

    }
    componentDidMount() {
        this.props.fetchCards()
        this.props.fetchCategories()
    }
   
    updateSearch(e) {
        this.setState({ search: e.currentTarget.value })
    }
    
    // submitSearch(e) {
    //     e.preventDefault();
    //     this.setState({ search: e.currentTarget.value });
      
    // }    

    render() {  
        const CardsArr = Object.values(this.props.cards)
      

        const returnCard = CardsArr
        .filter(card => {
            if (!card.backside || !this.state.search){
                return null
            }else{

                let regex = new RegExp( this.state.search.toLowerCase(), 'g' );
                return card.backside.toLowerCase().match(regex)
            }
        })
        
        return (
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt search" value={this.state.search} onChange={this.updateSearch} type="text" placeholder="Search cards..."></input>
                    
                    <i className="search icon"></i>
                </div>
            <div>

                    <div className="ui segment center aligned grid">
                        <div className="ui centered cards">
                            {/* {returnCard} */}

                            {(returnCard !== undefined) && returnCard.map(card => {
                
                                return  <CardBox 
                                            card={card} 
                                            key={card._id} 
                                            frontside={card.frontside}
                                            backside={card.backside} 
                                            />})
                            }

                        </div>
                    </div>
                </div>
            </div>
      
         ) }
}


export default CategorySearch;


