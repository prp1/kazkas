import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { AppStore } from './AppStore';
import { Nav } from './components/Nav/Nav';

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
      </div>
    );
  }
}

export default App;
