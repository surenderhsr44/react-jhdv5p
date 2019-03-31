import React, { Component } from 'react';
import Modal from 'react-modal';
import DisplayImage from './DisplayImage';

import './App.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    width: '500px',
    height: '400px',
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [{ imagePreviewUrl: 'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg', date: "31/03/2019, 18:24:57" }],
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }



  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    var currentTimeDate = new Date().toLocaleString();

    reader.onloadend = () => {
      var obj = {
        file: file,
        imagePreviewUrl: reader.result,
        date: currentTimeDate
      }
      let list = this.state.gallery;
      list.push(obj)
      this.setState({ gallery: list });
      this.setState({ imagePreviewUrl: "" })

    }
    if (e.target.files[0]) {
      reader.readAsDataURL(file)
    }

  }
  render() {
    const { gallery } = this.state;
    var currentTimeDate = new Date().toLocaleString();
    console.log(currentTimeDate);

    return (
      <div>
        <div className="App">
          {gallery.length > 0 ? gallery.map(item => <DisplayImage URL={item.imagePreviewUrl} currentTimeDate={item.date} />) : null}
        </div>
        <input
          type="file"
          accept=".jpeg,.png,.jpg,.bmn"
          onChange={(e) => this._handleImageChange(e)}
          style={{ display: "none" }}
          ref={fileInput => this.fileInput = fileInput}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button style={{
            position: 'absolute', top: '8px',
            cursor: 'pointer',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            right: '16px',
            fontSize: '18px'
          }} onClick={this.closeModal}><i class="far fa-window-close"></i></button>
          <div className="butnpos">
            <button className="button" onClick={() => this.fileInput.click()} >Browes image</button>
            <h3>OR</h3><button className="button">Web Cam</button>
          </div>
        </Modal>
        <div className="butnpos">
          <button className="button" onClick={this.openModal}  >Select Option</button>
        </div>
      </div>
    );
  }
}

export default App;
