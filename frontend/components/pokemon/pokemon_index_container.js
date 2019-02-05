import { connect } from 'react-redux';    //do this will all containers components
// The connect function accepts two functions as arguments: mapStateToProps and mapDispatchToProps
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);

// react or rails or whatever knows to call this <PokemonIndexContainer />
