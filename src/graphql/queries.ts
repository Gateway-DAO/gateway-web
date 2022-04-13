/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchFromCeramic = /* GraphQL */ `
    query FetchFromCeramic($streamID: String!, $node: AWSURL) {
        fetchFromCeramic(streamID: $streamID, node: $node) {
            ... on FetchCeramic {
                streamID
                data
            }
            ... on CeramicError {
                error
                msg
            }
        }
    }
`;
export const getUser = /* GraphQL */ `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            timezone {
                shouldTrack
                tz
            }
            wallet
            username
            name
            bio
            daos_ids
            daos {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            init
            nonce
            pfp
            about
            skills
            attitudes
            languages
            knowledges
            socials {
                network
                url
            }
            gates {
                items {
                    id
                    userID
                    gateID
                    keysDone
                    status
                    createdAt
                    updatedAt
                }
                nextToken
            }
            tasks {
                items {
                    id
                    userID
                    gateID
                    keyID
                    completed
                    createdAt
                    updatedAt
                }
                nextToken
            }
            credentials {
                items {
                    id
                    issuerID
                    targetID
                    organizationID
                    name
                    description
                    image
                    pow
                    skills
                    knowledges
                    attitudes
                    ceramicStream
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`;
export const listUsers = /* GraphQL */ `
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getDao = /* GraphQL */ `
    query GetDao($id: ID!) {
        getDAO(id: $id) {
            id
            dao
            name
            faq {
                question
                answer
            }
            accomplishments
            snapshotID
            backgroundURL
            youtubeURL
            logoURL
            bounties {
                items {
                    id
                    daoID
                    headline
                    description
                    level
                    categories
                    reward
                    directions
                    links
                    endDate
                    postDate
                    createdAt
                    updatedAt
                }
                nextToken
            }
            categories
            tags
            description
            howToJoin
            missionAndVision
            whatDoWeDo
            tokenBenefits {
                items {
                    id
                    daoID
                    amount
                    description
                    title
                    token
                    createdAt
                    updatedAt
                }
                nextToken
            }
            upcomingHangouts
            tokenAddress
            whitelistedAddresses
            socials {
                network
                url
            }
            chains
            channels {
                items {
                    id
                    name
                    daoID
                    createdAt
                    updatedAt
                }
                nextToken
            }
            gates {
                items {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                nextToken
            }
            nftContracts {
                reward
                contributor
            }
            createdAt
            updatedAt
        }
    }
`;
export const listDaos = /* GraphQL */ `
    query ListDAOs(
        $filter: ModelDAOFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDAOs(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getBounty = /* GraphQL */ `
    query GetBounty($id: ID!) {
        getBounty(id: $id) {
            id
            daoID
            dao {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            headline
            description
            level
            categories
            reward
            directions
            links
            endDate
            postDate
            createdAt
            updatedAt
        }
    }
`;
export const listBountys = /* GraphQL */ `
    query ListBountys(
        $filter: ModelBountyFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listBountys(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                headline
                description
                level
                categories
                reward
                directions
                links
                endDate
                postDate
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTokenBenefit = /* GraphQL */ `
    query GetTokenBenefit($id: ID!) {
        getTokenBenefit(id: $id) {
            id
            daoID
            dao {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            amount
            description
            title
            token
            createdAt
            updatedAt
        }
    }
`;
export const listTokenBenefits = /* GraphQL */ `
    query ListTokenBenefits(
        $filter: ModelTokenBenefitFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTokenBenefits(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                amount
                description
                title
                token
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getChannel = /* GraphQL */ `
    query GetChannel($id: ID!) {
        getChannel(id: $id) {
            id
            name
            daoID
            dao {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            posts {
                items {
                    id
                    daoID
                    channelID
                    userID
                    content
                    upvotes
                    downvotes
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`;
export const listChannels = /* GraphQL */ `
    query ListChannels(
        $filter: ModelChannelFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                name
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                posts {
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
        getPost(id: $id) {
            id
            daoID
            dao {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            channelID
            channel {
                id
                name
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                posts {
                    nextToken
                }
                createdAt
                updatedAt
            }
            userID
            user {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            content
            comments {
                items {
                    id
                    postID
                    userID
                    content
                    upvotes
                    downvotes
                    createdAt
                    updatedAt
                }
                nextToken
            }
            upvotes
            downvotes
            createdAt
            updatedAt
        }
    }
`;
export const listPosts = /* GraphQL */ `
    query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                channelID
                channel {
                    id
                    name
                    daoID
                    createdAt
                    updatedAt
                }
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                content
                comments {
                    nextToken
                }
                upvotes
                downvotes
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getComment = /* GraphQL */ `
    query GetComment($id: ID!) {
        getComment(id: $id) {
            id
            postID
            userID
            user {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            content
            upvotes
            downvotes
            createdAt
            updatedAt
        }
    }
`;
export const listComments = /* GraphQL */ `
    query ListComments(
        $filter: ModelCommentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                postID
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                content
                upvotes
                downvotes
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGate = /* GraphQL */ `
    query GetGate($id: ID!) {
        getGate(id: $id) {
            id
            daoID
            dao {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            name
            description
            categories
            skills
            knowledge
            attitudes
            admins
            keysNumber
            keys {
                items {
                    id
                    gateID
                    information {
                        title
                        description
                    }
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                    task {
                        ... on Quiz {
                            type
                            title
                            description
                            questions {
                                question
                                options {
                                    answer
                                }
                                nrOfCorrectAnswers
                            }
                            passedAt
                        }
                        ... on MeetingCode {
                            type
                            code
                            caseSensitive
                        }
                        ... on TokenHold {
                            type
                            chainID
                            address
                            amount
                        }
                        ... on SelfVerify {
                            type
                        }
                        ... on SnapshotGovernance {
                            type
                            snapshotType
                            spaceID
                            proposal
                        }
                        ... on ContractInteraction {
                            type
                            chainID
                            address
                            methodName
                        }
                        ... on ManualTask {
                            type
                            information {
                                title
                                description
                            }
                        }
                    }
                }
                nextToken
            }
            published
            badge {
                nftURL
                ipfsURL
                name
            }
            preRequisites {
                completedGates
            }
            retroactiveEarners
            links {
                name
                link
            }
            holders
            nftType
            createdAt
            updatedAt
        }
    }
`;
export const listGates = /* GraphQL */ `
    query ListGates(
        $filter: ModelGateFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGates(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getKey = /* GraphQL */ `
    query GetKey($id: ID!) {
        getKey(id: $id) {
            id
            gateID
            gate {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            information {
                title
                description
            }
            token
            tokenAmount
            keys
            unlimited
            peopleLimit
            task {
                ... on Quiz {
                    type
                    title
                    description
                    questions {
                        question
                        options {
                            answer
                        }
                        nrOfCorrectAnswers
                    }
                    passedAt
                }
                ... on MeetingCode {
                    type
                    code
                    caseSensitive
                }
                ... on TokenHold {
                    type
                    chainID
                    address
                    amount
                }
                ... on SelfVerify {
                    type
                }
                ... on SnapshotGovernance {
                    type
                    snapshotType
                    spaceID
                    proposal
                }
                ... on ContractInteraction {
                    type
                    chainID
                    address
                    methodName
                }
                ... on ManualTask {
                    type
                    information {
                        title
                        description
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
`;
export const listKeys = /* GraphQL */ `
    query ListKeys(
        $filter: ModelKeyFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                information {
                    title
                    description
                }
                token
                tokenAmount
                keys
                unlimited
                peopleLimit
                task {
                    ... on Quiz {
                        type
                        title
                        description
                        questions {
                            question
                            options {
                                answer
                            }
                            nrOfCorrectAnswers
                        }
                        passedAt
                    }
                    ... on MeetingCode {
                        type
                        code
                        caseSensitive
                    }
                    ... on TokenHold {
                        type
                        chainID
                        address
                        amount
                    }
                    ... on SelfVerify {
                        type
                    }
                    ... on SnapshotGovernance {
                        type
                        snapshotType
                        spaceID
                        proposal
                    }
                    ... on ContractInteraction {
                        type
                        chainID
                        address
                        methodName
                    }
                    ... on ManualTask {
                        type
                        information {
                            title
                            description
                        }
                    }
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getManualTaskSubmission = /* GraphQL */ `
    query GetManualTaskSubmission($id: ID!) {
        getManualTaskSubmission(id: $id) {
            id
            userID
            user {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            keyID
            key {
                id
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                information {
                    title
                    description
                }
                token
                tokenAmount
                keys
                unlimited
                peopleLimit
                task {
                    ... on Quiz {
                        type
                        title
                        description
                        passedAt
                    }
                    ... on MeetingCode {
                        type
                        code
                        caseSensitive
                    }
                    ... on TokenHold {
                        type
                        chainID
                        address
                        amount
                    }
                    ... on SelfVerify {
                        type
                    }
                    ... on SnapshotGovernance {
                        type
                        snapshotType
                        spaceID
                        proposal
                    }
                    ... on ContractInteraction {
                        type
                        chainID
                        address
                        methodName
                    }
                    ... on ManualTask {
                        type
                    }
                }
                createdAt
                updatedAt
            }
            submissionURL
            discordID
            wallet
            comment
            createdAt
            updatedAt
        }
    }
`;
export const listManualTaskSubmissions = /* GraphQL */ `
    query ListManualTaskSubmissions(
        $filter: ModelManualTaskSubmissionFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listManualTaskSubmissions(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                submissionURL
                discordID
                wallet
                comment
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGateStatus = /* GraphQL */ `
    query GetGateStatus($id: ID!) {
        getGateStatus(id: $id) {
            id
            userID
            user {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            gateID
            gate {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            reward {
                rewardCode
                retrieved
            }
            tasks {
                items {
                    id
                    userID
                    gateID
                    keyID
                    completed
                    createdAt
                    updatedAt
                }
                nextToken
            }
            keysDone
            status
            createdAt
            updatedAt
        }
    }
`;
export const listGateStatuss = /* GraphQL */ `
    query ListGateStatuss(
        $filter: ModelGateStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGateStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                reward {
                    rewardCode
                    retrieved
                }
                tasks {
                    nextToken
                }
                keysDone
                status
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTaskStatus = /* GraphQL */ `
    query GetTaskStatus($id: ID!) {
        getTaskStatus(id: $id) {
            id
            userID
            user {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            gateID
            gate {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            keyID
            key {
                id
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                information {
                    title
                    description
                }
                token
                tokenAmount
                keys
                unlimited
                peopleLimit
                task {
                    ... on Quiz {
                        type
                        title
                        description
                        questions {
                            question
                            options {
                                answer
                            }
                            nrOfCorrectAnswers
                        }
                        passedAt
                    }
                    ... on MeetingCode {
                        type
                        code
                        caseSensitive
                    }
                    ... on TokenHold {
                        type
                        chainID
                        address
                        amount
                    }
                    ... on SelfVerify {
                        type
                    }
                    ... on SnapshotGovernance {
                        type
                        snapshotType
                        spaceID
                        proposal
                    }
                    ... on ContractInteraction {
                        type
                        chainID
                        address
                        methodName
                    }
                    ... on ManualTask {
                        type
                        information {
                            title
                            description
                        }
                    }
                }
                createdAt
                updatedAt
            }
            completed
            createdAt
            updatedAt
        }
    }
`;
export const listTaskStatuss = /* GraphQL */ `
    query ListTaskStatuss(
        $filter: ModelTaskStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTaskStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                completed
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getCredential = /* GraphQL */ `
    query GetCredential($id: ID!) {
        getCredential(id: $id) {
            id
            issuerID
            issuer {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            targetID
            target {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            gate {
                name
                type
            }
            organizationID
            organization {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            name
            description
            image
            pow
            skills
            knowledges
            attitudes
            ceramicStream
            createdAt
            updatedAt
        }
    }
`;
export const listCredentials = /* GraphQL */ `
    query ListCredentials(
        $filter: ModelCredentialFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listCredentials(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                issuerID
                issuer {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                targetID
                target {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gate {
                    name
                    type
                }
                organizationID
                organization {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                image
                pow
                skills
                knowledges
                attitudes
                ceramicStream
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getUserByAddress = /* GraphQL */ `
    query GetUserByAddress(
        $wallet: String
        $sortDirection: ModelSortDirection
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getUserByAddress(
            wallet: $wallet
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getUserByUsername = /* GraphQL */ `
    query GetUserByUsername(
        $username: String
        $sortDirection: ModelSortDirection
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getUserByUsername(
            username: $username
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getDaoById = /* GraphQL */ `
    query GetDaoById(
        $dao: String
        $sortDirection: ModelSortDirection
        $filter: ModelDAOFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getDAOById(
            dao: $dao
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getDaoByName = /* GraphQL */ `
    query GetDaoByName(
        $name: String
        $sortDirection: ModelSortDirection
        $filter: ModelDAOFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getDAOByName(
            name: $name
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getBountyByDaoid = /* GraphQL */ `
    query GetBountyByDaoid(
        $daoID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelBountyFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getBountyByDAOID(
            daoID: $daoID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                headline
                description
                level
                categories
                reward
                directions
                links
                endDate
                postDate
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTokenBenefitByDaoid = /* GraphQL */ `
    query GetTokenBenefitByDaoid(
        $daoID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelTokenBenefitFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getTokenBenefitByDAOID(
            daoID: $daoID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                amount
                description
                title
                token
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getChannelByDaoid = /* GraphQL */ `
    query GetChannelByDaoid(
        $daoID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelChannelFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getChannelByDAOID(
            daoID: $daoID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                name
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                posts {
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getPostsByChannelId = /* GraphQL */ `
    query GetPostsByChannelId(
        $channelID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getPostsByChannelID(
            channelID: $channelID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                channelID
                channel {
                    id
                    name
                    daoID
                    createdAt
                    updatedAt
                }
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                content
                comments {
                    nextToken
                }
                upvotes
                downvotes
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getCommentsByPostId = /* GraphQL */ `
    query GetCommentsByPostId(
        $postID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelCommentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getCommentsByPostID(
            postID: $postID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                postID
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                content
                upvotes
                downvotes
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGatesByDaoid = /* GraphQL */ `
    query GetGatesByDaoid(
        $daoID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelGateFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getGatesByDAOID(
            daoID: $daoID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getKeysByGateId = /* GraphQL */ `
    query GetKeysByGateId(
        $gateID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelKeyFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getKeysByGateID(
            gateID: $gateID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                information {
                    title
                    description
                }
                token
                tokenAmount
                keys
                unlimited
                peopleLimit
                task {
                    ... on Quiz {
                        type
                        title
                        description
                        questions {
                            question
                            options {
                                answer
                            }
                            nrOfCorrectAnswers
                        }
                        passedAt
                    }
                    ... on MeetingCode {
                        type
                        code
                        caseSensitive
                    }
                    ... on TokenHold {
                        type
                        chainID
                        address
                        amount
                    }
                    ... on SelfVerify {
                        type
                    }
                    ... on SnapshotGovernance {
                        type
                        snapshotType
                        spaceID
                        proposal
                    }
                    ... on ContractInteraction {
                        type
                        chainID
                        address
                        methodName
                    }
                    ... on ManualTask {
                        type
                        information {
                            title
                            description
                        }
                    }
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getManualTaskSubmissionByUserId = /* GraphQL */ `
    query GetManualTaskSubmissionByUserId(
        $userID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelManualTaskSubmissionFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getManualTaskSubmissionByUserID(
            userID: $userID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                submissionURL
                discordID
                wallet
                comment
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getManualTaskSubmissionByKeyId = /* GraphQL */ `
    query GetManualTaskSubmissionByKeyId(
        $keyID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelManualTaskSubmissionFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getManualTaskSubmissionByKeyID(
            keyID: $keyID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                submissionURL
                discordID
                wallet
                comment
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGateStatusByUserId = /* GraphQL */ `
    query GetGateStatusByUserId(
        $userID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelGateStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getGateStatusByUserID(
            userID: $userID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                    badge {
                        ipfsURL
                        name
                    }
                }
                reward {
                    rewardCode
                    retrieved
                }
                tasks {
                    nextToken
                }
                keysDone
                status
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGateStatusByGateId = /* GraphQL */ `
    query GetGateStatusByGateId(
        $gateID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelGateStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getGateStatusByGateID(
            gateID: $gateID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                reward {
                    rewardCode
                    retrieved
                }
                tasks {
                    nextToken
                }
                keysDone
                status
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTaskStatusByUserId = /* GraphQL */ `
    query GetTaskStatusByUserId(
        $userID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelTaskStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getTaskStatusByUserID(
            userID: $userID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                completed
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTaskStatusByGateId = /* GraphQL */ `
    query GetTaskStatusByGateId(
        $gateID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelTaskStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getTaskStatusByGateID(
            gateID: $gateID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                completed
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTaskStatusByKeyId = /* GraphQL */ `
    query GetTaskStatusByKeyId(
        $keyID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelTaskStatusFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getTaskStatusByKeyID(
            keyID: $keyID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gateID
                gate {
                    id
                    daoID
                    name
                    description
                    categories
                    skills
                    knowledge
                    attitudes
                    admins
                    keysNumber
                    published
                    retroactiveEarners
                    holders
                    nftType
                    createdAt
                    updatedAt
                }
                keyID
                key {
                    id
                    gateID
                    token
                    tokenAmount
                    keys
                    unlimited
                    peopleLimit
                    createdAt
                    updatedAt
                }
                completed
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getCredentialByIssuerId = /* GraphQL */ `
    query GetCredentialByIssuerId(
        $issuerID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelCredentialFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getCredentialByIssuerID(
            issuerID: $issuerID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                issuerID
                issuer {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                targetID
                target {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gate {
                    name
                    type
                }
                organizationID
                organization {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                image
                pow
                skills
                knowledges
                attitudes
                ceramicStream
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getCredentialByTargetId = /* GraphQL */ `
    query GetCredentialByTargetId(
        $targetID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelCredentialFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getCredentialByTargetID(
            targetID: $targetID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                issuerID
                issuer {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                targetID
                target {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gate {
                    name
                    type
                }
                organizationID
                organization {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                image
                pow
                skills
                knowledges
                attitudes
                ceramicStream
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getCredentialByOrganizationId = /* GraphQL */ `
    query GetCredentialByOrganizationId(
        $organizationID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelCredentialFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getCredentialByOrganizationID(
            organizationID: $organizationID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                issuerID
                issuer {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                targetID
                target {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gate {
                    name
                    type
                }
                organizationID
                organization {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                image
                pow
                skills
                knowledges
                attitudes
                ceramicStream
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const searchUsers = /* GraphQL */ `
    query SearchUsers(
        $filter: SearchableUserFilterInput
        $sort: SearchableUserSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchUsers(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
                timezone {
                    shouldTrack
                    tz
                }
                wallet
                username
                name
                bio
                daos_ids
                daos {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                init
                nonce
                pfp
                about
                skills
                attitudes
                languages
                knowledges
                socials {
                    network
                    url
                }
                gates {
                    items {
                        id
                        userID
                        gateID
                        tasks {
                            items {
                                id
                                userID
                                gateID
                                keyID
                                completed
                                createdAt
                                updatedAt
                            }
                        }
                        reward {
                            rewardCode
                            retrieved
                        }
                        keysDone
                        status
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                tasks {
                    items {
                        id
                        userID
                        gateID
                        keyID
                        completed
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                credentials {
                    items {
                        id
                        issuerID
                        issuer {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        targetID
                        target {
                            id
                            wallet
                            username
                            name
                            bio
                            daos_ids
                            init
                            nonce
                            pfp
                            about
                            skills
                            attitudes
                            languages
                            knowledges
                            createdAt
                            updatedAt
                        }
                        gate {
                            name
                        }
                        organizationID
                        organization {
                            id
                            dao
                            name
                            accomplishments
                            snapshotID
                            backgroundURL
                            youtubeURL
                            logoURL
                            categories
                            tags
                            description
                            howToJoin
                            missionAndVision
                            whatDoWeDo
                            upcomingHangouts
                            tokenAddress
                            whitelistedAddresses
                            chains
                            createdAt
                            updatedAt
                        }
                        name
                        description
                        image
                        pow
                        skills
                        knowledges
                        attitudes
                        ceramicStream
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
            total
        }
    }
`;
export const searchDaos = /* GraphQL */ `
    query SearchDAOs(
        $filter: SearchableDAOFilterInput
        $sort: SearchableDAOSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchDAOs(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
                dao
                name
                faq {
                    question
                    answer
                }
                accomplishments
                snapshotID
                backgroundURL
                youtubeURL
                logoURL
                bounties {
                    nextToken
                    items {
                        id
                        daoID
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                        createdAt
                        updatedAt
                    }
                }
                categories
                tags
                description
                howToJoin
                missionAndVision
                whatDoWeDo
                tokenBenefits {
                    items {
                        id
                        daoID
                        amount
                        description
                        title
                        token
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                upcomingHangouts
                tokenAddress
                whitelistedAddresses
                socials {
                    network
                    url
                }
                chains
                channels {
                    nextToken
                }
                gates {
                    items {
                        id
                        daoID
                        name
                        description
                        categories
                        skills
                        knowledge
                        attitudes
                        admins
                        keysNumber
                        published
                        retroactiveEarners
                        holders
                        nftType
                        badge {
                            nftURL
                            ipfsURL
                            name
                        }
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                nftContracts {
                    reward
                    contributor
                }
                createdAt
                updatedAt
            }
            nextToken
            total
        }
    }
`;

export const getNumber = /* GraphQL */ `
    query GetDAONumber(
        $filter: SearchableDAOFilterInput
        $sort: SearchableDAOSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchDAOs(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
            }
        }
    }
`;

export const getUserNumber = /* GraphQL */ `
    query GetUserNumber(
        $filter: SearchableDAOFilterInput
        $sort: SearchableDAOSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchUsers(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
            }
        }
    }
`;

export const searchPosts = /* GraphQL */ `
    query SearchPosts(
        $filter: SearchablePostFilterInput
        $sort: SearchablePostSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchPosts(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                channelID
                channel {
                    id
                    name
                    daoID
                    createdAt
                    updatedAt
                }
                userID
                user {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                content
                comments {
                    nextToken
                }
                upvotes
                downvotes
                createdAt
                updatedAt
            }
            nextToken
            total
        }
    }
`;
export const searchGates = /* GraphQL */ `
    query SearchGates(
        $filter: SearchableGateFilterInput
        $sort: SearchableGateSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchGates(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
                daoID
                dao {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                categories
                skills
                knowledge
                attitudes
                admins
                keysNumber
                keys {
                    nextToken
                }
                published
                badge {
                    nftURL
                    ipfsURL
                    name
                }
                preRequisites {
                    completedGates
                }
                retroactiveEarners
                links {
                    name
                    link
                }
                holders
                nftType
                createdAt
                updatedAt
            }
            nextToken
            total
        }
    }
`;
export const searchCredentials = /* GraphQL */ `
    query SearchCredentials(
        $filter: SearchableCredentialFilterInput
        $sort: SearchableCredentialSortInput
        $limit: Int
        $nextToken: String
        $from: Int
    ) {
        searchCredentials(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
        ) {
            items {
                id
                issuerID
                issuer {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                targetID
                target {
                    id
                    wallet
                    username
                    name
                    bio
                    daos_ids
                    init
                    nonce
                    pfp
                    about
                    skills
                    attitudes
                    languages
                    knowledges
                    createdAt
                    updatedAt
                }
                gate {
                    name
                    type
                }
                organizationID
                organization {
                    id
                    dao
                    name
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    chains
                    createdAt
                    updatedAt
                }
                name
                description
                image
                pow
                skills
                knowledges
                attitudes
                ceramicStream
                createdAt
                updatedAt
            }
            nextToken
            total
        }
    }
`;
