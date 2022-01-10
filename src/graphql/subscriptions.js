/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDao = /* GraphQL */ `
  subscription OnCreateDao {
    onCreateDAO {
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
          keys
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
export const onUpdateDao = /* GraphQL */ `
  subscription OnUpdateDao {
    onUpdateDAO {
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
          keys
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
export const onDeleteDao = /* GraphQL */ `
  subscription OnDeleteDao {
    onDeleteDAO {
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
          keys
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
export const onCreateBounty = /* GraphQL */ `
  subscription OnCreateBounty {
    onCreateBounty {
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
export const onUpdateBounty = /* GraphQL */ `
  subscription OnUpdateBounty {
    onUpdateBounty {
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
export const onDeleteBounty = /* GraphQL */ `
  subscription OnDeleteBounty {
    onDeleteBounty {
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
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateGate = /* GraphQL */ `
  subscription OnCreateGate {
    onCreateGate {
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
      keys
      tasks {
        items {
          id
          gateID
          title
          description
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
export const onUpdateGate = /* GraphQL */ `
  subscription OnUpdateGate {
    onUpdateGate {
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
      keys
      tasks {
        items {
          id
          gateID
          title
          description
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
export const onDeleteGate = /* GraphQL */ `
  subscription OnDeleteGate {
    onDeleteGate {
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
      keys
      tasks {
        items {
          id
          gateID
          title
          description
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      gateID
      title
      description
      triggers {
        type
        completed
        noOfPeople
      }
      completed
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
        keys
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      gateID
      title
      description
      triggers {
        type
        completed
        noOfPeople
      }
      completed
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
        keys
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      gateID
      title
      description
      triggers {
        type
        completed
        noOfPeople
      }
      completed
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
        keys
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
