import { observable, computed, action, useStrict } from 'mobx';

useStrict(true);

export class AppStore {
    @computed
    public get isLoading(): boolean {
        return this._isLoading;
    }

    @observable private _isLoading: boolean = true;

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
