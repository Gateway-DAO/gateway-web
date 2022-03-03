import React from 'react';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import Select from 'react-select';
import {
    Container,
    Button,
    Form,
    Row,
    FormGroup,
    FormControl,
    ControlLabel,
    Col
} from 'react-bootstrap';
import './AddLanguage.css';
import { connect } from 'react-redux';
// import { addLang } from "../../actions";
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

class AddLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            selectedLangs: [],
            options: [
                { value: 'portuguese', label: 'Portuguese' },
                { value: 'polish', label: 'Polish' },
                { value: 'persian', label: 'Persian' },
                { value: 'punjabi', label: 'Punjabi' }
            ],
            suggestedLangs: [
                { value: 'English', label: 'English' },
                { value: 'Spanish', label: 'Spanish' },
                { value: 'Chinese', label: 'Chinese' },
                { value: 'Dutch', label: 'Dutch' },
                { value: 'Arabic', label: 'Arabic' },
                { value: 'German', label: 'German' },
                { value: 'Japanese', label: 'Japanese' },
                { value: 'Punjabi', label: 'Punjabi' },
                { value: 'French', label: 'French' },
                { value: 'Italian', label: 'Italian' }
            ]
        }

        this.removeLang = this.removeLang.bind(this);
        this.addSuggestedLang = this.addSuggestedLang.bind(this);
    }

    componentDidMount() {
        var existing = localStorage.getItem('gtwUserState');
        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? JSON.parse(existing) : {};
        // Add new data to localStorage Array
        this.setState({ selectedLangs: existing.langs });
        space(window.innerHeight, window.innerWidth,
            [window.innerHeight, window.innerWidth])
    }

    removeLang = (val) => {
        this.setState({
            selectedLangs: this.state.selectedLangs.filter((previousTag, index) => previousTag.value !== val)
        });
    };

    handleChange = selectedLangs => {
        this.setState({ selectedLangs });
    };

    handleCheck(val) {
        const { selectedLangs } = this.state;
        if (selectedLangs === undefined) {
            this.setState({ selectedLangs: [] });
            return false;
        } else {
            return this.state.selectedLangs.some(item => val === item.value);
        }
    }

    addSuggestedLang = lang => {

        if (this.handleCheck(lang) == false) {
            this.setState(prevState => ({
                selectedLangs: [...prevState.selectedLangs, {
                    value: lang,
                    label: lang,
                }]
            }));
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.setUserLang(this.state.selectedLangs);

        var existing = localStorage.getItem('gtwUserState');
        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? JSON.parse(existing) : {};
        // Add new data to localStorage Array
        Object.assign(existing, { langs: this.state.selectedLangs });
        // Save back to localStorage
        localStorage.setItem('gtwUserState', JSON.stringify(existing));
        this.setState({ redirect: true });

    };

    render() {
        if (this.state.redirect) {
            return <Navigate to="/profiles" />
        }

        const { selectedLangs, suggestedLangs } = this.state;
        return (
            <div className="main-about-section">
                <Header />
                <canvas id="space-canvas"></canvas>
                <Container>
                    <div className="back-link">
                        <Link to="/profiles">
                            <div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
                            <p>Back to Profile</p>
                        </Link>
                    </div>
                </Container>
                <div className="gt-about-section">
                    <Container>
                        <h1>Languages</h1>
                    </Container>
                </div>
                <div className="suggested-skills">
                    <Container>
                        <div className="suggested-inner-skills">
                            <Form method="post" noValidate onSubmit={this.handleSubmit}>
                                <Form.Group as={Col} controlId="formGridLang">
                                    <Form.Label>Add your Languages</Form.Label>
                                    <Select
                                        hideSelectedOptions={false}
                                        controlShouldRenderValue={false}
                                        isMulti
                                        options={this.state.options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={this.handleChange}
                                        value={selectedLangs}
                                        placeholder="Search"
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: 'blue',
                                                primary: 'darkblue',
                                            },
                                        })}
                                    />
                                    <div className="selected-options">
                                        {
                                            !!selectedLangs && selectedLangs.length > 0 && selectedLangs.map(item =>
                                                <p key={item.label}>{item.label}
                                                    <span onClick={this.removeLang.bind(this, item.value)} className="selectClose">
                                                        <img src="/cancel-icon.svg" alt="" />
                                                    </span>
                                                </p>
                                            )}
                                    </div>
                                </Form.Group>
                                <h4>Suggested skills based on your profile</h4>
                                <ul>
                                    {
                                        suggestedLangs.length > 0 && suggestedLangs.map(item =>
                                            <li onClick={this.addSuggestedLang.bind(this, item.value)} key={item.label}>{item.label}</li>
                                        )
                                    }
                                </ul>
                                <Button variant="primary" type="submit">save</Button>{' '}
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userLang: state.selectedLangs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUserLang: (userLang) => {
            dispatch({ type: "SET_USER_LANG", payload: userLang })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLanguage);