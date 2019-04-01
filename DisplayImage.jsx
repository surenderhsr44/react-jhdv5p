import React,{Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      cursor                : 'pointer',
    }
  };
   

class DisplayImage extends Component{
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     

     
      closeModal() {
        this.setState({modalIsOpen: false});
      }
     

    render(){
        console.log(this.props.URL)
        return(

            <div className='gallery'>
             <h3>Date : {this.props.currentTimeDate}</h3>
                <img src={this.props.URL} onClick={this.openModal} style={{width:'300px', float:"left"}}  alt="image load" /><hr />
               
                <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Display Image"
        >
            
            <button style={{  position: 'absolute',top: '8px',
            cursor:'pointer',
            backgroundColor: 'white',
            color: 'black',
            border:'none',
            right:'16px',
            fontSize:'18px'}} onClick={this.closeModal}><i class="far fa-window-close"/></button>
            <img src={this.props.URL} style={{width:'600px'}} alt="image load" />
        </Modal>
      </div>

            </div>
        )
    }
}
export default DisplayImage;