This repository used to display the collection of fields by using the react-final-form and react-final-arrays dependencies.

## How to clone and start the project

### git clone https://github.com/gaurav-cpt/react-field-array-form.git
### cd react-field-array-form.git
### npm install
### npm start

Use browser to open the below url

### http://localhost:3000/

To initialize the collection of fields like in case of "Edit" to pre-populate the fields with data see the below use case

  mutators={{
      ...arrayMutators
  }}
  initialValues={{
      student_info: [{"first_name":"xyz", "last_name":"abc"}]
  }}
  
  add the initialValues with collection field name "student_info" and put the object data with field name used to pre-populate in form.
  
## See the running demo
https://codesandbox.io/s/react-field-arrays-mz6ce?file=/package.json
