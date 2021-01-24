import React from 'react';
import {Route} from 'react-router-dom';
import App from '../Components/App';

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Route exact path="/" component={App}/>
        </React.Fragment>
    )
}

export default ReactRouter;