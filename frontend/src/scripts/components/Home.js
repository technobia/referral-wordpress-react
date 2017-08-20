import React from 'react';
import DataStore from '../flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('sample-page');

        return (
            <div>
                {console.log(pageData)}
                {/*<h2>Homepage template</h2>*/}
                {/*<h1>{pageData.title.rendered}</h1>*/}

                {/*<div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />*/}
                {/*<div>{pageData.acf.text}</div>*/}
            </div>
        );
    }
}

export default Home;
