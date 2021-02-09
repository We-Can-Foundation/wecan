// pages/signup.js
import React from "react"
import RegisterPatient from "./RegisterPatient";
import RegisterLayout from "./RegisterLayout";
import AfterSubmit from "./AfterSubmit";
import RegistrationStepOne from "./RegistrationStepOne";
import RegisterPatient02 from "./RegisterPatient02";
import RegisterPro from "./RegisterPro";
import RegisterPro02 from "./RegisterPro02";

export default class SignUp extends React.Component {

    state = {
        step: 1,
        signupSuccess: false,
        name: "",
        midName: "",
        email: "",
        phone:"",
        password: "",
        birthday: "",
        country: "",
        address: "",
        cp: "",
        ocupation: "",
        genre: "",
        religion: "",
        civicStatus: "",
        cedula: "",
        specialty: "",
        subspecialty: "",
        isPatient: true
    }
// process to next step
    next = () => {
        // update state.step by adding to previous state
        this.setState(prevState => {
            return {step: prevState.step + 1
            }})
    }

    // process to previous step
    back = () => {
        // update state.step by minus 1 from previous state
        this.setState(prevState => {
            return {step: prevState.step - 1
            }})
    }

    //handle all the field changes
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        console.log(this.state)
    }
    //Set the type of user
    getUserSelection = (sel) => {
        if(sel === 0)
            this.setState({isPatient: true})
        else
            this.setState({isPatient: false})
    }
    setStateValue = (input, val) => {
        this.setState({[input]: val})
    }
    //handle form submit
    handleSubmit = () =>{
        this.setState({
            signupSuccess: true
        })
    }


    render(){
        const { step } = this.state
        const { name, midName, email, phone, password, birthday, address, country, cp,
            ocupation, genre, religion, civicStatus, cedula, specialty, subspecialty, signupSuccess, isPatient } = this.state
        const values = { name, midName, email, phone, password, birthday, address, country, cp,
            ocupation, genre, religion, civicStatus, cedula, specialty, subspecialty, signupSuccess, isPatient }
        // eslint-disable-next-line default-case

        switch (step) {
            case 1:
                return (
                    <RegisterLayout>
                        <RegistrationStepOne
                            values = {values}
                            handleChange = {this.handleChange}
                            next = {this.next}
                            setType={this.getUserSelection}/>
                    </RegisterLayout>
                )
            case 2:
                if(isPatient){
                    return (
                        <RegisterLayout>
                            <RegisterPatient
                                values = {values}
                                handleChange = {this.handleChange}
                                back = {this.back}
                                handleSubmit = {this.handleSubmit}
                                next={this.next}
                                setValue={this.setStateValue}
                            />
                        </RegisterLayout>
                    )
                } else {
                    return (
                        <RegisterLayout>
                            <RegisterPro
                                values = {values}
                                handleChange = {this.handleChange}
                                back = {this.back}
                                handleSubmit = {this.handleSubmit}
                                next={this.next}
                                setValue={this.setStateValue}
                            />
                        </RegisterLayout>
                    )
                }
            case 3:
                if(isPatient){
                    return (
                        <RegisterLayout>
                            <RegisterPatient02
                                values = {values}
                                handleChange = {this.handleChange}
                                back = {this.back}
                                handleSubmit = {this.handleSubmit}
                                next={this.next}
                                setValue={this.setStateValue}
                            />
                        </RegisterLayout>
                    )
                } else {
                    return (
                        <RegisterLayout>
                            <RegisterPro02
                                values = {values}
                                handleChange = {this.handleChange}
                                back = {this.back}
                                handleSubmit = {this.handleSubmit}
                                next={this.next}
                                setValue={this.setStateValue}
                            />
                        </RegisterLayout>
                    )
                }
            case 4:
                return (
                    <RegisterLayout>
                        <AfterSubmit data = {values}/>
                    </RegisterLayout>
                )
        }
    }
}