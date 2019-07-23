import React , {Component}from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
 
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import {connect} from 'react-redux';
import {getAccount, deleteAccount} from  '../actions/accountActions';
import PropTypes from 'prop-types';

import AccountModal from './AccountModal';



class Account extends Component {

  static propTypes = {
    getAccount: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired,
    isAuthenticated:PropTypes.bool
  }

componentDidMount() {
  this.props.getAccount();
}

onDeleteClick = (id) => {
  this.props.deleteAccount(id);
}
  render () {
 
    const {accounts}= this.props.account;
   return (
<Container>
 
<ListGroup>
  <TransitionGroup className="accounts-list">
{accounts.map (({_id,name})=>(
  <CSSTransition key={_id} timeout={500} classNames="fade">
  <ListGroupItem >
    {this.props.isAuthenticated?  <Button className="remove-btn" color="danger" size="sm"
    onClick={this.onDeleteClick.bind(this,_id)}>&times;

    </Button>:null}
   
    {name}
  </ListGroupItem>
  </CSSTransition>
)

)}

  </TransitionGroup>
</ListGroup>
  <AccountModal/>

</Container>
   );
  }
}


const mapStateToProps = (state)=> ({
  account: state.account,
  isAuthenticated:state.auth.isAuthenticated

}) 

export default connect(mapStateToProps, {getAccount,deleteAccount})(Account);