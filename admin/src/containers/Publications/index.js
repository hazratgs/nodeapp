import React, { Component } from 'react';
import { Link } from 'react-router';
import s from './styles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'redux/modules';

connect(
    state => ({ ...state.app }),
    dispatch => bindActionCreators({
        ...actionCreators.app,
    }, dispatch),
);

class Tabs extends Component {
    render() {
        return (
            <div className={s.tabs}>
                <Link to='/publications/list' activeClassName={s.active}>Список публикации</Link>
                <Link to='/publications/rubric'>Рубрики</Link>
                <Link to='/publications/setting'>Настройки</Link>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className={s.block}>
                <div className={s.header}>
                    <div className={s.head}>
                        <div className={s.top}>
                            <strong className={s.title}>Публикации</strong>
                        </div>
                        <div className={s.data}>
                            <div className={s.info}>
                                <div className={s.item}>
                                    <span>Всего публикаций:</span>
                                    <strong>256</strong>
                                </div>
                                <div className={s.item}>
                                    <span>Комментариев:</span>
                                    <strong>5863</strong>
                                </div>
                                <div className={s.item}>
                                    <span>TOP Рубрика :</span>
                                    <strong>Дебаты</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs/>
                </div>
            </div>
        );
    }
}

export default class Publications extends Component {
    render() {
        return(
            <div className={s.root}>
                <Header/>
                { this.props.children }

                <div className={s.container}>
                </div>
            </div>
        );
    }
}