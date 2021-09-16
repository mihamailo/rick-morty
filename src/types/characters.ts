export interface CharactersState {
    characters: any[];
    charactersInfo: ICharactersInfo;
    loading: boolean;
    error: null | string;
}

export interface ICharactersInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export enum CharactersActionTypes {
    FETCH_CHARACTERS = 'FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
    FETCH_CHARACTERS_INFO = 'FETCH_CHARACTERS_INFO',
    FILTER_CHARACTERS = 'FILTER_CHARACTERS',
}

interface FetchCharactersAction {
    type: CharactersActionTypes.FETCH_CHARACTERS;
}

interface FetchCharactersSuccessAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS;
    payload: any[];
}

interface FetchCharactersErrorAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_ERROR;
    payload: any;
}

interface FetchCharactersInfoAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_INFO;
    payload: any;
}


interface FilterCharacters {
    type: CharactersActionTypes.FILTER_CHARACTERS;
    payload: string;
}

export type CharactersAction
    = FetchCharactersAction
    | FetchCharactersSuccessAction
    | FetchCharactersErrorAction
    | FetchCharactersInfoAction
    | FilterCharacters
