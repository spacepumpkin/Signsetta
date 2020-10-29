import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form';

const mSP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  errors: state.errors.session
});

const mDP = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mSP, mDP)(LoginForm);