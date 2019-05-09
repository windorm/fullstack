import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import NavbarContainer from './NavbarContainer';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '16px'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 500
    }
  });

export class MessagesPage extends Component {
  componentDidMount = () => {
    const { history } = this.props;
    if (!localStorage.jwtToken) {
      history.push('/login');
    }
  };

  render() {
    return (
      <div>
        <NavbarContainer />
        <TextField
          id="textarea"
          label="Choisir un destinataire"
          margin="normal"
          rowsMax="5"
        />
        
        <TextField
          id="textarea"
          label="Envoyer un message"
          multiline
          margin="normal"
          rowsMax="5"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          <SendIcon />
        </Button>
      </div>
    );
  }
}

MessagesPage.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
  )(MessagesPage);
