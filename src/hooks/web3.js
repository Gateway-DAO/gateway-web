import { useWeb3React } from "@web3-react/core"
import { CONNECTORS } from "../utils/web3";

export const useActiveWeb3 = () => {
    const web3 = useWeb3React();

    if (!web3.active) {
        // If not active, make sure there's an injected Web3

        if (typeof window.web3 !== 'undefined') {
            web3.activate(CONNECTORS.Injected)
        }
    }

    return web3
}