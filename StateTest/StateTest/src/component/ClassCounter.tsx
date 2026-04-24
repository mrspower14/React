import { Component } from "react";


type typeProps = {
    init: number;
};

type typeState = {
    count: number;
};

export default class ClassCounter extends Component<typeProps, typeState> {
    constructor(props: typeProps) {
        super(props);
        this.state = {
            count: props.init,
        };
    };

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>클릭 카운터 Class</h1>
                <p>현재 클릭 수: {this.state.count}</p>
                <button onClick={this.handleClick}>클릭하세요</button>
            </div>
        )
    }
}