var searchYouTube = (options, callback) => {
  // TODO  
  var searchOptions = {
    'key': options.key,
    'maxResults': options.max,
    'part': 'snippet',
    'q': options.query,
    'type': 'video'
  };
     
  console.log(options);
  $.get('https://www.googleapis.com/youtube/v3/search', searchOptions, callback, 'json');
};
export default searchYouTube;
