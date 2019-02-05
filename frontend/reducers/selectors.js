// Define and export a function, selectAllPokemon(state), which accepts the application state as an argument and exports an array of
// all the pokemon objects. Hint: You can use the Object.values method.

export const selectAllPokemon = state => Object.values(state.entities.pokemon);
