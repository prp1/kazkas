import { observable, computed, action, useStrict } from 'mobx';

useStrict(true);

export enum AlgorithmType {
    Random,
    Other,
}

export class AppStore {
    @observable private _isLoading: boolean = true;

    @observable
    private _selectedAlgorithm: AlgorithmType = AlgorithmType.Random;

    @computed
    public get isLoading(): boolean {
        return this._isLoading;
    }

    @computed
    public get selectedAlgorithm(): AlgorithmType {
        return this._selectedAlgorithm;
    }

    @action
    public loadSomething(): void {
        setTimeout(
            action(() => {
                this._isLoading = false;
            }),
            1000,
        );
    }
}
