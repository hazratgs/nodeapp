import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import s from './styles.css';

class Search extends Component {
    render() {
        return (
            <div className={s.form}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <input placeholder="Начните печатать" />
            </div>
        )
    }
}

class Filter extends Component {
    render() {
        return (
            <div className={s.filter}>
                <select>
                    <option>Фильтрация</option>
                </select>
            </div>
        )
    }
}

class Form extends Component {
    render() {
        return (
            <div className={s.search}>
                <div className={s.wrapper}>
                    <Filter/>
                    <Search/>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    render() {
        return (
            <div className={s.item}>
                <div className={s.title}>
                    <div className={s.img}>
                        <img src={this.props.data.img}/>
                    </div>
                    <div className={s.data}>
                        <Link to="">{this.props.data.title}</Link>
                        <div className={s.param}>
                            <svg viewBox="0 0 24 24">
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                            </svg>
                            <span>Просмотров: 89 чел.</span>
                        </div>
                    </div>

                </div>
                <div className={s.rubric}>{this.props.data.rubric}</div>
                <div className={s.author}>{this.props.data.author}</div>
                <div className={s.date}>{this.props.data.date}</div>
            </div>
        )
    }
}

class Table extends Component {
    render() {

        let list, data;

        data = [
            {
                'img': 'http://rusrep.ru/images/photo/1299698464162792_big_photo.jpeg',
                'title': 'Прямая трансляция: Дебаты Лебедева и Навального',
                'rubric': 'Дебаты',
                'author': 'Хазрат',
                'date': '24 января 2017, 19:27'
            },
            {
                'img': 'https://static30.cmtt.ru/club/5c/e2/cf/2e4d9a57bfb868.jpg',
                'title': 'Что там у Трампа: итоги первой недели нового президента США',
                'rubric': 'Политика',
                'author': 'Ахмед Закаев',
                'date': '22 января 2017, 23:56'
            },
            // {
            //     'img': '',
            //     'title': '',
            //     'rubric': '',
            //     'author': '',
            //     'date': ''
            // },
            // {
            //     'img': '',
            //     'title': '',
            //     'rubric': '',
            //     'author': '',
            //     'date': ''
            // },
            // {
            //     'img': '',
            //     'title': '',
            //     'rubric': '',
            //     'author': '',
            //     'date': ''
            // }
        ];

        if (data.length){
            list = data.map(function (item) {
                return <Item data={item}/>
            })
        }

        return (
            <div className={s.table}>
                <div className={s.head}>
                    <div className={`${s.item} ${s.title}`}>
                        <span>Название</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 10l5 5 5-5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div className={`${s.item} ${s.rubric}`}>
                        <span>Рубрика</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 10l5 5 5-5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div className={`${s.item} ${s.author}`}>
                        <span>Автор</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 10l5 5 5-5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div className={`${s.item} ${s.date} ${s.active}`}>
                        <span>Дата</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 10l5 5 5-5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                </div>
                <div className={s.data}>
                    {list}
                </div>
            </div>
        )
    }
}

export default class List extends Component {
    render() {
        return(
            <div className={s.root}>
                <Helmet
                    title="Публикации"
                />
                <Form/>
                <Table/>
                <div className={s.pagination}>Пагинация</div>
            </div>
        );
    }
}