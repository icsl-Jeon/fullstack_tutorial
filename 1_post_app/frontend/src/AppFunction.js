import logo from './logo.svg';
import './App.css';
import {Component} from "react";

function AppFunction() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

class AppClass extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/`)
            const posts = await res.json();
            this.setState({posts});
        } catch (e) {
            alert(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

// export default AppFunction;
export default AppClass;
