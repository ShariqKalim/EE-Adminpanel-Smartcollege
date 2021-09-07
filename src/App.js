import React from "react";
import { Route, Switch } from "react-router-dom";
import Assignments from "./components/Assignments";
import Choices from "./components/Choices";
import Classnotes from "./components/Classnotes";
import Login from "./components/Login";
import "./App.css";
import ECT_PANEL from "./components/panels/ECT_PANEL";
import ECT_TASK_PANEL from "./components/panels/ECT_TASK_PANEL";
import MATH_PANEL from "./components/panels/MATH_PANEL";
import MATH_TASK_PANEL from "./components/panels/MATH_TASK_PANEL";
import EFT_PANEL from "./components/panels/EFT_PANEL";
import EFT_TASK_PANEL from "./components/panels/EFT_TASK_PANEL";
import AE_PANEL from "./components/panels/AE_PANEL";
import AE_TASK_PANEL from "./components/panels/AE_TASK_PANEL";
import EM_PANEL from "./components/panels/EM_PANEL";
import EM_TASK_PANEL from "./components/panels/EM_TASK_PANEL";
import BFE_PANEL from "./components/panels/BFE_PANEL";
import BFE_TASK_PANEL from "./components/panels/BFE_TASK_PANEL";
import IC_PANEL from "./components/panels/IC_PANEL";
import IC_TASK_PANEL from "./components/panels/IC_TASK_PANEL";
import NM_PANEL from "./components/panels/NM_PANEL";
import NM_TASK_PANEL from "./components/panels/NM_TASK_PANEL";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/choices">
          <Choices />
        </Route>

        <Route path="/classnotes">
          <Classnotes />
        </Route>

        <Route path="/assignments">
          <Assignments />
        </Route>

        <Route path="/ECT_PANEL">
          <ECT_PANEL />
        </Route>

        <Route path="/ECT_TASK_PANEL">
          <ECT_TASK_PANEL />
        </Route>

        <Route path="/MATH_PANEL">
          <MATH_PANEL />
        </Route>

        <Route path="/MATH_TASK_PANEL">
          <MATH_TASK_PANEL />
        </Route>

        <Route path="/EFT_PANEL">
          <EFT_PANEL />
        </Route>

        <Route path="/EFT_TASK_PANEL">
          <EFT_TASK_PANEL />
        </Route>

        <Route path="/AE_PANEL">
          <AE_PANEL />
        </Route>

        <Route path="/AE_TASK_PANEL">
          <AE_TASK_PANEL />
        </Route>

        <Route path="/EM_PANEL">
          <EM_PANEL />
        </Route>

        <Route path="/EM_TASK_PANEL">
          <EM_TASK_PANEL />
        </Route>

        <Route path="/BFE_PANEL">
          <BFE_PANEL />
        </Route>

        <Route path="/BFE_TASK_PANEL">
          <BFE_TASK_PANEL />
        </Route>

        <Route path="/IC_PANEL">
          <IC_PANEL />
        </Route>

        <Route path="/IC_TASK_PANEL">
          <IC_TASK_PANEL />
        </Route>

        <Route path="/NM_PANEL">
          <NM_PANEL />
        </Route>

        <Route path="/NM_TASK_PANEL">
          <NM_TASK_PANEL />
        </Route>
      </Switch>
    </>
  );
};

export default App;
