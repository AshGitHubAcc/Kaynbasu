import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import DateStateVariable from "./DataStateVariables";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    function sayHello() {
        alert('Hello, World!');
    }
  return (
    <div>
      <h2>Lab 4</h2>
      <PassingFunctions theFunction={sayHello}/>
      <ArrayStateVariable />
      <BooleanStateVariables />
      <ClickEvent />
      <DateStateVariable />
      <EventObject />
      <PassingFunctions theFunction={sayHello}/>
      <PassingDataOnEvent />
      <StringStateVariables />
      <ReduxExamples />
    </div>
  );
}