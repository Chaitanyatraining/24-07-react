import React, { Component } from 'react'

class ContactUs extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }

    handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        console.log(name)
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        // validation
        // 4 char
        // 1 char
        // include '@'
        // 10 digits

        // firstName
        if (this.state.firstName.length < 4) {
            firstNameErr = 'FirstName should be atleast 4 char'
        }

        // lastName
        if (this.state.lastName.length < 1) {
            lastNameErr = 'lastName should be atleast 1 char'
        }

        // Email
        if (!this.state.email.includes('@')) {
            emailErr = 'Enter a valid email'
        }

        //phoneErr
        if (this.state.phone.length != 10) {
            phoneErr = "Enter a valid number"
        }

        // falsy - 0, '', null, nan, false, undefined

        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }

    }


    render() {
        return (
            <div>
                <h2>ContactUs</h2>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form className='mt-5'>
                            <div className='mt-2'>
                                <input type="text"
                                    name='firstName'
                                    className='form-control'
                                    placeholder='Enter your FirstName'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div className='mt-2'>
                                <input type="text"
                                    name='lastName'
                                    className='form-control'
                                    placeholder='Enter your lastName'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>

                            </div>
                            <div className='mt-2'>
                                <input type="text"
                                    name='email'
                                    className='form-control'
                                    placeholder='Enter your email'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>

                            </div>
                            <div className='mt-2'>
                                <input type="text"
                                    name='phone'
                                    className='form-control'
                                    placeholder='Enter your phone'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

                            </div>
                            <div className='mt-3'>
                                <button className='btn btn-primary'
                                    onClick={(e) => { this.handleSubmit(e) }}
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

export default ContactUs