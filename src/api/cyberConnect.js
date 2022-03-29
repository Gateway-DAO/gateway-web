

export const fetchFollowersAndFollowings = async (walletAddress) => {
    const userQuery = `
			query FullIdentityQuery {
                identity(
                  address: "${walletAddress}"
                  network: ETH
                ) {
                  followers(namespace: "GatewayDAO", first: 50) {
                    list {
                      address
                    }
                  }
                  followings(namespace: "GatewayDAO", first: 50) {
                    list {
                      address
                    }
                  }
                }
              }
		`;

    const res = await fetch("https://api.cybertino.io/connect/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "query": userQuery })
    });
    const json = await res.json();
    return json;
};