import React from 'react';
import './hearts.css';

function Card(props)
{
	const leftOffset = -5 + -1.5 * props.handSize;
	const leftSide = leftOffset + props.count * 3;

	const divStyle = {
	  color: 'blue',
	  marginLeft: leftSide + '%',
	};

  return (
    <button 
    	className="card" 
    	onClick={props.onClick}
    	style={divStyle}
    >
    </button>
  );
}



class Hearts extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			myHand: Array(13).fill(null),
		}

	}	

	renderCard(card, index, handSize)
	{
		return <Card 
			count = {index} 
			handSize = {handSize}  
			onClick = {() => this.handleClick(index)}
			/>;
	}

	handleClick(i)
	{
		console.log(i);
		var newHand = this.state.myHand;
		newHand.splice(i,1);

	    this.setState({myHand: newHand});
	}

	render()	
	{

		var renderedCards = [];
		const handSize = this.state.myHand.length;

		for (let i = 0; i < handSize; i++) 
		{
			renderedCards.push(this.renderCard(this.state.myHand[i], i, handSize));
		}		

		return (
		    <div className="App">
		    	<h1>Hearts!</h1>

		    	<div id="myHand">
		    	{
		    		renderedCards
		    	}
		    	</div>
		    </div>
		);
	}
}

export default Hearts;
