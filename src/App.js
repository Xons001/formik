import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox'
import TextInput from './components/textInput'

const validate = (values) => {
  const errors = {}

  if(!values.name){
    errors.name = 'Requerido'
  }else if (values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }

  if(!values.lastname){
    errors.lastname = 'Requerido'
  }else if (values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto'
  }

  // if(!values.email){
  //   errors.lastname = 'Requerido'
  // }else if (values.email.length < 5){
  //   errors.email = 'El apellido es muy corto'
  // }

  return errors
}

function App() {

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br></br>
        
        <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name='lastname' />
        <br></br>

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name='email' />
        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <button type='submit' >Enviar</button>
      </Form>
      
    </Formik>
  );
}

export default App;
