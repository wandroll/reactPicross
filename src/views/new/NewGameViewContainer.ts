import { connect } from 'react-redux';

import { getBoardGame } from '../../selectors';

import NewGameView from './NewGameView';
import { IGlobalState } from '../../reducers';

const mapStateToProps = (state: IGlobalState) => ({
  boardGame: getBoardGame(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGameView);
