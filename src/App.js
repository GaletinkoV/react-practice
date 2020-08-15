// import React from 'react';
// import './App.css';
// import  { useState,useEffect } from 'react';
// import DateChooser from './components/DateChooser/DateChooser';
// import TableContainer  from './components/table/TableContainer';
// //make arrow function
// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("https://gist.githubusercontent.com/GaletinkoV/813de2405a19a32abb31f943cd9d504d/raw/0bd5a64353253f06e217d0c5896347e295a48c76/table-data")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

  

//   if (error) {
//     return <div>Ошибка: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Загрузка...</div>;
//   } else {
//     return(
//     <div className="App">
//       <DateChooser></DateChooser>
//       <TableContainer data={items}></TableContainer>
//     </div>
//     );
//   }
// }

//export default App;

import React, { Component } from 'react'
 import DateChooser from './components/DateChooser/DateChooser';
 import TableContainer  from './components/table/TableContainer';
import './App.css';

export default class App extends Component {
  state = {
    error: false,
    loading: false,
    data: [],
    columnNames: [],
    dateFilter: {
      min: '',
      max: '',
      from: '',
      to: ''
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    this.getData();
  }

  getData = async () => {
    try {
      const data = await fetch("https://gist.githubusercontent.com/GaletinkoV/813de2405a19a32abb31f943cd9d504d/raw/0bd5a64353253f06e217d0c5896347e295a48c76/table-data")
      .then(res => res.json());
      const columnNames = data.length > 0 ? Object.keys(data[0]) : [];
      this.setState({data, columnNames});
    } catch(err) {
      this.setState({error: true});
    }
    this.setState({loading: false});
  }

  

  render() {
    const {error, loading, data, columnNames, dateFilter} = this.state;

    //const _data = data.filter()//

    return (
      <div className='App'>
        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong</div>}
        {!(loading || error) && 
        <>
          <DateChooser />
         <TableContainer data={_data} columnNames={columnNames} />
        </>}
      </div>
    )
  }
}
