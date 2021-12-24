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
export const votePost = /* GraphQL */ `
  mutation VotePost($postID: ID!, $userID: ID!, $type: VoteType!) {
    votePost(postID: $postID, userID: $userID, type: $type) {
      id
      daoID
      dao {
        id
        dao
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          youtubeURL
          chains
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          whitelistedAddresses
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
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          youtubeURL
          chains
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          whitelistedAddresses
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
  mutation UnvotePost($postID: ID!, $userIndex: Int!, $type: VoteType!) {
    unvotePost(postID: $postID, userIndex: $userIndex, type: $type) {
      id
      daoID
      dao {
        id
        dao
        name
        youtubeURL
        chains
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          youtubeURL
          chains
          missionAndVision
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          whitelistedAddresses
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
          backgroundURL
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
          createdAt
          youtubeURL
          chains
          updatedAt
        }
        init
        nonce
        pfp
        socials {
          network
          url
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
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
        createdAt
        updatedAt
        youtubeURL
        chains
      }
      init
      nonce
      pfp
      socials {
        network
        url
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
        youtubeURL
        chains
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
        youtubeURL
        chains
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
      youtubeURL
      chains
      name
      faq {
        question
        answer
      }
      accomplishments
      backgroundURL
      logoURL
      bounties {
        headline
        description
        level
        categories
        reward
        directions
        links
        endDate
        postDate
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        amount
        description
        title
        token
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
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
      backgroundURL
      logoURL
      bounties {
        headline
        description
        level
        categories
        reward
        directions
        links
        endDate
        postDate
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        amount
        description
        title
        token
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
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
      createdAt
      updatedAt
      youtubeURL
      chains
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
      backgroundURL
      logoURL
      bounties {
        headline
        description
        level
        categories
        reward
        directions
        links
        endDate
        postDate
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        amount
        description
        title
        token
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
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
      createdAt
      updatedAt
      youtubeURL
      chains
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
        youtubeURL
        chains
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
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
          youtubeURL
          chains
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          accomplishments
          backgroundURL
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
          youtubeURL
          chains
          name
          accomplishments
          backgroundURL
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
