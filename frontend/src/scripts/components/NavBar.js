import {Link} from 'react-router-dom';
import {
    Container,
    Menu,
    Image,
} from 'semantic-ui-react'

const NavBar = () => (
    <Menu borderless style={{marginBottom: 0}}>
        <Container>
            <Menu.Item as={Link} to='/'><Image src='img/fl-logo.svg' size='small' /></Menu.Item>
            <Menu.Item as='a'>Projects</Menu.Item>
        </Container>
    </Menu>
);

export default NavBar;