import React from 'react';
import { Field } from 'react-final-form';

class FieldArrayForm extends React.Component {


    handleChange(event) { 
        const name = event.target.name;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = async values => {

    }

    render() {
        return(
            <div>
                <Field name={`${this.props.grid_url_detail}.first_name`} >
                    {({ input, meta }) => (
                        <div class="form-group row">
                            <div class="col-lg-3">
                                <label className="control-label">First Name</label>
                            </div>
                            <div class="col-lg-9">
                                <input {...input} placeholder="Enter first name" type="text" className="form-control col-lg-6" 
                                onBlur={e => {
                                    this.handleChange(e);
                                }}  />
                                {meta.error && meta.touched && <span class="error invalid-feedback">{meta.error}</span>}                                                            
                            </div>
                        </div>
                    )}  
                </Field>
                <Field name={`${this.props.grid_url_detail}.last_name`} >
                    {({ input, meta }) => (
                        <div class="form-group row">
                            <div class="col-lg-3">
                                <label className="control-label">Last Name</label>
                            </div>
                            <div class="col-lg-9">
                                <input {...input} placeholder="Enter last name " type="text" className="form-control col-lg-6" 
                                onBlur={e => {
                                    this.handleChange(e);
                                }}  />
                                {meta.error && meta.touched && <span class="error invalid-feedback">{meta.error}</span>}                                                            
                            </div>
                        </div>
                    )}  
                </Field>
            </div>
        )
    }
}

export default FieldArrayForm;