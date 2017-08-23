/**
 * Created by binh on 8/23/17.
 */
import React from 'react';
import {
    Segment,
    Rail,
    Image,
    Header,
    Button,
    Icon,
    Container,
    Transition,
} from 'semantic-ui-react';

const BANNER_LIST = ['538670440.jpg', '544675864.jpg'];

class Banner extends React.PureComponent {
    state = {
        activeIndex: 0,
    };

    componentDidMount() {
        this.setIntervalSlider();
    }

    componentWillUnmount() {
        clearInterval(this.intervalSlider);
    }

    setIntervalSlider = () => {
        this.intervalSlider = setInterval(() => {
            let activeIndex = this.state.activeIndex + 1;
            if (activeIndex >= BANNER_LIST.length) activeIndex = 0;
            this.setState({activeIndex: activeIndex});
        }, 7000);
    };

    onChangeActiveIndex = index => this.setState({activeIndex: index});

    render() {
        const {activeIndex} = this.state;
        return (
            <Segment style={{minHeight: 650}} vertical inverted className='slider'>
                <Rail position='left' internal attached>
                    {
                        BANNER_LIST.map((banner, index) => (
                            <Transition animation='fade' duration={500} visible={index === activeIndex} key={index}>
                                <Image src={`img/${banner}`} />
                            </Transition>
                        ))
                    }
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
                        {
                            BANNER_LIST.map((banner, index) => (
                                <Icon
                                    name={`circle${index !== activeIndex ? ' thin' : ''}`}
                                    color='grey'
                                    inverted
                                    key={index}
                                    onClick={this.onChangeActiveIndex.bind(this, index)}
                                />
                            ))
                        }
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default Banner;