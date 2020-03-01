import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentField from '../StudentUploadField';
import Result from '../Result';
import { Formik, Form, Field } from 'formik';
import { setLocalStorage, getLocalStorage } from '../../helpers'


const StudentForm = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    let storageList = null;
    useEffect(() => {
         getLocalStorage('checkerList').then(response => storageList = response).catch(e=> console.log(e));
    }, [])

    console.log(storageList);
    const test = (student1, student2) => {
        setLoading(true);
        axios.get('https://a2fb5253-4a52-4c71-a1d3-cad8c8aff897.mock.pstmn.io/upload').then(response => {
            console.log(storageList);
            if (storageList) {
                storageList = [...storageList, response.data];
                setLocalStorage('checkerList', storageList);
            } else {
                console.log(response.data);
                storageList = [response.data];
                setLocalStorage('checkerList', storageList);
            }
            setResult(response.data);
            setLoading(false);
            console.log(result)
        }).catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen p-32">
            {loading ? <div><p>loading</p></div> : (result ? <div><Result {...result}/></div> : (<div>
                <Formik
                    initialValues={{
                        studentOne: {},
                        studentTwo: {},
                    }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            test();
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    render={formProps => (
                        <Form onSubmit={formProps.handleSubmit}>
                            <div className="w-full md:flex justify-around">
                                {Object.keys(formProps.values).map((value, index) => (
                                    <StudentField formProps={formProps} name={value} index={index} key={value}/>
                                ))}
                            </div>
                            <div className="w-full flex justify-center my-2">
                                <button role="submit" className="bg-blue-500 text-white py-2 px-4 rounded-sm">Submit</button>
                            </div>
                        </Form>
                    )}
                />
            </div>))}
        </div>
    )
}

export default StudentForm;