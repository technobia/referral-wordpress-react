import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {
    Segment,
    Container,
    Grid,
    Header,
    Button,
    Icon,
    Rail,
    Image,
} from 'semantic-ui-react';

class Home extends React.Component {
    render() {
        return (
            <div id="homepage">
                <Segment style={{minHeight: 650}} vertical inverted className='slider'>
                    <Rail position='left' internal attached>
                        <Image src='img/544675864.jpg' />
                    </Rail>
                    <Container text>
                        <Header as='h1' inverted style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: 0, marginTop: '3em' }}>
                            Hire expert freelancers for your job, online
                        </Header>
                        <Header as='h2' inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }}>
                            Do whatever you want when you want to.
                        </Header>
                        <Button basic inverted size='huge'>Go to Projects</Button>
                        <div style={{marginTop: '1.7em'}}>
                            <Icon name='circle' color='grey' inverted />
                            <Icon name='circle thin' color='grey' inverted />
                            <Icon name='circle thin' color='grey' inverted />
                        </div>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Home;
