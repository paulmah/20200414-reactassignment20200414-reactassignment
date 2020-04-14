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

  public onClickButton = () => {
    this.setState({ isButtonPressed: true })
  }

  public onClickButtonToGoBack = () => {
    this.setState({ isButtonPressed: false })
  }

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
