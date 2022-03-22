import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Home from './Home';
import FallbackPage from './FallbackPage';
import Page404 from './404';

// DAO
import DAOHome from './DAO/pages/Home';

// Gate
import DaoGate from './Gate/pages/DaoGate';
import GateSuccessPage from './Gate/pages/GateSuccessPage';

// Keys
import AddGovernanceSnapshot from './Gate/pages/AddNewKey/pages/AddGovernanceSnapshot';
import AddHoldToken from './Gate/pages/AddNewKey/pages/AddHoldToken';
import AddMeetingCode from './Gate/pages/AddNewKey/pages/AddMeetingCode';
import AddKeySuccess from './Gate/pages/AddNewKey/pages/AddKeySuccess';
import AddManualTask from './Gate/pages/AddNewKey/pages/AddManualTask';
import AddNewKeyHome from './Gate/pages/AddNewKey/pages/Home';
import AddContractInteraction from './Gate/pages/AddNewKey/pages/AddContractInteraction';
import KeyCompletedPage from './Gate/pages/KeyCompleted';

// Profile
import AddExperience from './AddExperience';
import NewQuiz from './Gate/pages/DaoGate/components/KeyBox/components/Quiz/NewQuiz';

const DAO = React.lazy(() => import('./DAO'));
const Gate = React.lazy(() => import('./Gate'));
const AddNewKey = React.lazy(() => import('./Gate/pages/AddNewKey'));
const Search = React.lazy(() => import('./Search/index'));
const ProfilePage = React.lazy(() => import('./ProfilePage'));
const SignIn = React.lazy(() => import('./SignIn'));
const CreateProfile = React.lazy(() => import('./CreateProfile'));
const AboutDAOs = React.lazy(() => import('./AboutDAOs'));
const About = React.lazy(() => import('./About'));
const AddCommunity = React.lazy(() => import('./AddCommunity'));
const SubmitPage = React.lazy(() => import('./AddCommunity/submitPage'));
const KeyQuiz = React.lazy(() => import('./Quiz'));
const AddNewGate = React.lazy(() => import('./DAO/pages/AddNewGate'));
const AddLinks = React.lazy(() => import('./Gate/pages/AddLinks'));

const App: React.FC = () => {
    return (
        <Router>
            <React.Suspense fallback={<FallbackPage />}>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-us' element={<About />} />
                        <Route path='/what-are-daos' element={<AboutDAOs />} />

                        {/* Add New Key Routes start */}
                        <Route
                            path='/profile/add-experience'
                            element={<AddExperience />}
                        />

                        {/* DAO Routes */}
                        <Route path='dao/:id' element={<DAO />}>
                            <Route index element={<DAOHome />} />
                            <Route path='add-gate' element={<AddNewGate />} />
                            <Route path='edit-gate' element={<AddNewGate />} />
                        </Route>

                        {/* Gate Routes */}
                        <Route path='gate/:gate' element={<Gate />}>
                            <Route index element={<DaoGate />} />
                            <Route path='quiz/:id' element={<NewQuiz />} />
                            <Route path='add-links' element={<AddLinks />} />
                            <Route
                                path='edit-links'
                                element={<AddLinks edit />}
                            />
                            <Route path='add-key' element={<AddNewKey />}>
                                <Route index element={<AddNewKeyHome />} />
                                <Route
                                    path='token'
                                    element={<AddHoldToken />}
                                />
                                <Route
                                    path='manual'
                                    element={<AddManualTask />}
                                />
                                <Route
                                    path='governance'
                                    element={<AddGovernanceSnapshot />}
                                />
                                <Route
                                    path='sc-interaction'
                                    element={<AddContractInteraction />}
                                />
                                <Route
                                    path='success'
                                    element={<AddKeySuccess />}
                                />
                                <Route path='quiz' element={<KeyQuiz />} />

                                <Route
                                    path='meeting-code'
                                    element={<AddMeetingCode />}
                                />
                            </Route>

                            <Route path='edit-key' element={<AddNewKey edit />}>
                                <Route index element={<AddNewKeyHome />} />
                                <Route
                                    path='token-hold'
                                    element={<AddHoldToken />}
                                />
                                <Route
                                    path='manual'
                                    element={<AddManualTask />}
                                />
                                <Route
                                    path='snapshot-governance'
                                    element={<AddGovernanceSnapshot />}
                                />
                                <Route
                                    path='contract-interaction'
                                    element={<AddContractInteraction />}
                                />
                                <Route
                                    path='success'
                                    element={<AddKeySuccess />}
                                />
                                <Route path='quiz' element={<KeyQuiz />} />

                                <Route
                                    path='meeting-code'
                                    element={<AddMeetingCode />}
                                />
                            </Route>

                            <Route
                                path='gate-success'
                                element={<GateSuccessPage />}
                            />

                            <Route
                                path='key-completed'
                                element={<KeyCompletedPage />}
                            />
                        </Route>

                        <Route path='/search/:query' element={<Search />} />
                        <Route path='/profile/' element={<ProfilePage />}>
                            <Route
                                path=':searchTerm'
                                element={<ProfilePage />}
                            />
                        </Route>
                        <Route path='/sign-in' element={<SignIn />} />
                        <Route
                            path='/create-profile'
                            element={<CreateProfile />}
                        />
                        <Route
                            path='/add-community'
                            element={<AddCommunity />}
                        />
                        <Route
                            path='/new-community/:name'
                            element={<SubmitPage />}
                        />

                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </ScrollToTop>
            </React.Suspense>
        </Router>
    );
};

export default App;
