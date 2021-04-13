/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';
import GitHubIcon from '@material-ui/icons/GitHub';

export default({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
            <a href="https://github.com/thaysrq/netflixclonereact">
          <GitHubIcon
            style={{ fontSize: 35, marginRight: 10, color: 'white' }}
          />
        </a>
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
                </a>

            </div>
        </header>
    )
}