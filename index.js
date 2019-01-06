var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    getDefaultProps: function () {
        console.log('getDefaultProps: można ustawić domyślne wartości propsów - np. nazwę');
    },
    componentWillMount: function () {
        console.log('componentWillMount: można zacząć wykonywać obliczenia lub procesy w oparciu o wartości propsów');
    },
    componentDidMount: function () {
        console.log('componentDidMount: w tym momencie można Możemy wykonywać manipulacje na obiektach albo pobrać dane');
    },
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps: można wykorzystać do zmiany np. imienia w formularzu');
    },
    shouldComponentUpdate: function () {
        //console.log('shouldComponentUpdate: pozwala na wyjście z cyklu aktualizacji jeśli nie ma potrzeby nowego rendera');
        // console.log musi być w komentarzu inaczej chrome pokazuje błąd - shouldComponentUpdate musi mieć wartość true lub false
        return true;
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate: funkcja, która jest wykonywana jeśli shouldComponentUpdate ma wartość true');
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate: tutaj można wykonywać manipulacje na drzewie DOM');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount: zadania wykonywane przed odpięciem elementu, np. odpinanie nasłuchiwania zdarzeń');
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function () {
        return (
            React.createElement('div', { className: 'countercontainer' },

                React.createElement('div', { onClick: this.increment, className: 'increment' },
                    React.createElement('button', {}, 'Dodaj  ')
                ),

                React.createElement('div', { className: 'counter' },
                    React.createElement('span', {}, 'Licznik: ' + this.state.counter)
                ),


                React.createElement('div', { onClick: this.decrement, className: 'decrement' },
                    React.createElement('button', {}, 'Odejmij  ')
                )
            )
        );
    }
});

var Container = React.createClass({
    render: function () {
        return (
            React.createElement('div', { className: 'container' },
                React.createElement(Counter),
                React.createElement(Counter),
                React.createElement(Counter)
            )
        );
    }

});

var container = React.createElement(Container);
ReactDOM.render(container, document.getElementById('app'));