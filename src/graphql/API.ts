/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Authentication = {
    __typename: 'Authentication';
    userId?: string | null;
    nonce?: string | null;
};

export type CreateNewDAO = {
    id?: string | null;
    dao: string;
    name: string;
    snapshotID?: string | null;
    backgroundURL: string;
    youtubeURL?: string | null;
    logoURL: string;
    categories: Array<string | null>;
    tags?: Array<string | null> | null;
    description: string;
    tokenAddress?: string | null;
    whitelistedAddresses?: Array<string> | null;
    socials?: Array<SocialInput | null> | null;
    chains?: Array<string | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type SocialInput = {
    network: string;
    url: string;
};

export type DAO = {
    __typename: 'DAO';
    id?: string;
    dao?: string;
    name?: string;
    faq?: Array<FAQ | null> | null;
    accomplishments?: string | null;
    snapshotID?: string | null;
    backgroundURL?: string;
    youtubeURL?: string | null;
    logoURL?: string;
    bounties?: ModelBountyConnection;
    categories?: Array<string | null>;
    tags?: Array<string | null> | null;
    description?: string;
    howToJoin?: Array<string | null> | null;
    missionAndVision?: string | null;
    whatDoWeDo?: string | null;
    tokenBenefits?: ModelTokenBenefitConnection;
    upcomingHangouts?: string | null;
    tokenAddress?: string | null;
    whitelistedAddresses?: Array<string> | null;
    socials?: Array<Social | null> | null;
    chains?: Array<string | null> | null;
    channels?: ModelChannelConnection;
    gates?: ModelGateConnection;
    nftContracts?: NFTContracts;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type FAQ = {
    __typename: 'FAQ';
    question?: string;
    answer?: string;
};

export type ModelBountyConnection = {
    __typename: 'ModelBountyConnection';
    items?: Array<Bounty | null>;
    nextToken?: string | null;
};

export type Bounty = {
    __typename: 'Bounty';
    id?: string;
    daoID?: string;
    dao?: DAO;
    headline?: string;
    description?: string | null;
    level?: string;
    categories?: Array<string | null>;
    reward?: string;
    directions?: string | null;
    links?: Array<string | null>;
    endDate?: string | null;
    postDate?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type ModelTokenBenefitConnection = {
    __typename: 'ModelTokenBenefitConnection';
    items?: Array<TokenBenefit | null>;
    nextToken?: string | null;
};

export type TokenBenefit = {
    __typename: 'TokenBenefit';
    id?: string;
    daoID?: string;
    dao?: DAO;
    amount?: string | null;
    description?: string;
    title?: string;
    token?: string | null;
    createdAt?: string;
    updatedAt?: string;
};

export type Social = {
    __typename: 'Social';
    network?: string;
    url?: string;
};

export type ModelChannelConnection = {
    __typename: 'ModelChannelConnection';
    items?: Array<Channel | null>;
    nextToken?: string | null;
};

export type Channel = {
    __typename: 'Channel';
    id?: string;
    name?: string;
    daoID?: string;
    dao?: DAO;
    posts?: ModelPostConnection;
    createdAt?: string;
    updatedAt?: string;
};

export type ModelPostConnection = {
    __typename: 'ModelPostConnection';
    items?: Array<Post | null>;
    nextToken?: string | null;
};

export type Post = {
    __typename: 'Post';
    id?: string;
    daoID?: string;
    dao?: DAO;
    channelID?: string | null;
    channel?: Channel;
    userID?: string;
    user?: User;
    content?: string;
    comments?: ModelCommentConnection;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
    updatedAt?: string;
};

export type User = {
    __typename: 'User';
    id?: string;
    ip?: string | null;
    wallet?: string;
    username?: string | null;
    name?: string | null;
    bio?: string | null;
    daos_ids?: Array<string | null> | null;
    daos?: Array<DAO | null> | null;
    init?: boolean | null;
    nonce?: number;
    pfp?: string | null;
    about?: string | null;
    skills?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    languages?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    socials?: Array<Social | null> | null;
    gates?: ModelGateStatusConnection;
    tasks?: ModelTaskStatusConnection;
    credentials?: ModelCredentialConnection;
    createdAt?: string | null;
    updatedAt?: string;
};

export type ModelGateStatusConnection = {
    __typename: 'ModelGateStatusConnection';
    items?: Array<GateStatus | null>;
    nextToken?: string | null;
};

export type GateStatus = {
    __typename: 'GateStatus';
    id?: string;
    userID?: string;
    user?: User;
    gateID?: string;
    gate?: Gate;
    reward?: GateReward;
    tasks?: ModelTaskStatusConnection;
    keysDone?: number | null;
    status?: GateStatusList | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type Gate = {
    __typename: 'Gate';
    id?: string;
    daoID?: string;
    dao?: DAO;
    name?: string;
    description?: string;
    categories?: Array<string> | null;
    skills?: Array<string> | null;
    knowledge?: Array<string> | null;
    attitudes?: Array<string> | null;
    admins?: Array<string | null>;
    keysNumber?: number | null;
    keys?: ModelKeyConnection;
    published?: PublishedState | null;
    badge?: NFTInfo;
    preRequisites?: PreRequisites;
    retroactiveEarners?: Array<string> | null;
    links?: Array<Link | null>;
    holders?: number;
    nftType?: NFTType | null;
    createdAt?: string;
    updatedAt?: string;
};

export type ModelKeyConnection = {
    __typename: 'ModelKeyConnection';
    items?: Array<Key | null>;
    nextToken?: string | null;
};

export type Key = {
    __typename: 'Key';
    id?: string;
    gateID?: string;
    gate?: Gate;
    information?: Array<KeyInformation | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys?: number;
    unlimited?: boolean;
    peopleLimit?: number;
    task?: TaskUnion;
    createdAt?: string;
    updatedAt?: string;
};

export type KeyInformation = {
    __typename: 'KeyInformation';
    title?: string;
    description?: string;
};

export type TaskUnion =
    | Quiz
    | MeetingCode
    | TokenHold
    | SelfVerify
    | SnapshotGovernance
    | ContractInteraction
    | ManualTask;

export type Quiz = {
    __typename: 'Quiz';
    type?: TaskType | null;
    title?: string;
    description?: string;
    questions?: Array<Question | null>;
    passedAt?: number;
};

export enum TaskType {
    QUIZ = 'QUIZ',
    MEETING_CODE = 'MEETING_CODE',
    TOKEN_HOLD = 'TOKEN_HOLD',
    SC_INTERACTION = 'SC_INTERACTION',
    SNAPSHOT = 'SNAPSHOT',
    MANUAL_TASK = 'MANUAL_TASK',
    SELF_VERIFY = 'SELF_VERIFY',
    SNAPSHOT_GOVERNANCE = 'SNAPSHOT_GOVERNANCE',
    CONTRACT_INTERACTION = 'CONTRACT_INTERACTION',
}

export type Question = {
    __typename: 'Question';
    question?: string;
    options?: Array<QuizOption | null>;
    nrOfCorrectAnswers?: number | null;
};

export type QuizOption = {
    __typename: 'QuizOption';
    answer?: string;
    correct?: boolean;
};

export type MeetingCode = {
    __typename: 'MeetingCode';
    type?: TaskType | null;
    code?: string;
    caseSensitive?: boolean;
};

export type TokenHold = {
    __typename: 'TokenHold';
    type?: TaskType | null;
    chainID?: number;
    address?: string;
    amount?: number;
};

export type SelfVerify = {
    __typename: 'SelfVerify';
    type?: TaskType | null;
};

export type SnapshotGovernance = {
    __typename: 'SnapshotGovernance';
    type?: TaskType | null;
    snapshotType?: SnapshotType | null;
    spaceID?: string;
    proposal?: string | null;
};

export enum SnapshotType {
    VOTE = 'VOTE',
    PROPOSAL = 'PROPOSAL',
}

export type ContractInteraction = {
    __typename: 'ContractInteraction';
    type?: TaskType | null;
    chainID?: number;
    address?: string;
    methodName?: string | null;
};

export type ManualTask = {
    __typename: 'ManualTask';
    type?: TaskType | null;
    information?: Array<KeyInformation | null>;
};

export enum PublishedState {
    NOT_PUBLISHED = 'NOT_PUBLISHED',
    PUBLISHED = 'PUBLISHED',
    PAUSED = 'PAUSED',
}

export type NFTInfo = {
    __typename: 'NFTInfo';
    nftURL?: string | null;
    ipfsURL?: string | null;
    name?: string;
};

export type PreRequisites = {
    __typename: 'PreRequisites';
    completedGates?: Array<string | null> | null;
};

export type Link = {
    __typename: 'Link';
    name?: string;
    link?: string;
};

export enum NFTType {
    CONTRIBUTOR = 'CONTRIBUTOR',
    REWARD = 'REWARD',
}

export type GateReward = {
    __typename: 'GateReward';
    rewardCode?: string;
    retrieved?: boolean;
};

export type ModelTaskStatusConnection = {
    __typename: 'ModelTaskStatusConnection';
    items?: Array<TaskStatus | null>;
    nextToken?: string | null;
};

export type TaskStatus = {
    __typename: 'TaskStatus';
    id?: string;
    userID?: string;
    user?: User;
    gateID?: string;
    gate?: Gate;
    keyID?: string;
    key?: Key;
    completed?: CompletedState | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export enum CompletedState {
    DONE = 'DONE',
    IN_REVIEW = 'IN_REVIEW',
    NOT_DONE = 'NOT_DONE',
}

export enum GateStatusList {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}

export type ModelCredentialConnection = {
    __typename: 'ModelCredentialConnection';
    items?: Array<Credential | null>;
    nextToken?: string | null;
};

export type Credential = {
    __typename: 'Credential';
    id?: string;
    issuerID?: string;
    issuer?: User;
    targetID?: string;
    target?: User;
    gateID?: string | null;
    gate?: Gate;
    organizationID?: string | null;
    organization?: DAO;
    name?: string;
    description?: string;
    image?: string | null;
    pow?: Array<string | null> | null;
    skills?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    ceramicStream?: string;
    createdAt?: string | null;
    updatedAt?: string;
};

export type ModelCommentConnection = {
    __typename: 'ModelCommentConnection';
    items?: Array<Comment | null>;
    nextToken?: string | null;
};

export type Comment = {
    __typename: 'Comment';
    id?: string;
    postID?: string;
    userID?: string;
    user?: User;
    content?: string;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
    updatedAt?: string;
};

export type ModelGateConnection = {
    __typename: 'ModelGateConnection';
    items?: Array<Gate | null>;
    nextToken?: string | null;
};

export type NFTContracts = {
    __typename: 'NFTContracts';
    reward?: string | null;
    contributor?: string | null;
};

export enum VoteType {
    UPVOTE = 'UPVOTE',
    DOWNVOTE = 'DOWNVOTE',
}

export type CreateKeyQuiz = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: QuizInput | null;
};

export type KeyInformationInput = {
    title: string;
    description: string;
};

export type QuizInput = {
    type?: TaskType | null;
    title: string;
    description: string;
    questions: Array<QuestionInput | null>;
    passedAt: number;
};

export type QuestionInput = {
    question: string;
    options: Array<QuizOptionInput | null>;
    nrOfCorrectAnswers?: number | null;
};

export type QuizOptionInput = {
    answer: string;
    correct: boolean;
};

export type CreateKeyMeetingCode = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: MeetingCodeInput | null;
};

export type MeetingCodeInput = {
    type?: TaskType | null;
    code: string;
    caseSensitive: boolean;
};

export type CreateKeyTokenHold = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: TokenHoldInput | null;
};

export type TokenHoldInput = {
    type?: TaskType | null;
    chainID: number;
    address: string;
    amount: number;
};

export type CreateKeySnapshotGovernance = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: SnapshotGovernanceInput | null;
};

export type SnapshotGovernanceInput = {
    type?: TaskType | null;
    snapshotType?: SnapshotType | null;
    spaceID: string;
    proposal?: string | null;
};

export type CreateKeySelfVerify = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: SelfVerifyInput | null;
};

