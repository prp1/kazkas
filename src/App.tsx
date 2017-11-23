import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { AppStore } from './AppStore';
import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { Method } from './components/Method/Method';

const appStore = new AppStore();

@observer
class App extends React.Component {
    public componentDidMount() {
        appStore.loadSomething();
    }

    public render() {
        return (
            <div className="App">
                <Header />
                {appStore.isLoading ? 'Loading...' : 'Hello'}
                <br />
                <br />
                <Method appStore={appStore} />
                <br />
                <br />
                <Button
                    label="Vaelg datakilde"
                    clickHandler={this.onBtnClick}
                />
            </div>
        );
    }

    private onBtnClick = (): void => {
        console.log('btn clicked');
    };
}

export default App;
