import { connect } from 'react-redux';

import { getBoardGame } from '../../selectors';
import {
  toggleCell,
} from '../../actionCreators/game';

import NewGameView from './NewGameView';
import { IGlobalState } from '../../reducers';

const mapStateToProps = (state: IGlobalState) => ({
  boardGame: getBoardGame(state),
});

const mapDispatchToProps = {
  toggleCell,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGameView);
