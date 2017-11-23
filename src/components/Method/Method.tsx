import * as React from 'react';
import { observer } from 'mobx-react';
import { AppStore } from '../../AppStore';

interface MethodProps {
    appStore: AppStore;
}

@observer
export class Method extends React.Component<MethodProps, object> {
    public render() {
        return <div>Algoritme: {this.props.appStore.selectedAlgorithm}</div>;
    }
}
