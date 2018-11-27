import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.props[0], 
      videos: this.props.props,
      // clicked: false
    };
    
    // this.setChildrenStates();
  }
  
  setChildrenStates() {
    VideoList.videos = this.state.videos;
    VideoPlayer.video = this.state.video;
    
  }
  
  // onSearchButtonClick() {
  //   this.state.clicked = !this.clicked.state;
  // }
  
  // searchYouTube() {
  //   var $text = $('input').val();
  //   $('input').val('');
    
  //   var options = {
  //     query: $text,
  //     max: 5,
  //     key: YOUTUBE_API_KEY
  //   };
    
  //   return options;
  // }
  
  render() {
    this.setChildrenStates();
    // var options;
    
    // if (this.state.clicked) {
    //   debugger;
    //   options = this.searchYouTube();
    //   this.state.clicked = false;      
    // }
    
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={VideoPlayer.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={VideoList.videos} />
          </div>
        </div>
      </div>
    );
  }
  

}

//             <VideoPlayer props={this.props[0]} />


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
 