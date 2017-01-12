"use strict";

let news = [
    {
        title: "Шнейдерлен перешёл из «Манчестер Юнайтед» в «Эвертон»",
        description: "Как сообщает официальный сайт «ирисок», контракт с 27-летним футболистом рассчитан на четыре с половиной года (до конца июня 2021 года). Сумма трансфера составила £ 20 млн, но в дальнейшем она увеличится до £ 24 млн.. Сорос занял осторожную позицию перед выборами и окончательно переквалифицировался в «медведя» (то есть, играющего на понижение участника рынка) после оглашения результатов.",
        img: "https://icdn.lenta.ru/images/2017/01/12/22/20170112221946571/pic_2c52a87af6970db4be43f8838e6163ea.jpg"
    },
    {
        title: "Ибрагимович: моя главная цель – трофей АПЛ, я Златан Завоеватель",
        description: "Нападающий «Манчестер Юнайтед» Златан Ибрагимович обозначил главную цель, которую ставит перед собой, и отметил, что не гонится за Диего Костой в споре бомбардиров АПЛ.",
        img: "http://football.sport.ua/images/news/0/7/150/orig_310130.jpg"
    }
];

let News = React.createClass({
    render (){
        let newsRender = <p>К сожалению новостей нет</p>;

        if (this.props.data.length){
            newsRender = this.props.data.map(function (item, index) {
                return <div key={index}>
                    <img src={item.img} />
                    <a href="#">{item.title}</a>
                    <p>{item.description}</p>
                </div>
            });
        }

        return <div className="news">
            <strong className={!this.props.data.length ? 'none' : ''}>Количество новостей: {this.props.data.length}</strong>
            {newsRender}
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
            Всем привет, я компонент App!
            <News data={news} />
            <Comments/>
        </div>
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);