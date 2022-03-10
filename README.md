![gateway-web](https://www.mygateway.xyz/social.png)

# Gateway Project - Web Repository

![gateway-twitter](https://img.shields.io/twitter/follow/Gateway_DAO?style=social)

**Gateway** is the largest professional decentralized networking platform. Leveraging open and collaborative infrastructure, Gateway helps Web3 users to onboard into their favorite communities, build out their decentralized resumes, and begin developing credentials across the ecosystem. Users receive membership NFTs, reward NFTs, and community verified skills and competencies from DAOs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [AWS Amplify](https://aws.amazon.com/amplify/), [Apollo Client](https://www.apollographql.com/apollo-client), [Ceramic](https://ceramic.network), and other tools.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Runs unit tests written for React components. Currently, no testing units are written for the project, although you can write them at any moment following the section about [testing](https://reactjs.org/docs/testing.html).

### `yarn lint`

Lints the written code, so it is compliant with Gateway's ESLint/Prettier configurations.\
This makes the code easier to read, more efficient and organized.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Local environment - instructions to build

**Note:** since Gateway currently relies on AWS Amplify for backend management, you will only be able to successfully build the project on your machine if you have permissions within Gateway's team to access our AWS console. Make sure the team has provided you an `Access Key ID` and `Access Key Secret`.

### 1. install `npm i -g @aws-amplify/cli`

If you haven't installed Amplify already, please make sure you have it globally installed on your machine by running `npm i -g @aws-amplify/cli`. This way, you will be able to run Amplify successfully and initialize the project.

### 2. configure Amplify with `amplify init`

Within the project's repository (assuming it's already cloned into your machine), run `amplify init`. It will ask your for some inputs.

1. Environment selection

        ? Do you want to use an existing environment? (Y/n)

    Select `yes`/`y`.

        ? Choose the environment you would like to use: (Use arrow keys)
        ❯ dev
        main
    
    Please select *dev*, or else you might not be able to run the environment correctly.

2. Default editor

        ? Choose your default editor: (Use arrow keys)
        ❯ Visual Studio Code
        Android Studio
        Xcode (macOS only)
        Atom Editor
        Sublime Text
        IntelliJ IDEA
        Vim (via Terminal, macOS only)

    Choose the editor that you intend to use with the repository/Amplify. No specific editor required: it's a matter of personal preference.

3. Authentication method

        ? Select the authentication method you want to use:
        AWS profile
        ❯ AWS access keys

    Please select `AWS access keys`, so you can use the provided keys to login to AWS and use Amplify's capabilities.

    **Note:** if you don't have these credentials, you've probably not supposed to - these keys are only issued to Gateway's core contributors at this stage. However, if you were supposed to have these keys, or want to contribute to the project, please [join our Discord](https://discord.com/invite/78wuJuKFVK) and contact `Sanket#8142` or `MasterStarkk#4282`.

4. Region

        ? region:  (Use arrow keys)
        ❯ us-east-1
        us-east-2
        us-west-1
        us-west-2
        eu-north-1
        eu-west-1
        eu-west-2

    Please select North Virginia's region, `us-east-1`.

### 3. run `yarn` and `yarn start`

You need to install all the required packages with `yarn`. It might take some minutes.

After all the packages are installed on your machine, you're ready to execute the local environment. Please use `yarn start` so you can get execute a local version of Gateway's frontend on your machine.

### Some considerations

- you can *mock* the backend locally by using `amplify mock`. However, some services like [AWS OpenSearch](https://aws.amazon.com/opensearch-service/the-elk-stack/what-is-opensearch/) won't work.
- to outside contributors: always PR your changes with an extensive description on how they're improving the project, as well as a technical description for new functionalities and/or tech stacks.

## Troubleshooting

- For questions, support, and discussions: [Join the Gateway Discord](https://discord.com/invite/78wuJuKFVK)
- For bugs and feature requests: [Create an issue on Github](https://github.com/Gateway-DAO/gateway-web)

## Maintainers

- [Gateway Team](https://github.com/orgs/Gateway-DAO/people)