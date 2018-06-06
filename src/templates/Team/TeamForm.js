import React, {
    Component
} from 'react';
import {
    Button,
    Form
} from 'semantic-ui-react'

class TeamForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false,
            isSuccessful: false,
            formMessage: null,
            isError: false,
            error: null,
            formData: {}
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleFormChange(changeEvent) {
        const {
            name,
            value
        } = changeEvent.target;

        const newFormData = Object.assign({}, this.state.formData);

        newFormData[name] = value;

        this.setState({
            formData: newFormData
        });
    }

    submitForm() {
        this.setState({ isSubmitted: true });
        console.log('form submitted', this.state.formData);
        fetch("http://localhost:1919/teams", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.formData)
            })
            .then(response => {
                    console.log(response.status);
                    this.setState({
                        isSuccessful: true
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isError: true,
                        error
                    });
                });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add a Team</h1>
                <Form>
                    <Form.Input name="name" onChange={this.handleFormChange} onBlur={this.handleFormChange} fluid label='Name' placeholder='Name' />
                    <Form.Input name="league" onChange={this.handleFormChange} onBlur={this.handleFormChange} fluid label='League' placeholder='League' />
                    <Form.Input name="stadium" onChange={this.handleFormChange} onBlur={this.handleFormChange} fluid label='Stadium' placeholder='Stadium' />
                    <Button primary onClick={this.submitForm} type='submit'>Submit</Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default TeamForm;