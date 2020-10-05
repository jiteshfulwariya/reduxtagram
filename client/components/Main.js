import React from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
    render() {
        return (
            <div>
            <h1>
                <Link to="/">Reduxtagram</Link>
            </h1>
            <Switch>
                <Route
                    path="/"
                    render={(routeProps) => (
                        <PhotoGrid {...routeProps} {...this.props} />
                    )}
                    exact
                />

                <Route
                    path="/view/:postId"
                    render={(routeProps) => (
                        <Single {...routeProps} {...this.props} />
                    )}
                />
            </Switch>
            </div>           
        );
    }
}

export default Main;