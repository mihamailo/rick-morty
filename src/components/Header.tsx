import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Grid container alignItems="center" justifyContent="space-between" style={{ height: 60 }}>
                    <div className="headerLogo">
                        R&C
                    </div>
                    <div className="headerNav">
                        <Link to='/'>
                            <Button className="headerLink">Main</Button>
                        </Link>
                        <Link to='/about'>
                            <Button className="headerLink">About</Button>
                        </Link>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Header