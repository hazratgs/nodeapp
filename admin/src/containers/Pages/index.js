import React, { Component } from 'react';
import Helmet from 'react-helmet';
import s from './styles.css';

export default class Pages extends Component {
    render() {
        return(
            <div className={s.wrapper}>
                <Helmet title='Страницы'/>
                <h1>Страницы</h1>
            </div>
        );
    }
}