import React, { useState } from "react";
import "./App.css";
import Axios from 'axios';

function App() {
    const [studentName, setStudentName] = useState("");
    const [skillName, setSkillName] = useState("");
    const [proficiency, setProficiency] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [category, setCategory] = useState("");
    const [certified, setCertified] = useState(false);

    const submitSkill = () => {
        Axios.post('http://localhost:9000/aliens', {
            studentName: studentName,
            skillName: skillName,
            proficiency: proficiency,
            yearsOfExperience: yearsOfExperience,
            category: category,
            certified: certified
        }).then(() => {
            alert("Skill added successfully");
        }).catch((err) => {
            console.error("Error: ", err);
        });
    };

    return (
        <div className="App">
            <h1>Student Skills CRUD Application</h1>
            <div className="information">
                <label><b>Student Name</b></label>
                <input
                    type="text"
                    name="studentName"
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />

                <label><b>Skill Name</b></label>
                <input
                    type="text"
                    name="skillName"
                    onChange={(e) => setSkillName(e.target.value)}
                    required
                />

                <label><b>Proficiency</b></label>
                <select
                    name="proficiency"
                    onChange={(e) => setProficiency(e.target.value)}
                    required
                >
                    <option value="">Select Proficiency</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>

                <label><b>Years of Experience</b></label>
                <input
                    type="number"
                    name="yearsOfExperience"
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    required
                />

                <label><b>Category</b></label>
                <input
                    type="text"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />

                <label><b>Certified</b></label>
                <input
                    type="checkbox"
                    name="certified"
                    onChange={(e) => setCertified(e.target.checked)}
                />

                <button onClick={submitSkill}><b>Submit</b></button>
            </div>
        </div>
    );
}

export default App;
