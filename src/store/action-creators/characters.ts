import axios from "axios"
import { Dispatch } from "redux"
import { CharactersAction, CharactersActionTypes } from "../../types/characters"


export const fetchCharacters = (page = 1) => {
    const { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_INFO } = CharactersActionTypes
    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            dispatch({ type: FETCH_CHARACTERS })
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
            dispatch({ type: FETCH_CHARACTERS_INFO, payload: res.data.info })
        } catch (error) {
            dispatch({ type: FETCH_CHARACTERS_ERROR, payload: 'Error on loading' })
        }
    }
}

export const filterCharacters = (queryString: string) => {
    const { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_INFO } = CharactersActionTypes
    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?${queryString}`)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
            dispatch({ type: FETCH_CHARACTERS_INFO, payload: res.data.info })
        } catch (error) {
            dispatch({ type: FETCH_CHARACTERS_ERROR, payload: 'Error on loading' })
        }
    }
}
