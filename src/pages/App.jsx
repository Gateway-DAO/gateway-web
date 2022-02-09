import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

import Home from './Home'
import FallbackPage from './FallbackPage'
import Page from '../components/Page'
import Page404 from './404'

// DAO
import DAOHome from '../pages/DAO/pages/Home'

// Gate
import DaoGate from '../pages/Gate/pages/DaoGate'
import DaoGateWithKeys from '../pages/Gate/pages/DaoGateWithKeys'
import DAOsGate from './DAOsGate'
import GateSuccessPage from './GateSuccessPage'

// Keys
import AddGovernanceSnapshot from '../pages/Gate/pages/AddNewKey/pages/AddGovernanceSnapshot'
import AddHoldToken from '../pages/Gate/pages/AddNewKey/pages/AddHoldToken'
import AddMeetingCode from '../pages/Gate/pages/AddNewKey/pages/AddMeetingCode'
import AddKeySuccess from '../pages/Gate/pages/AddNewKey/pages/AddKeySuccess'
import AddManualTask from '../pages/Gate/pages/AddNewKey/pages/AddManualTask'
import AddNewKeyHome from '../pages/Gate/pages/AddNewKey/pages/Home'
import KeyCompletedPage from './KeyCompleted'

// Profile
import AddExperience from '../pages/AddExperience'
import NewQuiz from './Gate/pages/DaoGate/components/KeyBox/components/Quiz/NewQuiz'

const DAO = React.lazy(() => import('./DAO'))
const Gate = React.lazy(() => import('./Gate'))
const AddNewKey = React.lazy(() => import('./Gate/pages/AddNewKey'))
const Search = React.lazy(() => import('./Search'))
const ProfilePage = React.lazy(() => import('./ProfilePage'))
const SignIn = React.lazy(() => import('./SignIn'))
const CreateProfile = React.lazy(() => import('./CreateProfile'))
const AboutDAOs = React.lazy(() => import('./AboutDAOs'))
const About = React.lazy(() => import('./About'))
const AddCommunity = React.lazy(() => import('./AddCommunity'))
const SubmitPage = React.lazy(() => import('./AddCommunity/submitPage'))
const KeyQuiz = React.lazy(() => import('./Quiz'))
const AddNewGate = React.lazy(() => import('./DAO/pages/AddNewGate'))
const AddLinks = React.lazy(() => import('./Gate/pages/AddLinks'))

const App = (props) => {
    return (
        <Router>
            <React.Suspense fallback={<FallbackPage />}>
                <ScrollToTop>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/what-are-daos" element={<AboutDAOs />} />

                        {/* Add New Key Routes start */}
                        <Route
                            path="/profile/add-experience"
                            element={<AddExperience />}
                        />

                        <Route path="dao/:id" element={<DAO />}>
                            <Route index element={<DAOHome />} />
                            <Route path="add-gate" element={<AddNewGate />} />
                            <Route path="edit-gate" element={<AddNewGate />} />
                        </Route>


                        <Route path="gate/:gate" element={<Gate />}>
                            <Route index element={<DaoGate />} />
                            <Route path="quiz/:id" element={<NewQuiz />} />
                            <Route path="add-links" element={<AddLinks />} />
                            <Route path="add-key" element={<AddNewKey />}>
                                <Route index element={<AddNewKeyHome />} />
                                <Route
                                    path="token"
                                    element={<AddHoldToken />}
                                />
                                <Route
                                    path="manual"
                                    element={<AddManualTask />}
                                />
                                <Route
                                    path="governance"
                                    element={<AddGovernanceSnapshot />}
                                />

                                <Route
                                    path="success"
                                    element={<AddKeySuccess />}
                                />
                                <Route path="quiz" element={<KeyQuiz />} />

                                <Route
                                    path="meeting-code"
                                    element={<AddMeetingCode />}
                                />
                            </Route>
                        </Route>

                        <Route
                            path="key-completed"
                            element={<KeyCompletedPage />}
                        />

                        <Route path="/search/:query" element={<Search />} />
                        <Route path="/profile/" element={<ProfilePage />}>
                            <Route
                                path=":searchTerm"
                                element={<ProfilePage />}
                            />
                        </Route>
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route
                            path="/create-profile"
                            element={<CreateProfile />}
                        />
                        <Route
                            path="/add-community"
                            element={<AddCommunity />}
                        />
                        <Route
                            path="/new-community/:name"
                            element={<SubmitPage />}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </ScrollToTop>
            </React.Suspense>
        </Router>
    )
}

export default App
