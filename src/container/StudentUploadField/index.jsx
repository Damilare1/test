import React from 'react';
import { Formik, Form, Field } from 'formik';

const uploadButton = (field) => {
    const { form, name, form: {errors, values} } = field;
    console.log(field);
    let value = ''
    const handleChange = (e) => {
      const { value } = e.target;
      form.setFieldValue(name, value);
    };
    return (
      <div className="py-0 md:py-4 flex">
        <label className={`relative bg-blue-600 ${errors && errors.studentOne ? 'border border-tivo-magenta' : ''} py-1 px-2 rounded flex`}>
        <span className="text-white text-sm">File upload</span>
          <input onChange={handleChange} className="absolute opacity-0" id="file" type="file" onChange={e => { }} title="Click to add Files" />
        </label>
      </div>
    );
  };

const StudentField = ({formProps, name, index}) => (
    <div className="border rounded-sm w-full my-2 md:my-0 md:w-2/5 p-10">
        <h5>Student {index+1}</h5>
        <div className="my-4">
            <Field name={`${name}.name`} className="w-full border p-2" placeholder="enter student name" />
        </div>
        <div className="my-4">
            <Field
               name={`${name}.text`}
                component={uploadButton}
            />
        </div>
    </div>

)

export default StudentField;