export type SelfVerifyInput = {
    type?: TaskType | null;
};

export type CreateKeyContractInteraction = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: ContractInteractionInput | null;
};

export type ContractInteractionInput = {
    type?: TaskType | null;
    chainID: number;
    address: string;
    methodName?: string | null;
};

export type CreateKeyManualTask = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: ManualTaskInput | null;
};

export type ManualTaskInput = {
    type?: TaskType | null;
    information: Array<KeyInformationInput | null>;
};

export type ChangeKeyInput = {
    id: string;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    peopleLimit: number;
    unlimited: boolean;
    task?: string | null;
};

export type KeyVerificationResponse = TaskAndGateResponse | Error;

export type TaskAndGateResponse = {
    __typename: 'TaskAndGateResponse';
    id?: string;
    userID?: string;
    gateID?: string;
    keyID?: string;
    completed?: boolean;
    completedGate?: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type Error = {
    __typename: 'Error';
    keyID?: string;
    error?: ErrorType;
    msg?: string | null;
};

export enum ErrorType {
    INVALID_KEY = 'INVALID_KEY',
    NO_HOLD = 'NO_HOLD',
    INVALID_CODE = 'INVALID_CODE',
    NOT_ENOUGH_RIGHTS = 'NOT_ENOUGH_RIGHTS',
    UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
    INVALID_METHOD_NAME = 'INVALID_METHOD_NAME',
    NO_INTERACTION = 'NO_INTERACTION',
    NO_PROPOSAL = 'NO_PROPOSAL',
    NO_VOTE = 'NO_VOTE',
    WRONG_TASK = 'WRONG_TASK',
    NO_MORE_SLOTS = 'NO_MORE_SLOTS',
}

export type QuestionLambdaInput = {
    answers: Array<number | null>;
    questionIdx: number;
};

export type StreamCeramicResponse = StreamCeramic | CeramicError;

export type StreamCeramic = {
    __typename: 'StreamCeramic';
    streamed?: boolean;
    streamID?: string;
    data?: string;
};

export type CeramicError = {
    __typename: 'CeramicError';
    error?: boolean;
    msg?: string;
};

export type SignatureResponse = Signature | SignatureError;

export type Signature = {
    __typename: 'Signature';
    message?: string;
    signature?: string;
};

export type SignatureError = {
    __typename: 'SignatureError';
    error?: boolean;
    msg?: string;
};

export type CreateUserInput = {
    id?: string | null;
    wallet: string;
    username?: string | null;
    name?: string | null;
    bio?: string | null;
    daos_ids?: Array<string | null> | null;
    init?: boolean | null;
    nonce: number;
    pfp?: string | null;
    about?: string | null;
    skills?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    languages?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    socials?: Array<SocialInput | null> | null;
    createdAt?: string | null;
};

export type ModelUserConditionInput = {
    wallet?: ModelStringInput | null;
    username?: ModelStringInput | null;
    name?: ModelStringInput | null;
    bio?: ModelStringInput | null;
    daos_ids?: ModelStringInput | null;
    init?: ModelBooleanInput | null;
    nonce?: ModelIntInput | null;
    pfp?: ModelStringInput | null;
    about?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    languages?: ModelStringInput | null;
    knowledges?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelUserConditionInput | null> | null;
    or?: Array<ModelUserConditionInput | null> | null;
    not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
    binary = 'binary',
    binarySet = 'binarySet',
    bool = 'bool',
    list = 'list',
    map = 'map',
    number = 'number',
    numberSet = 'numberSet',
    string = 'string',
    stringSet = 'stringSet',
    _null = '_null',
}

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
    id: string;
    wallet?: string | null;
    username?: string | null;
    name?: string | null;
    bio?: string | null;
    daos_ids?: Array<string | null> | null;
    init?: boolean | null;
    nonce?: number | null;
    pfp?: string | null;
    about?: string | null;
    skills?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    languages?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    socials?: Array<SocialInput | null> | null;
    createdAt?: string | null;
};

export type DeleteUserInput = {
    id: string;
};

