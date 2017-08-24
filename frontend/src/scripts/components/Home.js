import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {
    Segment,
    Grid,
    Header,
    Image,
    List,
} from 'semantic-ui-react';
import Banner from './Banner';

const BENEFIT_LIST = [
    'You’ll receive bids for free from our talented freelancers within seconds.',
    'Keeping up-to-date with our 24/7 support, time tracker, and mobile app.',
    'Chat for free.',
    'Browse samples of previous work.',
    'Only pay for the work when it is completed in a safe and secure manner. Release your payment when you are 100% satisfied with the work provided.'
];

class Home extends React.Component {
    render() {
        return (
            <div id="homepage">
                <Banner />

                <Segment basic vertical style={{padding: '3em 1em'}}>
                    <Grid container verticalAlign='middle'>
                        <Grid.Column computer={8} mobile={16}>
                            <Header size='huge'>Need work done?</Header>
                            <p style={{fontSize: '1.2em'}}>Post your project and receive competitive bids from freelancers within minutes. Our reputation system will make it easy to find the perfect freelancer for your job. It's the simplest and safest way to get work done online.</p>
                            <p style={{fontSize: '1.2em'}}>We have millions of Freelancers for thousands of freelance jobs: from web design, mobile app development, virtual assistants, product manufacturing and graphic design. Whatever your needs, there will be a freelancer to get it done.</p>
                            <Header size='huge'>How do you benefit?</Header>
                            <List>
                                {
                                    BENEFIT_LIST.map((content, index) => (
                                        <List.Item key={index}>
                                            <List.Icon name='check' color='green' size='large' />
                                            <List.Content style={{fontSize: '1.2em'}}>{content}</List.Content>
                                        </List.Item>
                                    ))
                                }
                            </List>
                        </Grid.Column>
                        <Grid.Column computer={8} mobile={16} textAlign='center'>
                            <Image src='img/541975802.jpg' shape={'rounded'} />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default Home;
