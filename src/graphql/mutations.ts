/* tslint:disable */
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const createContractInteraction = /* GraphQL */ `
  mutation CreateContractInteraction($input: CreateKeyContractInteraction) {
    createContractInteraction(input: $input) {
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
export const createManualTask = /* GraphQL */ `
  mutation CreateManualTask($input: CreateKeyManualTask) {
    createManualTask(input: $input) {
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
export const changeKey = /* GraphQL */ `
  mutation ChangeKey($input: ChangeKeyInput) {
    changeKey(input: $input) {
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
export const verifyMeetingCode = /* GraphQL */ `
  mutation VerifyMeetingCode($userID: ID!, $keyID: ID!, $meetingCode: String!) {
    verifyMeetingCode(
      userID: $userID
      keyID: $keyID
      meetingCode: $meetingCode
    ) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const verifyHoldAToken = /* GraphQL */ `
  mutation VerifyHoldAToken($userID: ID!, $keyID: ID!) {
    verifyHoldAToken(userID: $userID, keyID: $keyID) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const verifyContractInteraction = /* GraphQL */ `
  mutation VerifyContractInteraction($userID: ID!, $keyID: ID!) {
    verifyContractInteraction(userID: $userID, keyID: $keyID) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const verifySnapshot = /* GraphQL */ `
  mutation VerifySnapshot($userID: ID!, $keyID: ID!) {
    verifySnapshot(userID: $userID, keyID: $keyID) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const verifySelfVerify = /* GraphQL */ `
  mutation VerifySelfVerify($userID: ID!, $keyID: ID!) {
    verifySelfVerify(userID: $userID, keyID: $keyID) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const verifyQuiz = /* GraphQL */ `
  mutation VerifyQuiz(
    $userID: ID!
    $keyID: ID!
    $questions: [QuestionLambdaInput]!
  ) {
    verifyQuiz(userID: $userID, keyID: $keyID, questions: $questions) {
      ... on TaskAndGateResponse {
        id
        userID
        gateID
        keyID
        completed
        completedGate
        createdAt
        updatedAt
      }
      ... on Error {
        keyID
        error
        msg
      }
    }
  }
`;
export const streamToCeramic = /* GraphQL */ `
  mutation StreamToCeramic($data: AWSJSON!, $node: AWSURL) {
    streamToCeramic(data: $data, node: $node) {
      ... on StreamCeramic {
        streamed
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
export const generateSignature = /* GraphQL */ `
  mutation GenerateSignature($message: String!) {
    generateSignature(message: $message) {
      ... on Signature {
        message
        signature
      }
      ... on SignatureError {
        error
        msg
      }
    }
  }
`;
export const generatedNonceSignature = /* GraphQL */ `
  mutation GeneratedNonceSignature {
    generatedNonceSignature {
      ... on Signature {
        message
        signature
      }
      ... on SignatureError {
        error
        msg
      }
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          token
          tokenAmount
          keys
          unlimited
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
          token
          tokenAmount
          keys
          unlimited
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
          token
          tokenAmount
          keys
          unlimited
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
export const createManualTaskSubmission = /* GraphQL */ `
  mutation CreateManualTaskSubmission(
    $input: CreateManualTaskSubmissionInput!
    $condition: ModelManualTaskSubmissionConditionInput
  ) {
    createManualTaskSubmission(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const updateManualTaskSubmission = /* GraphQL */ `
  mutation UpdateManualTaskSubmission(
    $input: UpdateManualTaskSubmissionInput!
    $condition: ModelManualTaskSubmissionConditionInput
  ) {
    updateManualTaskSubmission(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const deleteManualTaskSubmission = /* GraphQL */ `
  mutation DeleteManualTaskSubmission(
    $input: DeleteManualTaskSubmissionInput!
    $condition: ModelManualTaskSubmissionConditionInput
  ) {
    deleteManualTaskSubmission(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const createGateStatus = /* GraphQL */ `
  mutation CreateGateStatus(
    $input: CreateGateStatusInput!
    $condition: ModelGateStatusConditionInput
  ) {
    createGateStatus(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const updateGateStatus = /* GraphQL */ `
  mutation UpdateGateStatus(
    $input: UpdateGateStatusInput!
    $condition: ModelGateStatusConditionInput
  ) {
    updateGateStatus(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const deleteGateStatus = /* GraphQL */ `
  mutation DeleteGateStatus(
    $input: DeleteGateStatusInput!
    $condition: ModelGateStatusConditionInput
  ) {
    deleteGateStatus(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
      completed
      createdAt
      updatedAt
    }
  }
`;
export const createCredential = /* GraphQL */ `
  mutation CreateCredential(
    $input: CreateCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    createCredential(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const updateCredential = /* GraphQL */ `
  mutation UpdateCredential(
    $input: UpdateCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    updateCredential(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
export const deleteCredential = /* GraphQL */ `
  mutation DeleteCredential(
    $input: DeleteCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    deleteCredential(input: $input, condition: $condition) {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
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
