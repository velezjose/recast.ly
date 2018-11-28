import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      video: exampleVideoData[0], 
      videos: exampleVideoData,
      input: '',
    };  
  }
  
  setChildrenStates() {
    VideoList.videos = this.state.videos;
    VideoPlayer.video = this.state.video;
    
  }
  
  searchButtonClick() {
    this.handleYouTube(this.state.input);
  }
  
  handleYouTube(query) {
    var options = {
      query: query,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, (data) => this.setState({
      video: data.items[0],
      videos: data.items,
      input: ''
    }));
  }
  
  componentDidMount() {
    this.handleYouTube('dog');
  }
  
  getSearchInput(event) {
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value);
    return event.target.value;
  }
  
  onVideoListEntryClick(video) {
    this.setState({
      video: video
    }); 
  }
  
  render() {
    this.setChildrenStates();

    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value={this.state.input} searchButtonClick={this.searchButtonClick.bind(this)} getSearchInput={this.getSearchInput.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={VideoPlayer.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={VideoList.videos} onVideoListEntryClick={this.onVideoListEntryClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
 