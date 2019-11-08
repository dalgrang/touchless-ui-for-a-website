import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import GalleryPage from '../pages/GalleryPage';
import NotFoundPage from '../pages/NotFoundPage';
import AppContainer from '../components/AppContainer';


class AppRouter extends React.Component {

    render() {

        return (

            <BrowserRouter>
                <AppContainer>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/blog" component={BlogPage} exact={true} />
                        <Route path="/gallery" component={GalleryPage} exact={true} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </AppContainer>
            </BrowserRouter>

        )
    }
};

export default AppRouter;