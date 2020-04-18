import React from 'react';
import { Form } from 'react-final-form'
import arrayMutators from "final-form-arrays"
import { FieldArray } from "react-final-form-arrays"
import StudentForm from './StudentForm'

class FieldArrayForm extends React.Component {

    onSubmit = async values => {
        //Call your server api here to save the form data
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({ handleSubmit, form: {
                        mutators: { push, pop }
                        }, submitting, pristine, values }) => {
                    return(
                        <form onSubmit={handleSubmit}>
                            <FieldArray name="student_info">
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <div key={index} style={{ border: "1px solid #3333", padding: "20px", marginBottom: "7px", borderRadius: "18px" }} >
                                            <StudentForm  handleChange={this.handleChange} grid_url_detail={name}  />
                                        </div>
                                    ))
                                    
                                }
                            </FieldArray>
                            <button type="button" className="btn btn-block btn-outline-primary btn-flat" onClick={() => push("student_info", undefined)}>
                                <i class="fa fa-plus"></i> 
                                Add Data Grid
                            </button>
                            <button type="submit" class="btn-lg btn-success">Submit</button>
                        </form>
                        )
                    }}
                />
            </div>
        )
    }

}

export default FieldArrayForm;