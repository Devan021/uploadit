import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Consumer } from '../config/context';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const log = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log('Logged in:', result.user);
        }).catch((error) => {
            console.error('Error during login:', error.message);
        });
    };

    return (
        <Consumer>
            {value => {
                return (
                    <main>
                        <section className="image">
                            <img src="static/asset/hero2.png" alt="Hero" />
                        </section>
                        <section className="text">
                            <article>
                                <h1>Upload<span className="text_blue">It</span></h1>
                                <p>Store your files on the cloud.</p>
                                <button onClick={log} className="button_blue">Login Using Gmail</button>
                            </article>
                        </section>
                    </main>
                );
            }}
        </Consumer>
    );
};

export default Login;
