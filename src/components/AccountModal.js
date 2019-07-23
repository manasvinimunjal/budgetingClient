import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addAccount} from '../actions/accountActions';
import PropTypes from 'prop-types'

class AccountModal extends Component {
  state= {
      modal: false,
      name: ''
      };

     static propTypes = {
         isAuthenticated: PropTypes.bool
     }
      toggle =() => {
          this.setState({
             modal: !this.state.modal
          });
      }

      onChange=(e)=> {
          this.setState({[e.target.name]: e.target.value});
      }

      onSubmit= (e)=> {
          e.preventDefault();

          const newAccount={
           
             name: this.state.name
          }
          //add category via addCategory action
          this.props.addAccount(newAccount);

          //close modal
          this.toggle();

      }
      render() {
          return(
              <div>
                  {this.props.isAuthenticated?  <Button color="dark" 
                          style= {{marginBottom: '2rem'}}
                          onClick={this.toggle}>
                      Add Account
                  </Button> : <h4 className="mb-3 ml-4">Please log in to manage accounts</h4>}
                

                  <Modal isOpen={this.state.modal}
                         toggle={this.toggle}
                  >
                   <ModalHeader toggle ={this.toggle}>
                    Add to Accounts
                   </ModalHeader>
                   <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                       <FormGroup>
                           <Label for="account">Account</Label>
                           <Input type="text"
                                   name="name"
                                    id="account"
                                    placeholder="Add Account"
                                    onChange={this.onChange}/>
                             <Button color="dark" style={{marginTop: '2rem'}} block>Add Account</Button>
                       </FormGroup>
                     </Form>  
                   </ModalBody>
                  </Modal>
              </div>
          );
      }
}

const mapStateToProps = state => ({
    account: state.account,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {addAccount}) (AccountModal);