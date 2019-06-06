import React, { Component } from 'react';

import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';
import Chat from '../../components/Chat/Chat.jsx';

class MainPage extends Component {
    render () {
        return <section>
            <Description />
            <Points />
            <Chat />
        </section>;
    }
}

export default MainPage;
