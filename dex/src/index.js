import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 *  This is how React-Redux comes into play. It has a component called Provider that will make our Store available to the
 *  rest of the components. Provider is used at the root level of your app. So, all the child components can have access
 *  to the Store without having to write the import statement in every file. Provider uses the older Context API and an
 *  higher order component (HOC) called connect to access different properties and make them available to different child
 *  components of the app through props.
 *  We now need to use connect in the child component to access the data and “connect” with the Actions to be able to 
 *  modify the data. In the App.js file, replace the export statement with this:
 *  export default connect(store => store, actions)(App);
 */