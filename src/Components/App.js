import React, {Component} from 'react';
import Mobel from './Mobel';
import Data from './Data';

class App extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return(
            <div>
                <Data/>
                <Mobel/>
            </div>
        )}
}

export default App;