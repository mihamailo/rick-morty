import { Container } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default MainLayout
