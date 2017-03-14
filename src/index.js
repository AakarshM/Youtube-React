//Create a new component. This component should produce some HTML

import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //path reference needed for custom js created
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //can name anything (ex SearchBar or foo..)
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBh2T_0pakwxBdJyUjAtolQRkVQ7DhN03c';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>{
      this.setState({videos: data});
    })
  }

  render(){
    return (
      <div>
      <SearchBar/>
      <VideoList videos={this.state.videos}/> //passing props
    </div>
    );
  }
}

//Take the component's generated HTML and put it in the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container')); //App is the class, we want to pass instance (ex <App/>)
//ReactDOM is used to interact with actual DOM, "React" is just used for components.
