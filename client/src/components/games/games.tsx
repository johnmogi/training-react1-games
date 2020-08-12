import React, { Component } from "react"; 
// import "./reviews.css"; 
import {  GameModel } from "../models/game-model"; 
// import { NavLink } from "react-router-dom"; 
interface gameState { games: GameModel[]; } 

export class Games extends Component<any, gameState> 
{ public constructor(props: any) { 
    super(props); 
    this.state = { games: [] }; 
} 
public componentDidMount(): void { 
    fetch("http://localhost:3006/api/games") 
    .then(response => response.json()) 
    .then(games => this.setState({ games })) 
    .catch(err => alert(err.message)); 
} 
public render(): JSX.Element { return ( 
    
    <div>

Here are our {this.state.games.length} games

{this.state.games.map(game => (
// <NavLink to={"/salaries-per-emp/" + rev.id} key={rev.id}>
<div className="rev">
date: {game.name} <br />

</div>
// </NavLink>
))}

</div>

); } }