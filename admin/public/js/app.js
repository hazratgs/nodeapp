"use strict";

let news = [
    {
        title: "Шнейдерлен перешёл из «Манчестер Юнайтед» в «Эвертон»",
        description: "Как сообщает официальный сайт «ирисок», контракт с 27-летним футболистом рассчитан на четыре с половиной года (до конца июня 2021 года). Сумма трансфера составила £ 20 млн, но в дальнейшем она увеличится до £ 24 млн.. Сорос занял осторожную позицию перед выборами и окончательно переквалифицировался в «медведя» (то есть, играющего на понижение участника рынка) после оглашения результатов.",
        img: "https://icdn.lenta.ru/images/2017/01/12/22/20170112221946571/pic_2c52a87af6970db4be43f8838e6163ea.jpg",
        content: "Текст подробнее",
    },
    {
        title: "Ибрагимович: моя главная цель – трофей АПЛ, я Златан Завоеватель",
        description: "Нападающий «Манчестер Юнайтед» Златан Ибрагимович обозначил главную цель, которую ставит перед собой, и отметил, что не гонится за Диего Костой в споре бомбардиров АПЛ.",
        img: "http://football.sport.ua/images/news/0/7/150/orig_310130.jpg",
        content: "Текст подробнее letsencrypt",
    }
];

let Add = React.createClass({

    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    },

    sendMessage: function () {
        alert(this.refs.myTestInput.value);
    },

    render (){

        return (
            <div className="form">
                <div className="form-item">
                    <span>Автор</span>
                    <input defaultValue="" ref="author" />
                </div>
                <div className="form-item">
                    <span>Новость</span>
                    <input defaultValue="" ref="news" />
                </div>
                <div className="form-item">
                    <label>
                        <input defaultValue="" type="checkbox" ref="copyright"/>
                        <span>Я согласен с правилами ресурса</span>
                    </label>
                </div>
                <button onClick={this.sendMessage}>Отправлять</button>
            </div>
        );
    }
});

let Article = React.createClass({

    getInitialState (){
        return {
            visible: false
        }
    },
    
    readMoreClick: function (e) {
        e.preventDefault();
        this.setState({
            visible: true
        });
    },

    render: function () {
        return (
            <div className="article">
                <img src={this.props.data.img} />
                <div className="article-data">
                    <a href="#"
                       className="article__readmore"
                       onClick={this.readMoreClick}>
                       {this.props.data.title}
                    </a>
                    <p>{this.props.data.description}</p>
                </div>
                <div className={"article__content " + (this.state.visible ? '' : 'none')} >{this.props.data.content}</div>
            </div>
        );
    }
});

let News = React.createClass({

    getInitialState (){
        return {
            counter: 0
        };
    },

    incrementClick: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render (){
        let newsRender = <p>К сожалению новостей нет</p>;

        if (this.props.data.length){
            newsRender = this.props.data.map(function (item, index) {
                return <Article data={item}/>
            });
        }

        return <div className="news">
            <h3 onClick={this.incrementClick}>Новости {this.state.counter}</h3>
            <span className={!this.props.data.length ? 'none' : ''}>Количество новостей: {this.props.data.length}</span>
            <div className="news-data">
                {newsRender}
            </div>
        </div>
    }
});

let Comments = React.createClass({
    render (){
        return <div className="comments">
            Нет новостей - комментировать нечего.
        </div>
    }
});

let App = React.createClass({
    render (){
        return <div className="app">
            <Add/>
            <News data={news} />
            <Comments/>
        </div>
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);