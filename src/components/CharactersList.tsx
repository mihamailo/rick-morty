import { Card, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface CharactersListProps {
    page: number;
}

const CharactersList: React.FC<CharactersListProps> = ({ page }) => {
    const { characters, error, loading } = useTypedSelector(state => state.characters)
    const { fetchCharacters } = useActions()
    useEffect(() => {
        fetchCharacters()
    }, [])

    useEffect(() => {
        fetchCharacters(page)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page])

    if (loading) {
        return <h1 className="title">Give me second...</h1>
    }

    if (error) {
        return <h1 className="title">{error}</h1>
    }

    return (
        <Grid container spacing={2}>
            {characters.map(character =>
                <Grid item xs={4} key={character.id}>
                    <Card className='card-item'>
                        <div>
                            <img src={character.image} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>name: <span>{character.name}</span></div>
                        <div>gender: <span>{character.gender}</span></div>
                        <div>location: <span>{character.location.name}</span></div>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default CharactersList