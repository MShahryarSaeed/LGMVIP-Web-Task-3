import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Record from '../components/Record';

const RegistrationForm = () => {



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        imagelink: "",
        gender: "",
        skills: []
    });

    const [skill, setSkill] = useState([]);
    const [data, setData] = useState([]);


    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSkills = (e) => {
        setSkill([...skill, e.target.value]);
        console.log("Updated Form Data " + formData);
    }

    useEffect(() => {
        const updatedFormData = { ...formData, ["skills"]: skill }
        setFormData((updatedFormData), formData);

    }, [skill]);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.website === "" ||
            formData.imagelink === "" ||
            formData.gender === "" ||
            formData.skills.length === 0
        ) {
            // Show an alert if any field is empty
            alert("Please insert data in all fields.");
            return; // Exit the function to prevent further processing
        }


        const updatedData = [...data, formData];
        setData(updatedData);
        console.log(formData);

        setFormData({
            name: "",
            email: "",
            website: "",
            imagelink: "",
            gender: "",
            skills: []
        });
        setSkill([]);

        const x = document.getElementsByClassName("skills");
        x[0].checked = false;
        x[1].checked = false;
        x[2].checked = false;
        x[3].checked = false;

        document.querySelector('input[name="gender"]:checked').checked = false;

    }

    function clearForm(e) {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            website: "",
            imagelink: "",
            gender: "",
            skills: []
        })
        setSkill([]);



        const genderRadios = document.querySelectorAll('input[name="gender"]');
        genderRadios.forEach((radio) => {
            radio.checked = false;
        });

        // Clear checkboxes by unchecking all of them
        const skillsCheckboxes = document.querySelectorAll('input[name="skills"]');
        skillsCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

    }

    return (
        <div>
            <Form formData={formData} changeHandler={changeHandler} handleSkills={handleSkills} handleSubmit={handleSubmit} clearForm={clearForm} />
            <div className="data-div">
                <Record data={data} />
            </div>
        </div>
    )
}

export default RegistrationForm;