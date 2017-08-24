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

const styleText = {fontSize: '1.15em', fontWeight: '300'};

const BENEFIT_LIST = [
    'You’ll receive bids for free from our talented freelancers within seconds.',
    'Keeping up-to-date with our 24/7 support, time tracker, and mobile app.',
    'Chat for free.',
    'Browse samples of previous work.',
    'Only pay for the work when it is completed in a safe and secure manner. Release your payment when you are 100% satisfied with the work provided.'
];

const PROJECT_LIST = [
    {id: 1, img: 'img/Website1-a1e0d026.jpg', name: 'Website design'},
    {id: 2, img: 'img/Website2-4ac91f5d.jpg', name: 'Website mockup'},
    {id: 3, img: 'img/Website3-530717b2.jpg', name: 'Website template'},
    {id: 4, img: 'img/Website4-7c04a2c6.jpg', name: 'Software development'},
    {id: 5, img: 'img/Website1-a1e0d026.jpg', name: 'Website design'},
    {id: 6, img: 'img/Website2-4ac91f5d.jpg', name: 'Website mockup'},
    {id: 7, img: 'img/Website3-530717b2.jpg', name: 'Website template'},
    {id: 8, img: 'img/Website4-7c04a2c6.jpg', name: 'Software development'},
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
                            <p style={styleText}>Post your project and receive competitive bids from freelancers within minutes. Our reputation system will make it easy to find the perfect freelancer for your job. It's the simplest and safest way to get work done online.</p>
                            <p style={styleText}>We have millions of Freelancers for thousands of freelance jobs: from web design, mobile app development, virtual assistants, product manufacturing and graphic design. Whatever your needs, there will be a freelancer to get it done.</p>
                            <Header size='big'>How do you benefit?</Header>
                            <List>
                                {
                                    BENEFIT_LIST.map((content, index) => (
                                        <List.Item key={index}>
                                            <List.Icon name='check' color='green' size='large' />
                                            <List.Content style={styleText}>{content}</List.Content>
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

                <Segment basic vertical>
                    <Grid container>
                        <Grid.Column mobile={16}>
                            <Header dividing size='huge'>Projects</Header>
                        </Grid.Column>
                        {
                            PROJECT_LIST.map(item => (
                                <Grid.Column mobile={8} computer={4} key={item.id} textAlign='center'>
                                    <Image src={item.img} />
                                    <p style={{...styleText, padding: '0.5em 0'}}><strong>{item.name}</strong></p>
                                </Grid.Column>
                            ))
                        }
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default Home;
