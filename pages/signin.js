import React, { useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from './../context/firebase';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { Header } from '../components'
import logo from '../logo.svg';

function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [error, setError ] = useState('');
    

    const isInValid = password === '' || emailAddress === '';
    
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history.push(ROUTES.BROWSE);
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }) ;
       
    } ;

    useEffect(() => {
            document.title = 'Netflix - SignIn ';
        }, [])

        return (
        <>
            <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_UP}>SignUp</Header.ButtonLink>
      </Header.Frame>
      <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input 
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)} 
                        />
                        <Form.Input 
                        type='password'
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} 
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix ?<Form.Link to='/signup'> SignUp Now </Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        THis page is protected by Google reCAPTCHA 
                        to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </Header>
            <FooterContainer />
        </>
    )
    };

    


export default SignIn;
