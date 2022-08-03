import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Modal from './ImageGalleryItem/Modal'
import KEY from "servise/KEY";

class App extends React.Component {

  state = {
    request: "",
    image: [],
    showModal: false,
    page: 1,
    largeImageURL: '',
    tags: '',
  }

  async componentDidUpdate(prevProps, prevState) {
    const state = this.state;
      if (prevState.request !== state.request || prevState.page !== state.page) {
      
      await fetch(`https://pixabay.com/api/?q=${state.request}&page=${state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(result => result.json())
      .then(data => {
        const array = data.hits.map(({ id, tags, webformatURL, largeImageURL }) =>
          ({ id, tags, webformatURL, largeImageURL }));
        
        if (state.page !== 1) {
        this.setState(prevState => ({
            image: [...prevState.image, ...array],
          }));
      } else{this.setState({ image: array,  })}
        
      })
    }
}

  onRequestSubmit = request => {
    this.setState({ request, page: 1, })
  }
  onLoadMore = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    console.log(this.state.showModal)
  };
  handleModalToggle = e => {
      if (e.currentTarget === e.target || e.code === 'Escape') {
        this.toggleModal();
      }
  };
  
  modalData = ({largeImageURL, tags}) => {
    this.setState({
        largeImageURL,
        tags,
    })
  }
  render() {
    const state = this.state;
    return (
      <div>
        <Searchbar onRequestSubmit={this.onRequestSubmit} />
        {state.request &&
          <ImageGallery
          showModal={state.showModal}
          images={state.image}
          loadMore={this.onLoadMore}
          onCloseModal={this.handleModalToggle}
          modalData={this.modalData} />}
          {state.showModal &&
                <Modal onCloseModal={this.handleModalToggle} >
                    <img src={state.largeImageURL} alt={state.tags} width="800" />
                </Modal>
            }
      </div>
    );
  };
}

export default App;
