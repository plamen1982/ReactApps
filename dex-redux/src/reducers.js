import Char from './hero';

const initialState = {
    char: Char,
    searchTerm: '',
}

export default function char(state = initialState, { type, payload }) {
    switch (type) {
      case 'SEARCH_INPUT_CHANGED':
        const {searchTerm} = payload;
        return {
          ...state,
          searchTerm: searchTerm,
          char: searchTerm ? Char.filter(
                char =>
                  char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
              ) : Char,
        };
   
      default:
        return state;
    }
  }