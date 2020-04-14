import * as React from 'react';
import '../styles/App.css';
import { Fragment } from 'react';
import MainSection from './MainSection';
import SectionWithLoopRendering from './SectionWithLoopRendering';

export interface IAppProps {
}

interface IState {
  isButtonPressed: boolean;
  userName: string;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isButtonPressed: false,
      userName: "default"
    }
  }

  //Remember the importance of fat arrow functions?
  //Try using this callback method without the fat arrow syntax.
  //As I stressed earlier, having the ability to keep the context of "THIS" is 
  //the PRIMARY difference between fat arrow functions and functions that are not fat arrow functions.
  //It's NOT just syntax.
  //
  //Try removing the fat arrow and making it a normal function, you'll get something like this.state does
  //not exist. That is because without a fat arrow function it will try and look at the context of the
  //child component. We don't care about the state in the child component "SpecialButton". Not at all.
  //
  //But the state we DO care about is here in App.tsx. The state in this component that this comment is in,
  //is the state we are trying to modify and pass down. So we need to maintain the "this" context of this
  //component. Where this "this" component has the state we want to modify. 
  public onClickButton = () => {
    this.setState({ isButtonPressed: true })
  }

  public onClickButtonToGoBack = () => {
    this.setState({ isButtonPressed: false })
  }

  //Try on your own: Using "normal" function syntax rather than fat arrow syntax.
  //Notice that the error says "setState" doesn't exist.
  public onClickUserNameSetButton = (newUserName: string) => {
    console.log(this.state)
    this.setState({ userName: newUserName, });
  }


  public render() {
    let { isButtonPressed, userName } = this.state;
    return (
      <Fragment>
        <div className="App">


          <MainSection
            isButtonPressed={isButtonPressed}
            callbackMethod={this.onClickButton}
            callbackMethodToGoBack={this.onClickButtonToGoBack}
            userName={userName}
            onClickUserNameSetButton={this.onClickUserNameSetButton} />


          <SectionWithLoopRendering />


        </div>
      </Fragment>
    );
  }
}
