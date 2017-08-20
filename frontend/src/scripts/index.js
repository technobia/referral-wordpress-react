import React                from 'react';
import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Home                 from 'components/Home.js';
import About                from 'components/About.js';
import Contact              from 'components/Contact.js';
import NavBar               from 'components/NavBar.js';
import 'semantic-ui-css/semantic.min.css';
import '../assets/sass/main.scss';

import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact
    };

    buildRoutes(data) {
        return data.pages.map((page, i) => {
            return (
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                />
            )
        })
    }

    run() {
        DataActions.getPages((response) => {
            console.log(response);
            render(
                <BrowserRouter>
                    <div>
                        <NavBar />

                        <Switch>
                            <Route path="/" component={ Home } exact/>

                            <Route component={Home} path={`/home`} exact/>
                            <Route render={() => {return <Redirect to="/"/>}}/>
                        </Switch>
                    </div>
                </BrowserRouter>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
