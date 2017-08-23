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
import Banner from './Banner';

class Home extends React.Component {
    render() {
        return (
            <div id="homepage">
                <Banner />
            </div>
        );
    }
}

export default Home;
