/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthenticationNonce = /* GraphQL */ `
  mutation GetAuthenticationNonce($wallet: String!) {
    getAuthenticationNonce(wallet: $wallet) {
      userId
      nonce
    }
  }
`;
export const createDaoWithChannels = /* GraphQL */ `
  mutation CreateDaoWithChannels($input: CreateNewDAO!) {
    createDAOWithChannels(input: $input) {
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
          admins
          keysNumber
          published
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
export const votePost = /* GraphQL */ `
  mutation VotePost($postID: ID!, $userID: ID!, $type: VoteType!) {
    votePost(postID: $postID, userID: $userID, type: $type) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
        socials {
          network
          url
        }
        tasks {
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
export const unvotePost = /* GraphQL */ `
  mutation UnvotePost($postID: ID!, $userID: ID!, $type: VoteType!) {
    unvotePost(postID: $postID, userID: $userID, type: $type) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
        socials {
          network
          url
        }
        tasks {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz($input: CreateKeyQuiz) {
    createQuiz(input: $input) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMeetingCode = /* GraphQL */ `
  mutation CreateMeetingCode($input: CreateKeyMeetingCode) {
    createMeetingCode(input: $input) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTokenHold = /* GraphQL */ `
  mutation CreateTokenHold($input: CreateKeyTokenHold) {
    createTokenHold(input: $input) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSnapshotGovernance = /* GraphQL */ `
  mutation CreateSnapshotGovernance($input: CreateKeySnapshotGovernance) {
    createSnapshotGovernance(input: $input) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSelfVerify = /* GraphQL */ `
  mutation CreateSelfVerify($input: CreateKeySelfVerify) {
    createSelfVerify(input: $input) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const verifyMeetingCode = /* GraphQL */ `
  mutation VerifyMeetingCode($userID: ID!, $keyID: ID!, $meetingCode: String!) {
    verifyMeetingCode(
      userID: $userID
      keyID: $keyID
      meetingCode: $meetingCode
    ) {
      id
      userID
      user {
        id
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
        socials {
          network
          url
        }
        tasks {
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
          admins
          keysNumber
          published
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
        peopleLimit
        task {
          ... on Quiz {
            type
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      socials {
        network
        url
      }
      tasks {
        items {
          id
          userID
          keyID
          completed
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      socials {
        network
        url
      }
      tasks {
        items {
          id
          userID
          keyID
          completed
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      socials {
        network
        url
      }
      tasks {
        items {
          id
          userID
          keyID
          completed
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
export const createDao = /* GraphQL */ `
  mutation CreateDao(
    $input: CreateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    createDAO(input: $input, condition: $condition) {
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
          admins
          keysNumber
          published
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
export const updateDao = /* GraphQL */ `
  mutation UpdateDao(
    $input: UpdateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    updateDAO(input: $input, condition: $condition) {
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
          admins
          keysNumber
          published
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
export const deleteDao = /* GraphQL */ `
  mutation DeleteDao(
    $input: DeleteDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    deleteDAO(input: $input, condition: $condition) {
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
          admins
          keysNumber
          published
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
export const createBounty = /* GraphQL */ `
  mutation CreateBounty(
    $input: CreateBountyInput!
    $condition: ModelBountyConditionInput
  ) {
    createBounty(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const updateBounty = /* GraphQL */ `
  mutation UpdateBounty(
    $input: UpdateBountyInput!
    $condition: ModelBountyConditionInput
  ) {
    updateBounty(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const deleteBounty = /* GraphQL */ `
  mutation DeleteBounty(
    $input: DeleteBountyInput!
    $condition: ModelBountyConditionInput
  ) {
    deleteBounty(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const createTokenBenefit = /* GraphQL */ `
  mutation CreateTokenBenefit(
    $input: CreateTokenBenefitInput!
    $condition: ModelTokenBenefitConditionInput
  ) {
    createTokenBenefit(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const updateTokenBenefit = /* GraphQL */ `
  mutation UpdateTokenBenefit(
    $input: UpdateTokenBenefitInput!
    $condition: ModelTokenBenefitConditionInput
  ) {
    updateTokenBenefit(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const deleteTokenBenefit = /* GraphQL */ `
  mutation DeleteTokenBenefit(
    $input: DeleteTokenBenefitInput!
    $condition: ModelTokenBenefitConditionInput
  ) {
    deleteTokenBenefit(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
        socials {
          network
          url
        }
        tasks {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
        socials {
          network
          url
        }
        tasks {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
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
        socials {
          network
          url
        }
        tasks {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
        socials {
          network
          url
        }
        tasks {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
        socials {
          network
          url
        }
        tasks {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
        socials {
          network
          url
        }
        tasks {
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
export const createGate = /* GraphQL */ `
  mutation CreateGate(
    $input: CreateGateInput!
    $condition: ModelGateConditionInput
  ) {
    createGate(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          peopleLimit
          createdAt
          updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const updateGate = /* GraphQL */ `
  mutation UpdateGate(
    $input: UpdateGateInput!
    $condition: ModelGateConditionInput
  ) {
    updateGate(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          peopleLimit
          createdAt
          updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGate = /* GraphQL */ `
  mutation DeleteGate(
    $input: DeleteGateInput!
    $condition: ModelGateConditionInput
  ) {
    deleteGate(input: $input, condition: $condition) {
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
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          peopleLimit
          createdAt
          updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const createKey = /* GraphQL */ `
  mutation CreateKey(
    $input: CreateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    createKey(input: $input, condition: $condition) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateKey = /* GraphQL */ `
  mutation UpdateKey(
    $input: UpdateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    updateKey(input: $input, condition: $condition) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteKey = /* GraphQL */ `
  mutation DeleteKey(
    $input: DeleteKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    deleteKey(input: $input, condition: $condition) {
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
      peopleLimit
      task {
        ... on Quiz {
          type
          questions {
            question
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTaskStatus = /* GraphQL */ `
  mutation CreateTaskStatus(
    $input: CreateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    createTaskStatus(input: $input, condition: $condition) {
      id
      userID
      user {
        id
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
        socials {
          network
          url
        }
        tasks {
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
          admins
          keysNumber
          published
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
        peopleLimit
        task {
          ... on Quiz {
            type
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
export const updateTaskStatus = /* GraphQL */ `
  mutation UpdateTaskStatus(
    $input: UpdateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    updateTaskStatus(input: $input, condition: $condition) {
      id
      userID
      user {
        id
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
        socials {
          network
          url
        }
        tasks {
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
          admins
          keysNumber
          published
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
        peopleLimit
        task {
          ... on Quiz {
            type
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
export const deleteTaskStatus = /* GraphQL */ `
  mutation DeleteTaskStatus(
    $input: DeleteTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    deleteTaskStatus(input: $input, condition: $condition) {
      id
      userID
      user {
        id
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
        socials {
          network
          url
        }
        tasks {
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
          admins
          keysNumber
          published
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
        peopleLimit
        task {
          ... on Quiz {
            type
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
