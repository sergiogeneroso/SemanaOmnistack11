import React, {useState} from '../../../node_modules/react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from '../../../node_modules/react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const reponse = await api.post('sessions',{id});
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', reponse.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha ao realizar o login, verifique os dados e tente novamete.')   
        }
    }

    return(
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt ="Be The Hero"/>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <input 
                    placeholder="Seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}

                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho conta
                </Link>
            </form>
            </section>
        <img src={herosImg} alt="Hero"/>
    </div>
    )
};