// import Event1 from "./subModule/Event1";
// import Event2 from "./subModule/Event2";

// function App() {
//   const style = {
//     backgroundColor: 'red',
//     color: 'white',
//     fontSize: '3em',
//     textDecoration: 'none',
//     marginBottom: '10px',
//   }

//   return (
//     <>
//       <Event1 style={style} />
//       <Event2 style={style} />
//     </>
//   );
// }

// export default App;

import Counter from "./subModule/Counter";

function App() {
    const spanStyle = {
      // 동기 값
        display: 'inline-block',
        margin: '20px 20px',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '2em',

    },
        btnStyle = {
            marginRight: '40px',
        };

    return (
        <Counter spanStyle={spanStyle} btnStyle={btnStyle} />
    );
}

export default App;