export type CreateDAOInput = {
    id?: string | null;
    dao: string;
    name: string;
    faq?: Array<FAQInput | null> | null;
    accomplishments?: string | null;
    snapshotID?: string | null;
    backgroundURL: string;
    youtubeURL?: string | null;
    logoURL: string;
    categories: Array<string | null>;
    tags?: Array<string | null> | null;
    description: string;
    howToJoin?: Array<string | null> | null;
    missionAndVision?: string | null;
    whatDoWeDo?: string | null;
    upcomingHangouts?: string | null;
    tokenAddress?: string | null;
    whitelistedAddresses?: Array<string> | null;
    socials?: Array<SocialInput | null> | null;
    chains?: Array<string | null> | null;
    nftContracts?: NFTContractsInput | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type FAQInput = {
    question: string;
    answer: string;
};

export type NFTContractsInput = {
    reward?: string | null;
    contributor?: string | null;
};

export type ModelDAOConditionInput = {
    dao?: ModelStringInput | null;
    name?: ModelStringInput | null;
    accomplishments?: ModelStringInput | null;
    snapshotID?: ModelStringInput | null;
    backgroundURL?: ModelStringInput | null;
    youtubeURL?: ModelStringInput | null;
    logoURL?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    tags?: ModelStringInput | null;
    description?: ModelStringInput | null;
    howToJoin?: ModelStringInput | null;
    missionAndVision?: ModelStringInput | null;
    whatDoWeDo?: ModelStringInput | null;
    upcomingHangouts?: ModelStringInput | null;
    tokenAddress?: ModelStringInput | null;
    whitelistedAddresses?: ModelStringInput | null;
    chains?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelDAOConditionInput | null> | null;
    or?: Array<ModelDAOConditionInput | null> | null;
    not?: ModelDAOConditionInput | null;
};

export type UpdateDAOInput = {
    id: string;
    dao?: string | null;
    name?: string | null;
    faq?: Array<FAQInput | null> | null;
    accomplishments?: string | null;
    snapshotID?: string | null;
    backgroundURL?: string | null;
    youtubeURL?: string | null;
    logoURL?: string | null;
    categories?: Array<string | null> | null;
    tags?: Array<string | null> | null;
    description?: string | null;
    howToJoin?: Array<string | null> | null;
    missionAndVision?: string | null;
    whatDoWeDo?: string | null;
    upcomingHangouts?: string | null;
    tokenAddress?: string | null;
    whitelistedAddresses?: Array<string> | null;
    socials?: Array<SocialInput | null> | null;
    chains?: Array<string | null> | null;
    nftContracts?: NFTContractsInput | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type DeleteDAOInput = {
    id: string;
};

export type CreateBountyInput = {
    id?: string | null;
    daoID: string;
    headline: string;
    description?: string | null;
    level: string;
    categories: Array<string | null>;
    reward: string;
    directions?: string | null;
    links: Array<string | null>;
    endDate?: string | null;
    postDate: string;
};

export type ModelBountyConditionInput = {
    daoID?: ModelIDInput | null;
    headline?: ModelStringInput | null;
    description?: ModelStringInput | null;
    level?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    reward?: ModelStringInput | null;
    directions?: ModelStringInput | null;
    links?: ModelStringInput | null;
    endDate?: ModelStringInput | null;
    postDate?: ModelStringInput | null;
    and?: Array<ModelBountyConditionInput | null> | null;
    or?: Array<ModelBountyConditionInput | null> | null;
    not?: ModelBountyConditionInput | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type UpdateBountyInput = {
    id: string;
    daoID?: string | null;
    headline?: string | null;
    description?: string | null;
    level?: string | null;
    categories?: Array<string | null> | null;
    reward?: string | null;
    directions?: string | null;
    links?: Array<string | null> | null;
    endDate?: string | null;
    postDate?: string | null;
};

export type DeleteBountyInput = {
    id: string;
};

export type CreateTokenBenefitInput = {
    id?: string | null;
    daoID: string;
    amount?: string | null;
    description: string;
    title: string;
    token?: string | null;
};

export type ModelTokenBenefitConditionInput = {
    daoID?: ModelIDInput | null;
    amount?: ModelStringInput | null;
    description?: ModelStringInput | null;
    title?: ModelStringInput | null;
    token?: ModelStringInput | null;
    and?: Array<ModelTokenBenefitConditionInput | null> | null;
    or?: Array<ModelTokenBenefitConditionInput | null> | null;
    not?: ModelTokenBenefitConditionInput | null;
};

export type UpdateTokenBenefitInput = {
    id: string;
    daoID?: string | null;
    amount?: string | null;
    description?: string | null;
    title?: string | null;
    token?: string | null;
};

export type DeleteTokenBenefitInput = {
    id: string;
};

export type CreateChannelInput = {
    id?: string | null;
    name: string;
    daoID: string;
};

export type ModelChannelConditionInput = {
    name?: ModelStringInput | null;
    daoID?: ModelIDInput | null;
    and?: Array<ModelChannelConditionInput | null> | null;
    or?: Array<ModelChannelConditionInput | null> | null;
    not?: ModelChannelConditionInput | null;
};

export type UpdateChannelInput = {
    id: string;
    name?: string | null;
    daoID?: string | null;
};

export type DeleteChannelInput = {
    id: string;
};

export type CreatePostInput = {
    id?: string | null;
    daoID: string;
    channelID?: string | null;
    userID: string;
    content: string;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
};

export type ModelPostConditionInput = {
    daoID?: ModelIDInput | null;
    channelID?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    content?: ModelStringInput | null;
    upvotes?: ModelIDInput | null;
    downvotes?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelPostConditionInput | null> | null;
    or?: Array<ModelPostConditionInput | null> | null;
    not?: ModelPostConditionInput | null;
};

export type UpdatePostInput = {
    id: string;
    daoID?: string | null;
    channelID?: string | null;
    userID?: string | null;
    content?: string | null;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
};

export type DeletePostInput = {
    id: string;
};

export type CreateCommentInput = {
    id?: string | null;
    postID: string;
    userID: string;
    content: string;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
};

export type ModelCommentConditionInput = {
    postID?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    content?: ModelStringInput | null;
    upvotes?: ModelIDInput | null;
    downvotes?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelCommentConditionInput | null> | null;
    or?: Array<ModelCommentConditionInput | null> | null;
    not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
    id: string;
    postID?: string | null;
    userID?: string | null;
    content?: string | null;
    upvotes?: Array<string> | null;
    downvotes?: Array<string> | null;
    createdAt?: string | null;
};

export type DeleteCommentInput = {
    id: string;
};

export type CreateGateInput = {
    id?: string | null;
    daoID: string;
    name: string;
    description: string;
    categories?: Array<string> | null;
    skills?: Array<string> | null;
    knowledge?: Array<string> | null;
    attitudes?: Array<string> | null;
    admins: Array<string | null>;
    keysNumber?: number | null;
    published?: PublishedState | null;
    badge: NFTInfoInput;
    preRequisites?: PreRequisitesInput | null;
    retroactiveEarners?: Array<string> | null;
    links: Array<LinkInput | null>;
    holders: number;
    nftType?: NFTType | null;
};

export type NFTInfoInput = {
    nftURL?: string | null;
    ipfsURL?: string | null;
    name: string;
};

export type PreRequisitesInput = {
    completedGates?: Array<string | null> | null;
};

export type LinkInput = {
    name: string;
    link: string;
};

export type ModelGateConditionInput = {
    daoID?: ModelIDInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    knowledge?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    admins?: ModelIDInput | null;
    keysNumber?: ModelIntInput | null;
    published?: ModelPublishedStateInput | null;
    retroactiveEarners?: ModelStringInput | null;
    holders?: ModelIntInput | null;
    nftType?: ModelNFTTypeInput | null;
    and?: Array<ModelGateConditionInput | null> | null;
    or?: Array<ModelGateConditionInput | null> | null;
    not?: ModelGateConditionInput | null;
};

export type ModelPublishedStateInput = {
    eq?: PublishedState | null;
    ne?: PublishedState | null;
};

export type ModelNFTTypeInput = {
    eq?: NFTType | null;
    ne?: NFTType | null;
};

export type UpdateGateInput = {
    id: string;
    daoID?: string | null;
    name?: string | null;
    description?: string | null;
    categories?: Array<string> | null;
    skills?: Array<string> | null;
    knowledge?: Array<string> | null;
    attitudes?: Array<string> | null;
    admins?: Array<string | null> | null;
    keysNumber?: number | null;
    published?: PublishedState | null;
    badge?: NFTInfoInput | null;
    preRequisites?: PreRequisitesInput | null;
    retroactiveEarners?: Array<string> | null;
    links?: Array<LinkInput | null> | null;
    holders?: number | null;
    nftType?: NFTType | null;
};

export type DeleteGateInput = {
    id: string;
};

export type CreateKeyInput = {
    id?: string | null;
    gateID: string;
    information: Array<KeyInformationInput | null>;
    token?: string | null;
    tokenAmount?: number | null;
    keys: number;
    unlimited: boolean;
    peopleLimit: number;
};

export type ModelKeyConditionInput = {
    gateID?: ModelIDInput | null;
    token?: ModelStringInput | null;
    tokenAmount?: ModelIntInput | null;
    keys?: ModelIntInput | null;
    unlimited?: ModelBooleanInput | null;
    peopleLimit?: ModelIntInput | null;
    and?: Array<ModelKeyConditionInput | null> | null;
    or?: Array<ModelKeyConditionInput | null> | null;
    not?: ModelKeyConditionInput | null;
};

export type UpdateKeyInput = {
    id: string;
    gateID?: string | null;
    information?: Array<KeyInformationInput | null> | null;
    token?: string | null;
    tokenAmount?: number | null;
    keys?: number | null;
    unlimited?: boolean | null;
    peopleLimit?: number | null;
};

export type DeleteKeyInput = {
    id: string;
};

export type CreateManualTaskSubmissionInput = {
    id?: string | null;
    userID: string;
    keyID: string;
    submissionURL?: string | null;
    discordID?: string | null;
    wallet?: string | null;
    comment?: string | null;
};

export type ModelManualTaskSubmissionConditionInput = {
    userID?: ModelIDInput | null;
    keyID?: ModelIDInput | null;
    submissionURL?: ModelStringInput | null;
    discordID?: ModelStringInput | null;
    wallet?: ModelStringInput | null;
    comment?: ModelStringInput | null;
    and?: Array<ModelManualTaskSubmissionConditionInput | null> | null;
    or?: Array<ModelManualTaskSubmissionConditionInput | null> | null;
    not?: ModelManualTaskSubmissionConditionInput | null;
};

export type ManualTaskSubmission = {
    __typename: 'ManualTaskSubmission';
    id?: string;
    userID?: string;
    user?: User;
    keyID?: string;
    key?: Key;
    submissionURL?: string | null;
    discordID?: string | null;
    wallet?: string | null;
    comment?: string | null;
    createdAt?: string;
    updatedAt?: string;
};

export type UpdateManualTaskSubmissionInput = {
    id: string;
    userID?: string | null;
    keyID?: string | null;
    submissionURL?: string | null;
    discordID?: string | null;
    wallet?: string | null;
    comment?: string | null;
};

export type DeleteManualTaskSubmissionInput = {
    id: string;
};

export type CreateGateStatusInput = {
    id?: string | null;
    userID: string;
    gateID: string;
    reward?: GateRewardInput | null;
    keysDone?: number | null;
    status?: GateStatusList | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type GateRewardInput = {
    rewardCode: string;
    retrieved: boolean;
};

export type ModelGateStatusConditionInput = {
    userID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    keysDone?: ModelIntInput | null;
    status?: ModelGateStatusListInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelGateStatusConditionInput | null> | null;
    or?: Array<ModelGateStatusConditionInput | null> | null;
    not?: ModelGateStatusConditionInput | null;
};

export type ModelGateStatusListInput = {
    eq?: GateStatusList | null;
    ne?: GateStatusList | null;
};

export type UpdateGateStatusInput = {
    id: string;
    userID?: string | null;
    gateID?: string | null;
    reward?: GateRewardInput | null;
    keysDone?: number | null;
    status?: GateStatusList | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type DeleteGateStatusInput = {
    id: string;
};

export type CreateTaskStatusInput = {
    id?: string | null;
    userID: string;
    gateID: string;
    keyID: string;
    completed?: CompletedState | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type ModelTaskStatusConditionInput = {
    userID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    keyID?: ModelIDInput | null;
    completed?: ModelCompletedStateInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelTaskStatusConditionInput | null> | null;
    or?: Array<ModelTaskStatusConditionInput | null> | null;
    not?: ModelTaskStatusConditionInput | null;
};

export type ModelCompletedStateInput = {
    eq?: CompletedState | null;
    ne?: CompletedState | null;
};

export type UpdateTaskStatusInput = {
    id: string;
    userID?: string | null;
    gateID?: string | null;
    keyID?: string | null;
    completed?: CompletedState | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type DeleteTaskStatusInput = {
    id: string;
};

export type CreateCredentialInput = {
    id?: string | null;
    issuerID: string;
    targetID: string;
    gateID?: string | null;
    organizationID?: string | null;
    name: string;
    description: string;
    image?: string | null;
    pow?: Array<string | null> | null;
    skills?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    ceramicStream: string;
    createdAt?: string | null;
};

export type ModelCredentialConditionInput = {
    issuerID?: ModelIDInput | null;
    targetID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    organizationID?: ModelIDInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    image?: ModelStringInput | null;
    pow?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    knowledges?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    ceramicStream?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelCredentialConditionInput | null> | null;
    or?: Array<ModelCredentialConditionInput | null> | null;
    not?: ModelCredentialConditionInput | null;
};

export type UpdateCredentialInput = {
    id: string;
    issuerID?: string | null;
    targetID?: string | null;
    gateID?: string | null;
    organizationID?: string | null;
    name?: string | null;
    description?: string | null;
    image?: string | null;
    pow?: Array<string | null> | null;
    skills?: Array<string | null> | null;
    knowledges?: Array<string | null> | null;
    attitudes?: Array<string | null> | null;
    ceramicStream?: string | null;
    createdAt?: string | null;
};

export type DeleteCredentialInput = {
    id: string;
};

export type FetchCeramicResponse = FetchCeramic | CeramicError;

export type FetchCeramic = {
    __typename: 'FetchCeramic';
    streamID?: string;
    data?: string;
};

export type ModelUserFilterInput = {
    id?: ModelIDInput | null;
    wallet?: ModelStringInput | null;
    username?: ModelStringInput | null;
    name?: ModelStringInput | null;
    bio?: ModelStringInput | null;
    daos_ids?: ModelStringInput | null;
    init?: ModelBooleanInput | null;
    nonce?: ModelIntInput | null;
    pfp?: ModelStringInput | null;
    about?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    languages?: ModelStringInput | null;
    knowledges?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelUserFilterInput | null> | null;
    or?: Array<ModelUserFilterInput | null> | null;
    not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
    __typename: 'ModelUserConnection';
    items?: Array<User | null>;
    nextToken?: string | null;
};

export type ModelDAOFilterInput = {
    id?: ModelIDInput | null;
    dao?: ModelStringInput | null;
    name?: ModelStringInput | null;
    accomplishments?: ModelStringInput | null;
    snapshotID?: ModelStringInput | null;
    backgroundURL?: ModelStringInput | null;
    youtubeURL?: ModelStringInput | null;
    logoURL?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    tags?: ModelStringInput | null;
    description?: ModelStringInput | null;
    howToJoin?: ModelStringInput | null;
    missionAndVision?: ModelStringInput | null;
    whatDoWeDo?: ModelStringInput | null;
    upcomingHangouts?: ModelStringInput | null;
    tokenAddress?: ModelStringInput | null;
    whitelistedAddresses?: ModelStringInput | null;
    chains?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelDAOFilterInput | null> | null;
    or?: Array<ModelDAOFilterInput | null> | null;
    not?: ModelDAOFilterInput | null;
};

export type ModelDAOConnection = {
    __typename: 'ModelDAOConnection';
    items?: Array<DAO | null>;
    nextToken?: string | null;
};

export type ModelBountyFilterInput = {
    id?: ModelIDInput | null;
    daoID?: ModelIDInput | null;
    headline?: ModelStringInput | null;
    description?: ModelStringInput | null;
    level?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    reward?: ModelStringInput | null;
    directions?: ModelStringInput | null;
    links?: ModelStringInput | null;
    endDate?: ModelStringInput | null;
    postDate?: ModelStringInput | null;
    and?: Array<ModelBountyFilterInput | null> | null;
    or?: Array<ModelBountyFilterInput | null> | null;
    not?: ModelBountyFilterInput | null;
};

export type ModelTokenBenefitFilterInput = {
    id?: ModelIDInput | null;
    daoID?: ModelIDInput | null;
    amount?: ModelStringInput | null;
    description?: ModelStringInput | null;
    title?: ModelStringInput | null;
    token?: ModelStringInput | null;
    and?: Array<ModelTokenBenefitFilterInput | null> | null;
    or?: Array<ModelTokenBenefitFilterInput | null> | null;
    not?: ModelTokenBenefitFilterInput | null;
};

export type ModelChannelFilterInput = {
    id?: ModelIDInput | null;
    name?: ModelStringInput | null;
    daoID?: ModelIDInput | null;
    and?: Array<ModelChannelFilterInput | null> | null;
    or?: Array<ModelChannelFilterInput | null> | null;
    not?: ModelChannelFilterInput | null;
};

export type ModelPostFilterInput = {
    id?: ModelIDInput | null;
    daoID?: ModelIDInput | null;
    channelID?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    content?: ModelStringInput | null;
    upvotes?: ModelIDInput | null;
    downvotes?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelPostFilterInput | null> | null;
    or?: Array<ModelPostFilterInput | null> | null;
    not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
    id?: ModelIDInput | null;
    postID?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    content?: ModelStringInput | null;
    upvotes?: ModelIDInput | null;
    downvotes?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelCommentFilterInput | null> | null;
    or?: Array<ModelCommentFilterInput | null> | null;
    not?: ModelCommentFilterInput | null;
};

export type ModelGateFilterInput = {
    id?: ModelIDInput | null;
    daoID?: ModelIDInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    categories?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    knowledge?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    admins?: ModelIDInput | null;
    keysNumber?: ModelIntInput | null;
    published?: ModelPublishedStateInput | null;
    retroactiveEarners?: ModelStringInput | null;
    holders?: ModelIntInput | null;
    nftType?: ModelNFTTypeInput | null;
    and?: Array<ModelGateFilterInput | null> | null;
    or?: Array<ModelGateFilterInput | null> | null;
    not?: ModelGateFilterInput | null;
};

export type ModelKeyFilterInput = {
    id?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    token?: ModelStringInput | null;
    tokenAmount?: ModelIntInput | null;
    keys?: ModelIntInput | null;
    unlimited?: ModelBooleanInput | null;
    peopleLimit?: ModelIntInput | null;
    and?: Array<ModelKeyFilterInput | null> | null;
    or?: Array<ModelKeyFilterInput | null> | null;
    not?: ModelKeyFilterInput | null;
};

export type ModelManualTaskSubmissionFilterInput = {
    userID?: ModelIDInput | null;
    keyID?: ModelIDInput | null;
    submissionURL?: ModelStringInput | null;
    discordID?: ModelStringInput | null;
    wallet?: ModelStringInput | null;
    comment?: ModelStringInput | null;
    and?: Array<ModelManualTaskSubmissionFilterInput | null> | null;
    or?: Array<ModelManualTaskSubmissionFilterInput | null> | null;
    not?: ModelManualTaskSubmissionFilterInput | null;
};

export type ModelManualTaskSubmissionConnection = {
    __typename: 'ModelManualTaskSubmissionConnection';
    items?: Array<ManualTaskSubmission | null>;
    nextToken?: string | null;
};

export type ModelGateStatusFilterInput = {
    id?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    keysDone?: ModelIntInput | null;
    status?: ModelGateStatusListInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelGateStatusFilterInput | null> | null;
    or?: Array<ModelGateStatusFilterInput | null> | null;
    not?: ModelGateStatusFilterInput | null;
};

export type ModelTaskStatusFilterInput = {
    id?: ModelIDInput | null;
    userID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    keyID?: ModelIDInput | null;
    completed?: ModelCompletedStateInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelTaskStatusFilterInput | null> | null;
    or?: Array<ModelTaskStatusFilterInput | null> | null;
    not?: ModelTaskStatusFilterInput | null;
};

export type ModelCredentialFilterInput = {
    id?: ModelIDInput | null;
    issuerID?: ModelIDInput | null;
    targetID?: ModelIDInput | null;
    gateID?: ModelIDInput | null;
    organizationID?: ModelIDInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    image?: ModelStringInput | null;
    pow?: ModelStringInput | null;
    skills?: ModelStringInput | null;
    knowledges?: ModelStringInput | null;
    attitudes?: ModelStringInput | null;
    ceramicStream?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    and?: Array<ModelCredentialFilterInput | null> | null;
    or?: Array<ModelCredentialFilterInput | null> | null;
    not?: ModelCredentialFilterInput | null;
};

export enum ModelSortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
}

export type SearchableUserFilterInput = {
    id?: SearchableIDFilterInput | null;
    wallet?: SearchableStringFilterInput | null;
    username?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    bio?: SearchableStringFilterInput | null;
    daos_ids?: SearchableStringFilterInput | null;
    init?: SearchableBooleanFilterInput | null;
    nonce?: SearchableIntFilterInput | null;
    pfp?: SearchableStringFilterInput | null;
    about?: SearchableStringFilterInput | null;
    skills?: SearchableStringFilterInput | null;
    attitudes?: SearchableStringFilterInput | null;
    languages?: SearchableStringFilterInput | null;
    knowledges?: SearchableStringFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    and?: Array<SearchableUserFilterInput | null> | null;
    or?: Array<SearchableUserFilterInput | null> | null;
    not?: SearchableUserFilterInput | null;
};

export type SearchableIDFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
    range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
    range?: Array<string | null> | null;
};

export type SearchableBooleanFilterInput = {
    eq?: boolean | null;
    ne?: boolean | null;
};

export type SearchableIntFilterInput = {
    ne?: number | null;
    gt?: number | null;
    lt?: number | null;
    gte?: number | null;
    lte?: number | null;
    eq?: number | null;
    range?: Array<number | null> | null;
};

export type SearchableUserSortInput = {
    field?: SearchableUserSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableUserSortableFields {
    id = 'id',
    wallet = 'wallet',
    username = 'username',
    name = 'name',
    bio = 'bio',
    daos_ids = 'daos_ids',
    init = 'init',
    nonce = 'nonce',
    pfp = 'pfp',
    about = 'about',
    skills = 'skills',
    attitudes = 'attitudes',
    languages = 'languages',
    knowledges = 'knowledges',
    createdAt = 'createdAt',
}

export enum SearchableSortDirection {
    asc = 'asc',
    desc = 'desc',
}

export type SearchableUserConnection = {
    __typename: 'SearchableUserConnection';
    items?: Array<User | null>;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableDAOFilterInput = {
    id?: SearchableIDFilterInput | null;
    dao?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    accomplishments?: SearchableStringFilterInput | null;
    snapshotID?: SearchableStringFilterInput | null;
    backgroundURL?: SearchableStringFilterInput | null;
    youtubeURL?: SearchableStringFilterInput | null;
    logoURL?: SearchableStringFilterInput | null;
    categories?: SearchableStringFilterInput | null;
    tags?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    howToJoin?: SearchableStringFilterInput | null;
    missionAndVision?: SearchableStringFilterInput | null;
    whatDoWeDo?: SearchableStringFilterInput | null;
    upcomingHangouts?: SearchableStringFilterInput | null;
    tokenAddress?: SearchableStringFilterInput | null;
    whitelistedAddresses?: SearchableStringFilterInput | null;
    chains?: SearchableStringFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    updatedAt?: SearchableStringFilterInput | null;
    and?: Array<SearchableDAOFilterInput | null> | null;
    or?: Array<SearchableDAOFilterInput | null> | null;
    not?: SearchableDAOFilterInput | null;
};

export type SearchableDAOSortInput = {
    field?: SearchableDAOSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableDAOSortableFields {
    id = 'id',
    dao = 'dao',
    name = 'name',
    accomplishments = 'accomplishments',
    snapshotID = 'snapshotID',
    backgroundURL = 'backgroundURL',
    youtubeURL = 'youtubeURL',
    logoURL = 'logoURL',
    categories = 'categories',
    tags = 'tags',
    description = 'description',
    howToJoin = 'howToJoin',
    missionAndVision = 'missionAndVision',
    whatDoWeDo = 'whatDoWeDo',
    upcomingHangouts = 'upcomingHangouts',
    tokenAddress = 'tokenAddress',
    whitelistedAddresses = 'whitelistedAddresses',
    chains = 'chains',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableDAOConnection = {
    __typename: 'SearchableDAOConnection';
    items?: Array<DAO | null>;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchablePostFilterInput = {
    id?: SearchableIDFilterInput | null;
    daoID?: SearchableIDFilterInput | null;
    channelID?: SearchableIDFilterInput | null;
    userID?: SearchableIDFilterInput | null;
    content?: SearchableStringFilterInput | null;
    upvotes?: SearchableIDFilterInput | null;
    downvotes?: SearchableIDFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    and?: Array<SearchablePostFilterInput | null> | null;
    or?: Array<SearchablePostFilterInput | null> | null;
    not?: SearchablePostFilterInput | null;
};

export type SearchablePostSortInput = {
    field?: SearchablePostSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
    id = 'id',
    daoID = 'daoID',
    channelID = 'channelID',
    userID = 'userID',
    content = 'content',
    upvotes = 'upvotes',
    downvotes = 'downvotes',
    createdAt = 'createdAt',
}

export type SearchablePostConnection = {
    __typename: 'SearchablePostConnection';
    items?: Array<Post | null>;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableGateFilterInput = {
    id?: SearchableIDFilterInput | null;
    daoID?: SearchableIDFilterInput | null;
    name?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    categories?: SearchableStringFilterInput | null;
    skills?: SearchableStringFilterInput | null;
    knowledge?: SearchableStringFilterInput | null;
    attitudes?: SearchableStringFilterInput | null;
    admins?: SearchableIDFilterInput | null;
    keysNumber?: SearchableIntFilterInput | null;
    retroactiveEarners?: SearchableStringFilterInput | null;
    holders?: SearchableIntFilterInput | null;
    and?: Array<SearchableGateFilterInput | null> | null;
    or?: Array<SearchableGateFilterInput | null> | null;
    not?: SearchableGateFilterInput | null;
};

export type SearchableGateSortInput = {
    field?: SearchableGateSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableGateSortableFields {
    id = 'id',
    daoID = 'daoID',
    name = 'name',
    description = 'description',
    categories = 'categories',
    skills = 'skills',
    knowledge = 'knowledge',
    attitudes = 'attitudes',
    admins = 'admins',
    keysNumber = 'keysNumber',
    retroactiveEarners = 'retroactiveEarners',
    holders = 'holders',
}

export type SearchableGateConnection = {
    __typename: 'SearchableGateConnection';
    items?: Array<Gate | null>;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableCredentialFilterInput = {
    id?: SearchableIDFilterInput | null;
    issuerID?: SearchableIDFilterInput | null;
    targetID?: SearchableIDFilterInput | null;
    gateID?: SearchableIDFilterInput | null;
    organizationID?: SearchableIDFilterInput | null;
    name?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    image?: SearchableStringFilterInput | null;
    pow?: SearchableStringFilterInput | null;
    skills?: SearchableStringFilterInput | null;
    knowledges?: SearchableStringFilterInput | null;
    attitudes?: SearchableStringFilterInput | null;
    ceramicStream?: SearchableStringFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    and?: Array<SearchableCredentialFilterInput | null> | null;
    or?: Array<SearchableCredentialFilterInput | null> | null;
    not?: SearchableCredentialFilterInput | null;
};

export type SearchableCredentialSortInput = {
    field?: SearchableCredentialSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableCredentialSortableFields {
    id = 'id',
    issuerID = 'issuerID',
    targetID = 'targetID',
    gateID = 'gateID',
    organizationID = 'organizationID',
    name = 'name',
    description = 'description',
    image = 'image',
    pow = 'pow',
    skills = 'skills',
    knowledges = 'knowledges',
    attitudes = 'attitudes',
    ceramicStream = 'ceramicStream',
    createdAt = 'createdAt',
}

export type SearchableCredentialConnection = {
    __typename: 'SearchableCredentialConnection';
    items?: Array<Credential | null>;
    nextToken?: string | null;
    total?: number | null;
};

export type GetAuthenticationNonceMutationVariables = {
    wallet?: string;
};

export type GetAuthenticationNonceMutation = {
    getAuthenticationNonce?: {
        __typename: 'Authentication';
        userId?: string | null;
        nonce?: string | null;
    } | null;
};

export type CreateDaoWithChannelsMutationVariables = {
    input?: CreateNewDAO;
};

export type CreateDaoWithChannelsMutation = {
    createDAOWithChannels?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type VotePostMutationVariables = {
    postID?: string;
    userID?: string;
    type?: VoteType;
};

export type VotePostMutation = {
    votePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type UnvotePostMutationVariables = {
    postID?: string;
    userID?: string;
    type?: VoteType;
};

export type UnvotePostMutation = {
    unvotePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type CreateQuizMutationVariables = {
    input?: CreateKeyQuiz | null;
};

export type CreateQuizMutation = {
    createQuiz?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateMeetingCodeMutationVariables = {
    input?: CreateKeyMeetingCode | null;
};

export type CreateMeetingCodeMutation = {
    createMeetingCode?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateTokenHoldMutationVariables = {
    input?: CreateKeyTokenHold | null;
};

export type CreateTokenHoldMutation = {
    createTokenHold?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateSnapshotGovernanceMutationVariables = {
    input?: CreateKeySnapshotGovernance | null;
};

export type CreateSnapshotGovernanceMutation = {
    createSnapshotGovernance?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateSelfVerifyMutationVariables = {
    input?: CreateKeySelfVerify | null;
};

export type CreateSelfVerifyMutation = {
    createSelfVerify?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateContractInteractionMutationVariables = {
    input?: CreateKeyContractInteraction | null;
};

export type CreateContractInteractionMutation = {
    createContractInteraction?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateManualTaskMutationVariables = {
    input?: CreateKeyManualTask | null;
};

export type CreateManualTaskMutation = {
    createManualTask?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ChangeKeyMutationVariables = {
    input?: ChangeKeyInput | null;
};

export type ChangeKeyMutation = {
    changeKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type VerifyMeetingCodeMutationVariables = {
    userID?: string;
    keyID?: string;
    meetingCode?: string;
};

export type VerifyMeetingCodeMutation = {
    verifyMeetingCode:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type VerifyHoldATokenMutationVariables = {
    userID?: string;
    keyID?: string;
};

export type VerifyHoldATokenMutation = {
    verifyHoldAToken:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type VerifyContractInteractionMutationVariables = {
    userID?: string;
    keyID?: string;
};

export type VerifyContractInteractionMutation = {
    verifyContractInteraction:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type VerifySnapshotMutationVariables = {
    userID?: string;
    keyID?: string;
};

export type VerifySnapshotMutation = {
    verifySnapshot:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type VerifySelfVerifyMutationVariables = {
    userID?: string;
    keyID?: string;
};

export type VerifySelfVerifyMutation = {
    verifySelfVerify:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type VerifyQuizMutationVariables = {
    userID?: string;
    keyID?: string;
    questions?: Array<QuestionLambdaInput | null>;
};

export type VerifyQuizMutation = {
    verifyQuiz:
        | (
              | {
                    __typename: 'TaskAndGateResponse';
                    id: string;
                    userID: string;
                    gateID: string;
                    keyID: string;
                    completed: boolean;
                    completedGate: boolean;
                    createdAt?: string | null;
                    updatedAt?: string | null;
                }
              | {
                    __typename: 'Error';
                    keyID: string;
                    error: ErrorType;
                    msg?: string | null;
                }
          )
        | null;
};

export type StreamToCeramicMutationVariables = {
    data?: string;
    node?: string | null;
};

export type StreamToCeramicMutation = {
    streamToCeramic:
        | (
              | {
                    __typename: 'StreamCeramic';
                    streamed: boolean;
                    streamID: string;
                    data: string;
                }
              | {
                    __typename: 'CeramicError';
                    error: boolean;
                    msg: string;
                }
          )
        | null;
};

export type GenerateSignatureMutationVariables = {
    message?: string;
};

export type GenerateSignatureMutation = {
    generateSignature:
        | (
              | {
                    __typename: 'Signature';
                    message: string;
                    signature: string;
                }
              | {
                    __typename: 'SignatureError';
                    error: boolean;
                    msg: string;
                }
          )
        | null;
};

export type GeneratedNonceSignatureMutation = {
    generatedNonceSignature:
        | (
              | {
                    __typename: 'Signature';
                    message: string;
                    signature: string;
                }
              | {
                    __typename: 'SignatureError';
                    error: boolean;
                    msg: string;
                }
          )
        | null;
};

export type CreateUserMutationVariables = {
    input?: CreateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
    createUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type UpdateUserMutationVariables = {
    input?: UpdateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
    updateUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type DeleteUserMutationVariables = {
    input?: DeleteUserInput;
    condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
    deleteUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type CreateDaoMutationVariables = {
    input?: CreateDAOInput;
    condition?: ModelDAOConditionInput | null;
};

export type CreateDaoMutation = {
    createDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type UpdateDaoMutationVariables = {
    input?: UpdateDAOInput;
    condition?: ModelDAOConditionInput | null;
};

export type UpdateDaoMutation = {
    updateDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type DeleteDaoMutationVariables = {
    input?: DeleteDAOInput;
    condition?: ModelDAOConditionInput | null;
};

export type DeleteDaoMutation = {
    deleteDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type CreateBountyMutationVariables = {
    input?: CreateBountyInput;
    condition?: ModelBountyConditionInput | null;
};

export type CreateBountyMutation = {
    createBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateBountyMutationVariables = {
    input?: UpdateBountyInput;
    condition?: ModelBountyConditionInput | null;
};

export type UpdateBountyMutation = {
    updateBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteBountyMutationVariables = {
    input?: DeleteBountyInput;
    condition?: ModelBountyConditionInput | null;
};

export type DeleteBountyMutation = {
    deleteBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateTokenBenefitMutationVariables = {
    input?: CreateTokenBenefitInput;
    condition?: ModelTokenBenefitConditionInput | null;
};

export type CreateTokenBenefitMutation = {
    createTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateTokenBenefitMutationVariables = {
    input?: UpdateTokenBenefitInput;
    condition?: ModelTokenBenefitConditionInput | null;
};

export type UpdateTokenBenefitMutation = {
    updateTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteTokenBenefitMutationVariables = {
    input?: DeleteTokenBenefitInput;
    condition?: ModelTokenBenefitConditionInput | null;
};

export type DeleteTokenBenefitMutation = {
    deleteTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateChannelMutationVariables = {
    input?: CreateChannelInput;
    condition?: ModelChannelConditionInput | null;
};

export type CreateChannelMutation = {
    createChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateChannelMutationVariables = {
    input?: UpdateChannelInput;
    condition?: ModelChannelConditionInput | null;
};

export type UpdateChannelMutation = {
    updateChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteChannelMutationVariables = {
    input?: DeleteChannelInput;
    condition?: ModelChannelConditionInput | null;
};

export type DeleteChannelMutation = {
    deleteChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreatePostMutationVariables = {
    input?: CreatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
    createPost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type UpdatePostMutationVariables = {
    input?: UpdatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
    updatePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type DeletePostMutationVariables = {
    input?: DeletePostInput;
    condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
    deletePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type CreateCommentMutationVariables = {
    input?: CreateCommentInput;
    condition?: ModelCommentConditionInput | null;
};

export type CreateCommentMutation = {
    createComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type UpdateCommentMutationVariables = {
    input?: UpdateCommentInput;
    condition?: ModelCommentConditionInput | null;
};

export type UpdateCommentMutation = {
    updateComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type DeleteCommentMutationVariables = {
    input?: DeleteCommentInput;
    condition?: ModelCommentConditionInput | null;
};

export type DeleteCommentMutation = {
    deleteComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type CreateGateMutationVariables = {
    input?: CreateGateInput;
    condition?: ModelGateConditionInput | null;
};

export type CreateGateMutation = {
    createGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateGateMutationVariables = {
    input?: UpdateGateInput;
    condition?: ModelGateConditionInput | null;
};

export type UpdateGateMutation = {
    updateGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteGateMutationVariables = {
    input?: DeleteGateInput;
    condition?: ModelGateConditionInput | null;
};

export type DeleteGateMutation = {
    deleteGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateKeyMutationVariables = {
    input?: CreateKeyInput;
    condition?: ModelKeyConditionInput | null;
};

export type CreateKeyMutation = {
    createKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateKeyMutationVariables = {
    input?: UpdateKeyInput;
    condition?: ModelKeyConditionInput | null;
};

export type UpdateKeyMutation = {
    updateKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteKeyMutationVariables = {
    input?: DeleteKeyInput;
    condition?: ModelKeyConditionInput | null;
};

export type DeleteKeyMutation = {
    deleteKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateManualTaskSubmissionMutationVariables = {
    input?: CreateManualTaskSubmissionInput;
    condition?: ModelManualTaskSubmissionConditionInput | null;
};

export type CreateManualTaskSubmissionMutation = {
    createManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateManualTaskSubmissionMutationVariables = {
    input?: UpdateManualTaskSubmissionInput;
    condition?: ModelManualTaskSubmissionConditionInput | null;
};

export type UpdateManualTaskSubmissionMutation = {
    updateManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteManualTaskSubmissionMutationVariables = {
    input?: DeleteManualTaskSubmissionInput;
    condition?: ModelManualTaskSubmissionConditionInput | null;
};

export type DeleteManualTaskSubmissionMutation = {
    deleteManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateGateStatusMutationVariables = {
    input?: CreateGateStatusInput;
    condition?: ModelGateStatusConditionInput | null;
};

export type CreateGateStatusMutation = {
    createGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type UpdateGateStatusMutationVariables = {
    input?: UpdateGateStatusInput;
    condition?: ModelGateStatusConditionInput | null;
};

export type UpdateGateStatusMutation = {
    updateGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type DeleteGateStatusMutationVariables = {
    input?: DeleteGateStatusInput;
    condition?: ModelGateStatusConditionInput | null;
};

export type DeleteGateStatusMutation = {
    deleteGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type CreateTaskStatusMutationVariables = {
    input?: CreateTaskStatusInput;
    condition?: ModelTaskStatusConditionInput | null;
};

export type CreateTaskStatusMutation = {
    createTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type UpdateTaskStatusMutationVariables = {
    input?: UpdateTaskStatusInput;
    condition?: ModelTaskStatusConditionInput | null;
};

export type UpdateTaskStatusMutation = {
    updateTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type DeleteTaskStatusMutationVariables = {
    input?: DeleteTaskStatusInput;
    condition?: ModelTaskStatusConditionInput | null;
};

export type DeleteTaskStatusMutation = {
    deleteTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type CreateCredentialMutationVariables = {
    input?: CreateCredentialInput;
    condition?: ModelCredentialConditionInput | null;
};

export type CreateCredentialMutation = {
    createCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type UpdateCredentialMutationVariables = {
    input?: UpdateCredentialInput;
    condition?: ModelCredentialConditionInput | null;
};

export type UpdateCredentialMutation = {
    updateCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type DeleteCredentialMutationVariables = {
    input?: DeleteCredentialInput;
    condition?: ModelCredentialConditionInput | null;
};

export type DeleteCredentialMutation = {
    deleteCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type FetchFromCeramicQueryVariables = {
    streamID?: string;
    node?: string | null;
};

export type FetchFromCeramicQuery = {
    fetchFromCeramic:
        | (
              | {
                    __typename: 'FetchCeramic';
                    streamID: string;
                    data: string;
                }
              | {
                    __typename: 'CeramicError';
                    error: boolean;
                    msg: string;
                }
          )
        | null;
};

export type GetUserQueryVariables = {
    id?: string;
};

export type GetUserQuery = {
    getUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type ListUsersQueryVariables = {
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUsersQuery = {
    listUsers?: {
        __typename: 'ModelUserConnection';
        items: Array<{
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetDaoQueryVariables = {
    id?: string;
};

export type GetDaoQuery = {
    getDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type ListDaOsQueryVariables = {
    filter?: ModelDAOFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListDaOsQuery = {
    listDAOs?: {
        __typename: 'ModelDAOConnection';
        items: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetBountyQueryVariables = {
    id?: string;
};

export type GetBountyQuery = {
    getBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListBountysQueryVariables = {
    filter?: ModelBountyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListBountysQuery = {
    listBountys?: {
        __typename: 'ModelBountyConnection';
        items: Array<{
            __typename: 'Bounty';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            headline: string;
            description?: string | null;
            level: string;
            categories: Array<string | null>;
            reward: string;
            directions?: string | null;
            links: Array<string | null>;
            endDate?: string | null;
            postDate: string;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTokenBenefitQueryVariables = {
    id?: string;
};

export type GetTokenBenefitQuery = {
    getTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListTokenBenefitsQueryVariables = {
    filter?: ModelTokenBenefitFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListTokenBenefitsQuery = {
    listTokenBenefits?: {
        __typename: 'ModelTokenBenefitConnection';
        items: Array<{
            __typename: 'TokenBenefit';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            amount?: string | null;
            description: string;
            title: string;
            token?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetChannelQueryVariables = {
    id?: string;
};

export type GetChannelQuery = {
    getChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListChannelsQueryVariables = {
    filter?: ModelChannelFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListChannelsQuery = {
    listChannels?: {
        __typename: 'ModelChannelConnection';
        items: Array<{
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetPostQueryVariables = {
    id?: string;
};

export type GetPostQuery = {
    getPost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type ListPostsQueryVariables = {
    filter?: ModelPostFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListPostsQuery = {
    listPosts?: {
        __typename: 'ModelPostConnection';
        items: Array<{
            __typename: 'Post';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            channelID?: string | null;
            channel?: {
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            content: string;
            comments?: {
                __typename: 'ModelCommentConnection';
                nextToken?: string | null;
            } | null;
            upvotes?: Array<string> | null;
            downvotes?: Array<string> | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCommentQueryVariables = {
    id?: string;
};

export type GetCommentQuery = {
    getComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type ListCommentsQueryVariables = {
    filter?: ModelCommentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListCommentsQuery = {
    listComments?: {
        __typename: 'ModelCommentConnection';
        items: Array<{
            __typename: 'Comment';
            id: string;
            postID: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            content: string;
            upvotes?: Array<string> | null;
            downvotes?: Array<string> | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetGateQueryVariables = {
    id?: string;
};

export type GetGateQuery = {
    getGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListGatesQueryVariables = {
    filter?: ModelGateFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGatesQuery = {
    listGates?: {
        __typename: 'ModelGateConnection';
        items: Array<{
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetKeyQueryVariables = {
    id?: string;
};

export type GetKeyQuery = {
    getKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListKeysQueryVariables = {
    filter?: ModelKeyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListKeysQuery = {
    listKeys?: {
        __typename: 'ModelKeyConnection';
        items: Array<{
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetManualTaskSubmissionQueryVariables = {
    id?: string;
};

export type GetManualTaskSubmissionQuery = {
    getManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListManualTaskSubmissionsQueryVariables = {
    filter?: ModelManualTaskSubmissionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListManualTaskSubmissionsQuery = {
    listManualTaskSubmissions?: {
        __typename: 'ModelManualTaskSubmissionConnection';
        items: Array<{
            __typename: 'ManualTaskSubmission';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            submissionURL?: string | null;
            discordID?: string | null;
            wallet?: string | null;
            comment?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetGateStatusQueryVariables = {
    id?: string;
};

export type GetGateStatusQuery = {
    getGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type ListGateStatussQueryVariables = {
    filter?: ModelGateStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGateStatussQuery = {
    listGateStatuss?: {
        __typename: 'ModelGateStatusConnection';
        items: Array<{
            __typename: 'GateStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            reward?: {
                __typename: 'GateReward';
                rewardCode: string;
                retrieved: boolean;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            keysDone?: number | null;
            status?: GateStatusList | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTaskStatusQueryVariables = {
    id?: string;
};

export type GetTaskStatusQuery = {
    getTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type ListTaskStatussQueryVariables = {
    filter?: ModelTaskStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListTaskStatussQuery = {
    listTaskStatuss?: {
        __typename: 'ModelTaskStatusConnection';
        items: Array<{
            __typename: 'TaskStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            completed?: CompletedState | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCredentialQueryVariables = {
    id?: string;
};

export type GetCredentialQuery = {
    getCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type ListCredentialsQueryVariables = {
    filter?: ModelCredentialFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListCredentialsQuery = {
    listCredentials?: {
        __typename: 'ModelCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetUserByAddressQueryVariables = {
    wallet?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetUserByAddressQuery = {
    getUserByAddress?: {
        __typename: 'ModelUserConnection';
        items: Array<{
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetUserByUsernameQueryVariables = {
    username?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetUserByUsernameQuery = {
    getUserByUsername?: {
        __typename: 'ModelUserConnection';
        items: Array<{
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetDaoByIdQueryVariables = {
    dao?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelDAOFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetDaoByIdQuery = {
    getDAOById?: {
        __typename: 'ModelDAOConnection';
        items: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetDaoByNameQueryVariables = {
    name?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelDAOFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetDaoByNameQuery = {
    getDAOByName?: {
        __typename: 'ModelDAOConnection';
        items: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetBountyByDaoidQueryVariables = {
    daoID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelBountyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetBountyByDaoidQuery = {
    getBountyByDAOID?: {
        __typename: 'ModelBountyConnection';
        items: Array<{
            __typename: 'Bounty';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            headline: string;
            description?: string | null;
            level: string;
            categories: Array<string | null>;
            reward: string;
            directions?: string | null;
            links: Array<string | null>;
            endDate?: string | null;
            postDate: string;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTokenBenefitByDaoidQueryVariables = {
    daoID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTokenBenefitFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetTokenBenefitByDaoidQuery = {
    getTokenBenefitByDAOID?: {
        __typename: 'ModelTokenBenefitConnection';
        items: Array<{
            __typename: 'TokenBenefit';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            amount?: string | null;
            description: string;
            title: string;
            token?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetChannelByDaoidQueryVariables = {
    daoID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelChannelFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetChannelByDaoidQuery = {
    getChannelByDAOID?: {
        __typename: 'ModelChannelConnection';
        items: Array<{
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetPostsByChannelIdQueryVariables = {
    channelID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelPostFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetPostsByChannelIdQuery = {
    getPostsByChannelID?: {
        __typename: 'ModelPostConnection';
        items: Array<{
            __typename: 'Post';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            channelID?: string | null;
            channel?: {
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            content: string;
            comments?: {
                __typename: 'ModelCommentConnection';
                nextToken?: string | null;
            } | null;
            upvotes?: Array<string> | null;
            downvotes?: Array<string> | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCommentsByPostIdQueryVariables = {
    postID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelCommentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetCommentsByPostIdQuery = {
    getCommentsByPostID?: {
        __typename: 'ModelCommentConnection';
        items: Array<{
            __typename: 'Comment';
            id: string;
            postID: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            content: string;
            upvotes?: Array<string> | null;
            downvotes?: Array<string> | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetGatesByDaoidQueryVariables = {
    daoID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelGateFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetGatesByDaoidQuery = {
    getGatesByDAOID?: {
        __typename: 'ModelGateConnection';
        items: Array<{
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetKeysByGateIdQueryVariables = {
    gateID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelKeyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetKeysByGateIdQuery = {
    getKeysByGateID?: {
        __typename: 'ModelKeyConnection';
        items: Array<{
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetManualTaskSubmissionByUserIdQueryVariables = {
    userID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelManualTaskSubmissionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetManualTaskSubmissionByUserIdQuery = {
    getManualTaskSubmissionByUserID?: {
        __typename: 'ModelManualTaskSubmissionConnection';
        items: Array<{
            __typename: 'ManualTaskSubmission';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            submissionURL?: string | null;
            discordID?: string | null;
            wallet?: string | null;
            comment?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetManualTaskSubmissionByKeyIdQueryVariables = {
    keyID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelManualTaskSubmissionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetManualTaskSubmissionByKeyIdQuery = {
    getManualTaskSubmissionByKeyID?: {
        __typename: 'ModelManualTaskSubmissionConnection';
        items: Array<{
            __typename: 'ManualTaskSubmission';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            submissionURL?: string | null;
            discordID?: string | null;
            wallet?: string | null;
            comment?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetGateStatusByUserIdQueryVariables = {
    userID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelGateStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetGateStatusByUserIdQuery = {
    getGateStatusByUserID?: {
        __typename: 'ModelGateStatusConnection';
        items: Array<{
            __typename: 'GateStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            reward?: {
                __typename: 'GateReward';
                rewardCode: string;
                retrieved: boolean;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            keysDone?: number | null;
            status?: GateStatusList | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetGateStatusByGateIdQueryVariables = {
    gateID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelGateStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetGateStatusByGateIdQuery = {
    getGateStatusByGateID?: {
        __typename: 'ModelGateStatusConnection';
        items: Array<{
            __typename: 'GateStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            reward?: {
                __typename: 'GateReward';
                rewardCode: string;
                retrieved: boolean;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            keysDone?: number | null;
            status?: GateStatusList | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTaskStatusByUserIdQueryVariables = {
    userID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTaskStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetTaskStatusByUserIdQuery = {
    getTaskStatusByUserID?: {
        __typename: 'ModelTaskStatusConnection';
        items: Array<{
            __typename: 'TaskStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            completed?: CompletedState | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTaskStatusByGateIdQueryVariables = {
    gateID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTaskStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetTaskStatusByGateIdQuery = {
    getTaskStatusByGateID?: {
        __typename: 'ModelTaskStatusConnection';
        items: Array<{
            __typename: 'TaskStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            completed?: CompletedState | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetTaskStatusByKeyIdQueryVariables = {
    keyID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTaskStatusFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetTaskStatusByKeyIdQuery = {
    getTaskStatusByKeyID?: {
        __typename: 'ModelTaskStatusConnection';
        items: Array<{
            __typename: 'TaskStatus';
            id: string;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            keyID: string;
            key?: {
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            completed?: CompletedState | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCredentialByIssuerIdQueryVariables = {
    issuerID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelCredentialFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetCredentialByIssuerIdQuery = {
    getCredentialByIssuerID?: {
        __typename: 'ModelCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCredentialByTargetIdQueryVariables = {
    targetID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelCredentialFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetCredentialByTargetIdQuery = {
    getCredentialByTargetID?: {
        __typename: 'ModelCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCredentialByOrganizationIdQueryVariables = {
    organizationID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelCredentialFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetCredentialByOrganizationIdQuery = {
    getCredentialByOrganizationID?: {
        __typename: 'ModelCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type GetCredentialByGateIdQueryVariables = {
    gateID?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelCredentialFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetCredentialByGateIdQuery = {
    getCredentialByGateID?: {
        __typename: 'ModelCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};

export type SearchUsersQueryVariables = {
    filter?: SearchableUserFilterInput | null;
    sort?: SearchableUserSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchUsersQuery = {
    searchUsers?: {
        __typename: 'SearchableUserConnection';
        items: Array<{
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchDaOsQueryVariables = {
    filter?: SearchableDAOFilterInput | null;
    sort?: SearchableDAOSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchDaOsQuery = {
    searchDAOs?: {
        __typename: 'SearchableDAOConnection';
        items: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null>;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchPostsQueryVariables = {
    filter?: SearchablePostFilterInput | null;
    sort?: SearchablePostSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchPostsQuery = {
    searchPosts?: {
        __typename: 'SearchablePostConnection';
        items: Array<{
            __typename: 'Post';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            channelID?: string | null;
            channel?: {
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            userID: string;
            user?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            content: string;
            comments?: {
                __typename: 'ModelCommentConnection';
                nextToken?: string | null;
            } | null;
            upvotes?: Array<string> | null;
            downvotes?: Array<string> | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchGatesQueryVariables = {
    filter?: SearchableGateFilterInput | null;
    sort?: SearchableGateSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchGatesQuery = {
    searchGates?: {
        __typename: 'SearchableGateConnection';
        items: Array<{
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchCredentialsQueryVariables = {
    filter?: SearchableCredentialFilterInput | null;
    sort?: SearchableCredentialSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchCredentialsQuery = {
    searchCredentials?: {
        __typename: 'SearchableCredentialConnection';
        items: Array<{
            __typename: 'Credential';
            id: string;
            issuerID: string;
            issuer?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            targetID: string;
            target?: {
                __typename: 'User';
                id: string;
                wallet: string;
                username?: string | null;
                name?: string | null;
                bio?: string | null;
                daos_ids?: Array<string | null> | null;
                init?: boolean | null;
                nonce: number;
                pfp?: string | null;
                about?: string | null;
                skills?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                languages?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null;
            gateID?: string | null;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            organizationID?: string | null;
            organization?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            image?: string | null;
            pow?: Array<string | null> | null;
            skills?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            ceramicStream: string;
            createdAt?: string | null;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type OnCreateUserSubscription = {
    onCreateUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnUpdateUserSubscription = {
    onUpdateUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnDeleteUserSubscription = {
    onDeleteUser?: {
        __typename: 'User';
        id: string;
        wallet: string;
        username?: string | null;
        name?: string | null;
        bio?: string | null;
        daos_ids?: Array<string | null> | null;
        daos?: Array<{
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null> | null;
        init?: boolean | null;
        nonce: number;
        pfp?: string | null;
        about?: string | null;
        skills?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        languages?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        gates?: {
            __typename: 'ModelGateStatusConnection';
            items: Array<{
                __typename: 'GateStatus';
                id: string;
                userID: string;
                gateID: string;
                keysDone?: number | null;
                status?: GateStatusList | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        credentials?: {
            __typename: 'ModelCredentialConnection';
            items: Array<{
                __typename: 'Credential';
                id: string;
                issuerID: string;
                targetID: string;
                gateID?: string | null;
                organizationID?: string | null;
                name: string;
                description: string;
                image?: string | null;
                pow?: Array<string | null> | null;
                skills?: Array<string | null> | null;
                knowledges?: Array<string | null> | null;
                attitudes?: Array<string | null> | null;
                ceramicStream: string;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnCreateDaoSubscription = {
    onCreateDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnUpdateDaoSubscription = {
    onUpdateDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnDeleteDaoSubscription = {
    onDeleteDAO?: {
        __typename: 'DAO';
        id: string;
        dao: string;
        name: string;
        faq?: Array<{
            __typename: 'FAQ';
            question: string;
            answer: string;
        } | null> | null;
        accomplishments?: string | null;
        snapshotID?: string | null;
        backgroundURL: string;
        youtubeURL?: string | null;
        logoURL: string;
        bounties?: {
            __typename: 'ModelBountyConnection';
            items: Array<{
                __typename: 'Bounty';
                id: string;
                daoID: string;
                headline: string;
                description?: string | null;
                level: string;
                categories: Array<string | null>;
                reward: string;
                directions?: string | null;
                links: Array<string | null>;
                endDate?: string | null;
                postDate: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        categories: Array<string | null>;
        tags?: Array<string | null> | null;
        description: string;
        howToJoin?: Array<string | null> | null;
        missionAndVision?: string | null;
        whatDoWeDo?: string | null;
        tokenBenefits?: {
            __typename: 'ModelTokenBenefitConnection';
            items: Array<{
                __typename: 'TokenBenefit';
                id: string;
                daoID: string;
                amount?: string | null;
                description: string;
                title: string;
                token?: string | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upcomingHangouts?: string | null;
        tokenAddress?: string | null;
        whitelistedAddresses?: Array<string> | null;
        socials?: Array<{
            __typename: 'Social';
            network: string;
            url: string;
        } | null> | null;
        chains?: Array<string | null> | null;
        channels?: {
            __typename: 'ModelChannelConnection';
            items: Array<{
                __typename: 'Channel';
                id: string;
                name: string;
                daoID: string;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        gates?: {
            __typename: 'ModelGateConnection';
            items: Array<{
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        nftContracts?: {
            __typename: 'NFTContracts';
            reward?: string | null;
            contributor?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnCreateBountySubscription = {
    onCreateBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateBountySubscription = {
    onUpdateBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteBountySubscription = {
    onDeleteBounty?: {
        __typename: 'Bounty';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        headline: string;
        description?: string | null;
        level: string;
        categories: Array<string | null>;
        reward: string;
        directions?: string | null;
        links: Array<string | null>;
        endDate?: string | null;
        postDate: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateTokenBenefitSubscription = {
    onCreateTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateTokenBenefitSubscription = {
    onUpdateTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteTokenBenefitSubscription = {
    onDeleteTokenBenefit?: {
        __typename: 'TokenBenefit';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        amount?: string | null;
        description: string;
        title: string;
        token?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateChannelSubscription = {
    onCreateChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateChannelSubscription = {
    onUpdateChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteChannelSubscription = {
    onDeleteChannel?: {
        __typename: 'Channel';
        id: string;
        name: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        posts?: {
            __typename: 'ModelPostConnection';
            items: Array<{
                __typename: 'Post';
                id: string;
                daoID: string;
                channelID?: string | null;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreatePostSubscription = {
    onCreatePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnUpdatePostSubscription = {
    onUpdatePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnDeletePostSubscription = {
    onDeletePost?: {
        __typename: 'Post';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        channelID?: string | null;
        channel?: {
            __typename: 'Channel';
            id: string;
            name: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            posts?: {
                __typename: 'ModelPostConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        comments?: {
            __typename: 'ModelCommentConnection';
            items: Array<{
                __typename: 'Comment';
                id: string;
                postID: string;
                userID: string;
                content: string;
                upvotes?: Array<string> | null;
                downvotes?: Array<string> | null;
                createdAt?: string | null;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnCreateCommentSubscription = {
    onCreateComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnUpdateCommentSubscription = {
    onUpdateComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnDeleteCommentSubscription = {
    onDeleteComment?: {
        __typename: 'Comment';
        id: string;
        postID: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        content: string;
        upvotes?: Array<string> | null;
        downvotes?: Array<string> | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnCreateGateSubscription = {
    onCreateGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateGateSubscription = {
    onUpdateGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteGateSubscription = {
    onDeleteGate?: {
        __typename: 'Gate';
        id: string;
        daoID: string;
        dao?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        categories?: Array<string> | null;
        skills?: Array<string> | null;
        knowledge?: Array<string> | null;
        attitudes?: Array<string> | null;
        admins: Array<string | null>;
        keysNumber?: number | null;
        keys?: {
            __typename: 'ModelKeyConnection';
            items: Array<{
                __typename: 'Key';
                id: string;
                gateID: string;
                token?: string | null;
                tokenAmount?: number | null;
                keys: number;
                unlimited: boolean;
                peopleLimit: number;
                createdAt: string;
                updatedAt: string;
            } | null>;
            nextToken?: string | null;
        } | null;
        published?: PublishedState | null;
        badge: {
            __typename: 'NFTInfo';
            nftURL?: string | null;
            ipfsURL?: string | null;
            name: string;
        };
        preRequisites?: {
            __typename: 'PreRequisites';
            completedGates?: Array<string | null> | null;
        } | null;
        retroactiveEarners?: Array<string> | null;
        links: Array<{
            __typename: 'Link';
            name: string;
            link: string;
        } | null>;
        holders: number;
        nftType?: NFTType | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateKeySubscription = {
    onCreateKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateKeySubscription = {
    onUpdateKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteKeySubscription = {
    onDeleteKey?: {
        __typename: 'Key';
        id: string;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        information: Array<{
            __typename: 'KeyInformation';
            title: string;
            description: string;
        } | null>;
        token?: string | null;
        tokenAmount?: number | null;
        keys: number;
        unlimited: boolean;
        peopleLimit: number;
        task:
            | (
                  | {
                        __typename: 'Quiz';
                        type?: TaskType | null;
                        title: string;
                        description: string;
                        questions: Array<{
                            __typename: string;
                            question: string;
                            nrOfCorrectAnswers?: number | null;
                        } | null>;
                        passedAt: number;
                    }
                  | {
                        __typename: 'MeetingCode';
                        type?: TaskType | null;
                        code: string;
                        caseSensitive: boolean;
                    }
                  | {
                        __typename: 'TokenHold';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        amount: number;
                    }
                  | {
                        __typename: 'SelfVerify';
                        type?: TaskType | null;
                    }
                  | {
                        __typename: 'SnapshotGovernance';
                        type?: TaskType | null;
                        snapshotType?: SnapshotType | null;
                        spaceID: string;
                        proposal?: string | null;
                    }
                  | {
                        __typename: 'ContractInteraction';
                        type?: TaskType | null;
                        chainID: number;
                        address: string;
                        methodName?: string | null;
                    }
                  | {
                        __typename: 'ManualTask';
                        type?: TaskType | null;
                        information: Array<{
                            __typename: string;
                            title: string;
                            description: string;
                        } | null>;
                    }
              )
            | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateManualTaskSubmissionSubscription = {
    onCreateManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateManualTaskSubmissionSubscription = {
    onUpdateManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteManualTaskSubmissionSubscription = {
    onDeleteManualTaskSubmission?: {
        __typename: 'ManualTaskSubmission';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        submissionURL?: string | null;
        discordID?: string | null;
        wallet?: string | null;
        comment?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateGateStatusSubscription = {
    onCreateGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnUpdateGateStatusSubscription = {
    onUpdateGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnDeleteGateStatusSubscription = {
    onDeleteGateStatus?: {
        __typename: 'GateStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        reward?: {
            __typename: 'GateReward';
            rewardCode: string;
            retrieved: boolean;
        } | null;
        tasks?: {
            __typename: 'ModelTaskStatusConnection';
            items: Array<{
                __typename: 'TaskStatus';
                id: string;
                userID: string;
                gateID: string;
                keyID: string;
                completed?: CompletedState | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null>;
            nextToken?: string | null;
        } | null;
        keysDone?: number | null;
        status?: GateStatusList | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnCreateTaskStatusSubscription = {
    onCreateTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnUpdateTaskStatusSubscription = {
    onUpdateTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnDeleteTaskStatusSubscription = {
    onDeleteTaskStatus?: {
        __typename: 'TaskStatus';
        id: string;
        userID: string;
        user?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID: string;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        keyID: string;
        key?: {
            __typename: 'Key';
            id: string;
            gateID: string;
            gate?: {
                __typename: 'Gate';
                id: string;
                daoID: string;
                name: string;
                description: string;
                categories?: Array<string> | null;
                skills?: Array<string> | null;
                knowledge?: Array<string> | null;
                attitudes?: Array<string> | null;
                admins: Array<string | null>;
                keysNumber?: number | null;
                published?: PublishedState | null;
                retroactiveEarners?: Array<string> | null;
                holders: number;
                nftType?: NFTType | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            information: Array<{
                __typename: 'KeyInformation';
                title: string;
                description: string;
            } | null>;
            token?: string | null;
            tokenAmount?: number | null;
            keys: number;
            unlimited: boolean;
            peopleLimit: number;
            task:
                | (
                      | {
                            __typename: 'Quiz';
                            type?: TaskType | null;
                            title: string;
                            description: string;
                            passedAt: number;
                        }
                      | {
                            __typename: 'MeetingCode';
                            type?: TaskType | null;
                            code: string;
                            caseSensitive: boolean;
                        }
                      | {
                            __typename: 'TokenHold';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            amount: number;
                        }
                      | {
                            __typename: 'SelfVerify';
                            type?: TaskType | null;
                        }
                      | {
                            __typename: 'SnapshotGovernance';
                            type?: TaskType | null;
                            snapshotType?: SnapshotType | null;
                            spaceID: string;
                            proposal?: string | null;
                        }
                      | {
                            __typename: 'ContractInteraction';
                            type?: TaskType | null;
                            chainID: number;
                            address: string;
                            methodName?: string | null;
                        }
                      | {
                            __typename: 'ManualTask';
                            type?: TaskType | null;
                        }
                  )
                | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        completed?: CompletedState | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnCreateCredentialSubscription = {
    onCreateCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnUpdateCredentialSubscription = {
    onUpdateCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};

export type OnDeleteCredentialSubscription = {
    onDeleteCredential?: {
        __typename: 'Credential';
        id: string;
        issuerID: string;
        issuer?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        targetID: string;
        target?: {
            __typename: 'User';
            id: string;
            wallet: string;
            username?: string | null;
            name?: string | null;
            bio?: string | null;
            daos_ids?: Array<string | null> | null;
            daos?: Array<{
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null> | null;
            init?: boolean | null;
            nonce: number;
            pfp?: string | null;
            about?: string | null;
            skills?: Array<string | null> | null;
            attitudes?: Array<string | null> | null;
            languages?: Array<string | null> | null;
            knowledges?: Array<string | null> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            gates?: {
                __typename: 'ModelGateStatusConnection';
                nextToken?: string | null;
            } | null;
            tasks?: {
                __typename: 'ModelTaskStatusConnection';
                nextToken?: string | null;
            } | null;
            credentials?: {
                __typename: 'ModelCredentialConnection';
                nextToken?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt: string;
        } | null;
        gateID?: string | null;
        gate?: {
            __typename: 'Gate';
            id: string;
            daoID: string;
            dao?: {
                __typename: 'DAO';
                id: string;
                dao: string;
                name: string;
                accomplishments?: string | null;
                snapshotID?: string | null;
                backgroundURL: string;
                youtubeURL?: string | null;
                logoURL: string;
                categories: Array<string | null>;
                tags?: Array<string | null> | null;
                description: string;
                howToJoin?: Array<string | null> | null;
                missionAndVision?: string | null;
                whatDoWeDo?: string | null;
                upcomingHangouts?: string | null;
                tokenAddress?: string | null;
                whitelistedAddresses?: Array<string> | null;
                chains?: Array<string | null> | null;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null;
            name: string;
            description: string;
            categories?: Array<string> | null;
            skills?: Array<string> | null;
            knowledge?: Array<string> | null;
            attitudes?: Array<string> | null;
            admins: Array<string | null>;
            keysNumber?: number | null;
            keys?: {
                __typename: 'ModelKeyConnection';
                nextToken?: string | null;
            } | null;
            published?: PublishedState | null;
            badge: {
                __typename: 'NFTInfo';
                nftURL?: string | null;
                ipfsURL?: string | null;
                name: string;
            };
            preRequisites?: {
                __typename: 'PreRequisites';
                completedGates?: Array<string | null> | null;
            } | null;
            retroactiveEarners?: Array<string> | null;
            links: Array<{
                __typename: 'Link';
                name: string;
                link: string;
            } | null>;
            holders: number;
            nftType?: NFTType | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        organizationID?: string | null;
        organization?: {
            __typename: 'DAO';
            id: string;
            dao: string;
            name: string;
            faq?: Array<{
                __typename: 'FAQ';
                question: string;
                answer: string;
            } | null> | null;
            accomplishments?: string | null;
            snapshotID?: string | null;
            backgroundURL: string;
            youtubeURL?: string | null;
            logoURL: string;
            bounties?: {
                __typename: 'ModelBountyConnection';
                nextToken?: string | null;
            } | null;
            categories: Array<string | null>;
            tags?: Array<string | null> | null;
            description: string;
            howToJoin?: Array<string | null> | null;
            missionAndVision?: string | null;
            whatDoWeDo?: string | null;
            tokenBenefits?: {
                __typename: 'ModelTokenBenefitConnection';
                nextToken?: string | null;
            } | null;
            upcomingHangouts?: string | null;
            tokenAddress?: string | null;
            whitelistedAddresses?: Array<string> | null;
            socials?: Array<{
                __typename: 'Social';
                network: string;
                url: string;
            } | null> | null;
            chains?: Array<string | null> | null;
            channels?: {
                __typename: 'ModelChannelConnection';
                nextToken?: string | null;
            } | null;
            gates?: {
                __typename: 'ModelGateConnection';
                nextToken?: string | null;
            } | null;
            nftContracts?: {
                __typename: 'NFTContracts';
                reward?: string | null;
                contributor?: string | null;
            } | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        name: string;
        description: string;
        image?: string | null;
        pow?: Array<string | null> | null;
        skills?: Array<string | null> | null;
        knowledges?: Array<string | null> | null;
        attitudes?: Array<string | null> | null;
        ceramicStream: string;
        createdAt?: string | null;
        updatedAt: string;
    } | null;
};
