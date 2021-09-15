import { CharactersAction, CharactersActionTypes, CharactersState } from "../../types/characters"

const initialState: CharactersState = {
    characters: [],
    charactersInfo: { count: 0, pages: 1, next: '', prev: '' },
    loading: false,
    error: null,
}

export const charactersReducer = (state = initialState, action: CharactersAction): CharactersState => {
    const { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR,
        FILTER_CHARACTERS, FETCH_CHARACTERS_INFO } = CharactersActionTypes
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { loading: true, error: null, characters: [], charactersInfo: state.charactersInfo }
        case FILTER_CHARACTERS:
            return { loading: true, error: null, characters: [], charactersInfo: state.charactersInfo }
        case FETCH_CHARACTERS_SUCCESS:
            return { loading: false, error: null, characters: action.payload, charactersInfo: state.charactersInfo }
        case FETCH_CHARACTERS_ERROR:
            return { loading: false, error: action.payload, characters: [], charactersInfo: state.charactersInfo }
        case FETCH_CHARACTERS_INFO:
            return { loading: false, error: null, characters: state.characters, charactersInfo: action.payload }
        default:
            return state
    }
}

