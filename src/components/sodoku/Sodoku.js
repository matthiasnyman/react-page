// import React from 'react';
// import sudoku from 'sudoku';
// import SudokuFild from './SudokuFild';
// import './sudoku.scss';


// class Sudoku extends React.Component {
//   state = { 
//     sudokuArray: []
//   }

//   makeCountObject() {
//     const countObj = [];
//     for (let i = 0; i < 10; i += 1) countObj.push(0);
//     return countObj;
//   }
  
//   makeBoard({ puzzle }) {
//     // create initial count object to keep track of conflicts per number value
//     const rows = Array.from(Array(9).keys()).map(() => makeCountObject());
//     const columns = Array.from(Array(9).keys()).map(() => makeCountObject());
//     const squares = Array.from(Array(9).keys()).map(() => makeCountObject());
//     const result = puzzle.map((row, i) => (
//       row.map((cell, j) => {
//         if (cell) {
//           rows[i][cell] += 1;
//           columns[j][cell] += 1;
//           squares[((Math.floor(i / 3)) * 3) + Math.floor(j / 3)][cell] += 1;
//         }
//         return {
//           value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
//           prefilled: !!puzzle[i][j],
//         };
//       })
//     ));
//     return fromJS({ puzzle: result, selected: false, choices: { rows, columns, squares } });

//   }
    
//     render() {  
//      console.log('====================================');
//      console.log(this.state.sudokuArray);
//      console.log('====================================');
//     return (
//       <>
//         <h1>Hello</h1>
//         <SudokuFild array={this.sudokuArray} />
//         <button onClick={this.generatePuzzle}>New puzzle</button>
//       </>
//     );
//   }
// }

// export default Sudoku;