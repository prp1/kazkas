import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { AppStore } from './AppStore';
import { Nav } from './components/Nav/Nav';
import { Button } from './components/Button/Button';

const appStore = new AppStore();

@observer
class App extends React.Component {

    public componentDidMount() {
        appStore.loadSomething();
    }

  public render() {
    return (
      <div className="App">
          <Nav />
          {appStore.isLoading ? 'Loading...' : 'Hello'}
          <br/>
          <br/>
          <br/>
          <Button label="Vaelg datakilde" clickHandler={this.onBtnClick} />
      </div>
    );
  }

  private onBtnClick = (): void => {
      console.log('btn clicked');
  }
}

export default App;
