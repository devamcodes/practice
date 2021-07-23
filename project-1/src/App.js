import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";
import Clicked from "./components/functionClick";
import EventBind from "./components/eventBind";
import ParentComponent from "./components/parentComponent";
import UserGreeting from "./components/userGreeting";
import NameList from "./components/nameList";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/form";
import ParentComp from "./components/parentComp";
import FocusInput from "./components/FocusInput";
import ErrorBoundary from "./components/ErrorBoundary";
import Hover from "./components/Hover";
// import CComponentForConetxt from "./components/CComponentForConetxt";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
        <Form />
        <h3 className="error">error</h3>
        <h3 className={styles.success}>success</h3>
        <Inline />
        <NameList />
        <Greet name="Sly" heroName="Slyvester" />
        <ErrorBoundary>
          <Hello name="Sly" heroName="Slyvester" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hello name="James" heroName="Jamse" />
        </ErrorBoundary>
               <Message />
        <Clicked />
       <EventBind />
        <ParentComponent />
        <UserGreeting />
        <FocusInput />
        <Counter />
        <Hover />
      </div>
    );
  }
}

export default App;
