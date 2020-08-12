npx create-react-app --template typescript
cd client
sudo npm start

mkdir components
1. touch layout.tsx:
import React, { Component } from "react"; 
export class Layout extends Component {
     render() {
          return (
              <>
              hi
              </>
          )
     }
    }

2. index.tsx (local service worker):
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Layout } from './components/layout';
ReactDOM.render(
    <Layout />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

3. mkdir models> Item.tsx:
export class RestoModel { public constructor(public restName?: string) {} }

4. data retrieval recepie:
build a model in model folder-
game-model.tsx-
export class GameModel { 
    public constructor(
        public name?: string
        ) {} }
new games component-
import React, { Component } from "react";
import { GameModel } from "../models/game-model";
// import { NavLink } from "react-router-dom";
interface gameState {
  games: GameModel[];
}
export class Games extends Component<any, gameState> {
  public constructor(props: any) {
    super(props);
    this.state = { games: [] };
  }
  public componentDidMount(): void {
    fetch("http://localhost:3006/api/games")
      .then((response) => response.json())
      .then((games) => this.setState({ games }))
      .catch((err) => alert(err.message));
  }
  public render(): JSX.Element {
    return (
      <div>
        Here are our {this.state.games.length} games
        {this.state.games.map((game) => (
          // <NavLink to={"/salaries-per-emp/" + rev.id} key={rev.id}>
          <div className="rev">
            name: {game.name} <br />
            {game}
          </div>
          // </NavLink>
        ))}
      </div>
    );  }}

5. extend into tabular data:
