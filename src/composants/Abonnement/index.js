import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap } from './AbonnementElements'
import { NavLink } from 'react-router-dom';

const Connexion = () => {
    return (
        <Container className="home">
            <FormWrap>
                <div className="navigation">
                <ul>
                    <NavLink to="/" exact className="hover"
                        activeClassName="nav-active">
                        <li className="titre">Acceuill</li>
                    </NavLink>
                </ul>
                </div>
                <FormContent>
                    <Form action="#">
                        <FormH1>
                            Abonnez vous 
                        </FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormButton type='submit'>Confirmer</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Connexion
