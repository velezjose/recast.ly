import searchYouTube from '../lib/searchYouTube.js';

var Search = ({value, searchButtonClick, getSearchInput}) => {
  // debugger; searchButtonClick.bind(this, this.state.input)
  return (
    <div className="search-bar form-inline">
      <input className="form-control" value={value} type="text" onChange={getSearchInput}/>
      <button className="btn hidden-sm-down" onClick={searchButtonClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
 