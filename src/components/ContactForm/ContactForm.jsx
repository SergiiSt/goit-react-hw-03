import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
export default function ContactForm({ onAdd }) {
  const id = nanoid();
  const handlerSubmit = (values, actions) => {
    console.log('handlerSubmit ', values);
    onAdd({
      id: id,
      name: values.name,
      number: values.number,
    });
    console.log(onAdd);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handlerSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label>Number</label>
          <Field type="text" name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
