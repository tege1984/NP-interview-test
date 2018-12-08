// async function f() {
//   let dataStore;
//   await fetch("http://localhost:3000/orders")
//     .then(response => response.json())
//     .then(data => (dataStore = data)); // wait till the promise resolves (*)

//   console.log(dataStore); // "done!"
// }

// f();

var App = React.createClass({
  //   state: {
  //     data: null
  //   },

  //   componentDidMount: function() {
  //     //     fetch("http://localhost:3000/orders")
  //     //   .then(function(response) {
  //     //     // Convert to JSON
  //     //     return response.json();
  //     //   })
  //     //   .then(function(j) {
  //     //     // Yay, `j` is a JavaScript object
  //     //     setState({ data })
  //     //   })

  // //     fetch("http://localhost:3000/orders")
  // //       .then(response => response.json())
  // //       .then(data => (this.state.data = data));
  //   },

  render: function() {
    return (
      <ul>
        {/* {dataStore.map(data => (
          <li key={data._id}>{data.Date}</li>
        ))} */}
      </ul>
    );
  }
});
ReactDOM.render(<App />, document.getElementById("container"));
