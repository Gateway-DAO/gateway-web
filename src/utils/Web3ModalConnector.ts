import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import type { default as Web3Modal, ICoreOptions } from 'web3modal';

export class Web3ModalConnector extends AbstractConnector {
    public options: Partial<ICoreOptions>;
    public provider?: any;
    public web3Modal?: Web3Modal;

    constructor(options: Partial<ICoreOptions>) {
        // super({supportedChainIds: options.network ? });
        super();

        this.options = options;

        this.handleChainChanged = this.handleChainChanged.bind(this);
        this.handleAccountsChanged = this.handleAccountsChanged.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
    }

    private handleChainChanged(chainId: number | string): void {
        this.emitUpdate({ chainId });
    }

    private handleAccountsChanged(accounts: string[]): void {
        this.emitUpdate({ account: accounts[0] });
    }

    private handleDisconnect(): void {
        this.emitDeactivate();
    }

    public async load(): Promise<void> {
        if (!this.web3Modal) {
            const Web3Modal = await import('web3modal').then((m) => m.default);
            this.web3Modal = new Web3Modal(this.options);
        }
    }

    public async activate(): Promise<ConnectorUpdate> {
        await this.load();

        this.web3Modal.on('chainChanged', this.handleChainChanged);
        this.web3Modal.on('accountsChanged', this.handleAccountsChanged);
        this.web3Modal.on('disconnect', this.handleDisconnect);

        this.provider = await this.web3Modal.connect();
        const account =
            this.provider.selectedAddress ?? this.provider.accounts[0];

        return { provider: this.provider, account };
    }

    public async getProvider(): Promise<any> {
        return this.provider;
    }

    public async getChainId(): Promise<number | string> {
        return this.provider.chainId;
    }

    public async getAccount(): Promise<null | string> {
        return this.provider.accounts[0];
    }

    public deactivate() {
        this.provider?.removeListener('disconnect', this.handleDisconnect);
        this.provider?.removeListener('chainChanged', this.handleChainChanged);
        this.provider?.removeListener(
            'accountsChanged',
            this.handleAccountsChanged
        );

        this.web3Modal.clearCachedProvider();

        // use disconnect function if exists
        this.provider?.disconnect?.();

        // use close function if exists
        this.provider?.close?.();
    }
}
