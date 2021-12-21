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
        socials {
          network
          url
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
        socials {
          network
          url
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
        socials {
          network
          url
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
      socials {
        network
        url
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
      socials {
        network
        url
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
      socials {
        network
        url
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
        socials {
          network
          url
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
        socials {
          network
          url
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
        socials {
          network
          url
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
      createdAt
      updatedAt
    }
  }
`;
