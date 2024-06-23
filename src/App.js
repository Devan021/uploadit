import React from 'react';
import './App.css';
import { Provider, Consumer } from './config/context';

import Navbar from './container/navbar';
import FileTable from './components/filetable';
import Logs from './components/logs';
import FileShare from './components/fileshare';
import Login from './container/login';

const App = () => {
    return (
        <Provider>
            <Consumer>
                {value => {
                    const { user, myFiles, logs } = value;
                    return (
                        user ? (
                            <div className="App container">
                                <Navbar name={user.displayName} img={user.photoURL} />
                                <FileShare uid={user.uid} />
                                <main>
                                    <section>
                                        <FileTable uid={user.uid} myFiles={myFiles} />
                                    </section>
                                    <aside>
                                        <Logs myLogs={logs} />
                                    </aside>
                                </main>
                            </div>
                        ) : <Login />
                    );
                }}
            </Consumer>
        </Provider>
    );
};

export default App;
