/* eslint-disable react/no-unescaped-entities */
const HomePage = () => {
  return (
    <div className='container'>
      <h2>Welcome to Conway's Game of Life!</h2>
      <p>
      Conway's Game of Life is a cellular automaton devised by the British mathematician 
      John Horton Conway in 1970. It's a zero-player game, meaning its evolution is determined 
      by its initial state, requiring no further input from human players. 
      </p>
      <p>
      The game takes place on an infinite two-dimensional square grid of cells, each of which 
      can be in one of two possible states: alive or dead. The state of each cell changes in 
      discrete time steps, according to a set of rules based on the states of its eight neighboring cells:
      </p>

      <ul>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ul>

      <p>
      Please click "Game" at navigation bar to start the game.
      </p>
    </div>
  )
}

export default HomePage;
