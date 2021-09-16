import React, { useEffect, useState } from 'react'
import CharactersList from '../components/CharactersList'
import Pagination from '@material-ui/lab/Pagination';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

function Main() {
    const { charactersInfo } = useTypedSelector(state => state.characters)
    const [page, setPage] = useState<number>(1)
    const [query, setQuery] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [timer, setTimer] = useState<null | ReturnType<typeof setTimeout>>(null)
    const { filterCharacters } = useActions()
    const _onChange = (e: object, page: number) => {
        setPage(page)
    }

    useEffect(() => {
        if (!query) {
            return
        }
        filterCharacters(query)
    }, [query])

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(() => {
            setQuery(`name=${e.target.value}${status ? `&status=${status}` : ''}${gender ? `&gender=${gender}` : ''}`)
        }, 250))
    }

    const filterStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as string
        setStatus(value)
        setQuery(`${name ? `&name=${name}` : ''}${value ? `&status=${value}` : ''}${gender ? `&gender=${gender}` : ''}`)
    }

    const filterGender = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as string
        setGender(value)
        setQuery(`${name ? `&name=${name}` : ''}${status ? `&status=${status}` : ''}${value ? `&gender=${value}` : ''}`)
    }

    return (
        <div className="main">
            <TextField
                value={name}
                onChange={search}
                label='Search by name'
                style={{ marginBottom: 20 }}
                variant="outlined" />
            <FormControl
                variant="outlined"
                style={{ marginLeft: 10 }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    labelId="status-label"
                    label="Status"
                    onChange={filterStatus}
                    style={{ width: 120 }}
                >
                    <MenuItem >
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Alive'}>Alive</MenuItem>
                    <MenuItem value={'Dead'}>Dead</MenuItem>
                    <MenuItem value={'Unknown'}>Unknown</MenuItem>
                </Select>
            </FormControl>
            <FormControl
                variant="outlined"
                style={{ marginLeft: 10 }}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                    labelId="gender"
                    label="Gender"
                    onChange={filterGender}
                    style={{ width: 120 }}
                >
                    <MenuItem >
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Genderless'}>Genderless</MenuItem>
                    <MenuItem value={'Unknown'}>Unknown</MenuItem>
                </Select>
            </FormControl>
            <CharactersList page={page} />
            <Grid container justifyContent='center' style={{ marginTop: 40 }}>
                <Pagination count={charactersInfo.pages} color="secondary" onChange={_onChange} />
            </Grid>
        </div>
    )
}
export default Main