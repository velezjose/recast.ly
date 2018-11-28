import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = ({videos, onVideoListEntryClick}) => {
  VideoList.videos = videos;
  return (<div className="video-list">
    {videos.map(video =>
      <VideoListEntry video={video} onVideoListEntryClick={onVideoListEntryClick}/>
    )}  
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};


//  <div><h5><em>videoListEntry</em> view goes here</h5></div>

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
 