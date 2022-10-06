import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox'
import TextInput from './components/textInput'
import Select from './components/Select'
import Radio from './components/Radio'

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

  if(!values.radio){
    errors.radio = 'Requerido'
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
        chancho: '',
        radio: ''
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br></br>
        
        <TextInput name="lastname" label="Apellido" />
        <br></br>

        <TextInput name="email" label="Correo" />
        <br></br>

        <Select label='Tipo de chancho' name="chancho">
          <option value=""> Selecciona chancho </option>
          <option value="felipe"> Felipe </option>
          <option value="chanchitofeliz"> Chanchito feliz </option>
          <option value="chanchitotriste"> Chanchito triste </option>
        </Select>
        <br></br>

        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <br></br>

        <Radio name="radio" value="chanchito1" label="chanchito 1" />
        <Radio name="radio" value="chanchito2" label="chanchito 2" />
        <Radio name="radio" value="chanchito3" label="chanchito 3" />
        <ErrorMessage name="radio"/>
        <br></br>

        <button type='submit' >Enviar</button>
      </Form>
      
    </Formik>
  );
}

export default App;
