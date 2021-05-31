import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
class Quotes extends Component {

  render() {
    console.log("props", this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <QuoteCard upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(null, {addQuote, removeQuote, upVote, downVote})(Quotes);
