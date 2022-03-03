import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from "../../components/Header/index";
import ProfileUpdate from "./components/profileUpdate/ProfileUpdate";
import AddAbout from "./components/addAbout/AddAbout";
import AddExperiences from "./components/addExperiences/AddExperiences";
import AddLanguage from "./components/addLanguage/AddLanguage";
import AddSkill from "./components/addSkill/AddSkill";
import CompleteProfile from "./components/completeProfile/CompleteProfile";
import AddKnowledge from "./components/addKnowledge/AddKnowledge";
import AddAttitude from "./components/addAttitude/AddAttitude";

export { ProfileUpdate, AddAbout, AddExperiences, AddLanguage, AddSkill, CompleteProfile, AddKnowledge, AddAttitude };