import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import FallbackPage from './FallbackPage'
import Page404 from './404'
import DaoGate from '../components/BigCard/components/Gates/DaoGate'
import DaoGateWithKeys from '../components/BigCard/components/Gates/DaoGateWithKeys'
import AddExperience from '../pages/AddExperience'
import AddGovernanceSnapshopt from '../pages/AddNewKey/AddGovernanceSnapshot'
import AddHoldToken from '../pages/AddNewKey/AddHoldToken'
import AddKeySuccess from '../pages/AddNewKey/AddKeySuccess'
import AddNewKey from '../pages/AddNewKey'
import DAOsGate from './DAOsGate'
import GateSuccessPage from './GateSuccessPage'
import AddManualTask from './AddNewKey/AddManualTask'
const DAO = React.lazy(() => import('./DAO'))
const Search = React.lazy(() => import('./Search'))
const ProfilePage = React.lazy(() => import('./ProfilePage'))
const SignIn = React.lazy(() => import('./SignIn'))
const CreateProfile = React.lazy(() => import('./CreateProfile'))
const AboutDAOs = React.lazy(() => import('./AboutDAOs'))
const About = React.lazy(() => import('./About'))
const AddCommunity = React.lazy(() => import('./AddCommunity'))
const SubmitPage = React.lazy(() => import('./AddCommunity/submitPage'))
const KeyQuiz = React.lazy(() => import('./Quiz'))
const AddGateForm = React.lazy(() => import('./AddGateForm'))

const App = (props) => {
    return (
        <Router>
            <React.Suspense fallback={<FallbackPage />}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/what-are-daos" element={<AboutDAOs />} />
                    <Route path="/dao/forefront/gate" element={<DaoGate />} />
                    <Route
                        path="/dao/forefront/gatewithkeys"
                        element={<DaoGateWithKeys />}
                    />
                    {/* Add New Key Routes start */}
                    <Route
                        path="/profile/add-experience"
                        element={<AddExperience />}
                    />

                    {/* TODO: make this compliant with V6 */}
                    <Route path="dao/:id" element={<DAO />} />
                    <Route path="dao/:id/add-gate" element={<AddGateForm />} />
                    <Route path="/dao/:id/add-key" element={<AddNewKey />} />
                    <Route
                        path="/dao/:id/add-key/token"
                        element={<AddHoldToken />}
                    />
                    <Route
                        path="/dao/:id/add-key/manual"
                        element={<AddManualTask />}
                    />
                    <Route
                        path="/dao/:id/add-key/governance"
                        element={<AddGovernanceSnapshopt />}
                    />
                    <Route
                        path="/dao/:id/add-key/success"
                        element={<AddKeySuccess />}
                    />

                    <Route path="/search/:query" element={<Search />} />
                    <Route path="/profile/" element={<ProfilePage />}>
                        <Route path=":searchTerm" element={<ProfilePage />} />
                    </Route>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/create-profile" element={<CreateProfile />} />
                    <Route path="/add-community" element={<AddCommunity />} />
                    <Route
                        path="/new-community/:name"
                        element={<SubmitPage />}
                    />
                    <Route path="/dao-gate" element={<DAOsGate />} />
                    <Route path="/add-gate" element={<AddGateForm />} />
                    <Route path="/key-quiz" element={<KeyQuiz />} />
                    <Route path="/testing" element={<GateSuccessPage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </React.Suspense>
        </Router>
    )
}

export default App
