import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { arrayExpression } from '@babel/types';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        let arr = [0, 0, 0]
        return (
            <div>
                {
                    arr.map((value, i) => {
                        return (

                            <div className="board-row">
                                {this.renderSquare(0)}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
