import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import KEY from "servise/KEY";



class App extends React.Component {

  state = {
    request: "",
    image: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.image === this.state.image) {
      this.fetchImage()
    }
  
    
}

  onRequestSubmit = request => {
    this.setState({ request })
    
  }
    
  fetchImage = () => {
    fetch(`https://pixabay.com/api/?q=${this.state.request}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(result => result.json())
      .then(data => {
        const array = data.hits.map(({ id, tags, webformatURL, largeImageURL }) =>
        ({ id, tags, webformatURL, largeImageURL }));
        this.setState({ image: array })
      })
      // .then(image => this.setState({ image }))
      
  }
  


  render() {
    return (
      <div>
        <Searchbar onRequestSubmit={this.onRequestSubmit} />
        {this.state.request && <ImageGallery images={this.state.image} />}
        {console.log(this.state.image)}
      </div>
    );
  };
}

export default App;