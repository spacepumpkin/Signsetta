// import React from 'react';
// import CardBox from '../card/cardbox';


// class Search extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     // componentDidMount() {
//     //     this.props.fetchCards()
//     // }

//     render(){
//         const returnCard = this.props.cards.map(card => {
//             if (card.backside === this.state.search){
//                 return <CardBox key={card._id} frontside={card.frontside} 
//                 backside={card.backside} />
//             }
//         })

//             return (
//                 <div>
        
//                     <div className="ui segment center aligned grid">
//                         <div className="ui centered cards">
//                             {returnCard}

//                         </div>
//                     </div>
//                 </div>
//             )
    
//     }
// }

// export default Search;