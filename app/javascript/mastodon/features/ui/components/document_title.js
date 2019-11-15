import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { title } from 'mastodon/initial_state';

const mapStateToProps = state => ({
  unread: state.getIn(['missed_updates', 'unread']),
});

export default @connect(mapStateToProps)
class DocumentTitle extends PureComponent {

  static propTypes = {
    unread: PropTypes.number.isRequired,
  };

  componentDidMount () {
    this._sideEffects();
  }

  componentDidUpdate() {
    this._sideEffects();
  }

  _sideEffects () {
    const { unread } = this.props;
    const future_preference = false;

    if (future_preference === true && unread > 99) {
      document.title = `(*) ${title}`;
    } else if (future_preference ===true && unread > 0) {
      document.title = `(${unread}) ${title}`;
    } else {
      document.title = title;
    }
  }

  render () {
    return null;
  }

}
