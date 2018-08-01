import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Create new component.  Should produce HTML.


const API_KEY='AIzaSyBx4QmzYBRJ0qCZe5S78zdXnPo6rSX0q94';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// const App= function()  {
//   return <div>Hi!</div>;
// }

// or ES6 syntax
// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
// )
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo:null
    };

    // YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    //   // console.log(data);
    //   this.setState({ videos:data });
    // });
    // YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
    //   // console.log(data);
    //   this.setState({ videos:data });
    // });
    // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    //   // console.log(data);
    //   this.setState({ videos:videos });
    // });
    // YTSearch({key: API_KEY, term: 'wwe'}, (videos) => {
    //   // console.log(data);
    //   this.setState({
    //     videos:videos,
    //     selectedVideo:videos[0]
    //    });
    // });


  this.videoSearch('wwe');
}
  //
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
        this.setState({
        videos:videos,
        selectedVideo:videos[0]
       });
     });
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


      return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos = {this.state.videos} />
      </div>
      );
    }
  }





// Using arrow instead of word function is identical except for use of this keyword

// Take component generated HTML and put it in the DOM - i.e. the web page

// App is a class <App /> or <App></App> is an instantiation of it.

ReactDOM.render(<App />, document.querySelector('.container'));  //or  ReactDOM.render(<App></App>);
