export default (state = [], action) => {

  switch(action.type) {
    case "ADD_QUOTE": 
      return [...state, action.quote]
    case "REMOVE_QUOTE": 
     return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      let quote = state[idx]
      return [...state.slice(0, idx), Object.assign({}, quote, {votes: quote.votes += 1}), state.slice(idx +1)]
    case "DOWNVOTE_QUOTE":
      let index = state.findIndex(quote => quote.id === action.quoteId)
      let downQuote = state[idx]
      return [...state.slice(0, index), Object.assign({}, downQuote, {votes: downQuote.votes -= 1}), state.slice(index +1)]
    default: 
      return state;
  }
}
