import React from "react";
import { color, styled } from '@mui/system';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import cobra_car from '../../assets/images/cobra_car.jpg';

interface Props{
    section: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
})
const Logo = styled('h1')({
    margin: '0 0 0.45em'
})
const LogoA = styled(Link)({
    color: 'white',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex',
    fontFamily: 'sans-serif'
})
const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})
const NavA = styled(Link)({
    display:'block',
    padding: '1em',
    color: 'white',
    textDecoration: 'none'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cobra_car});`, // Image here
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontFamily: 'sans-serif'
})

export const Dashboard = (props:Props) => {
    return(
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to='/'>Tommy's Jalopies</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/Dashboard'>About</NavA>
                    </li>
                    <li>
                        <NavA to='/SignIn'>Learn More</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.section}</h1>
                    <p>In 1807 Einstein discovered the first cave painting of a jalopy in a cave in France, labeled "Kachow"</p>
                    
                </MainText>
            </Main>
        </Root>
    )
}