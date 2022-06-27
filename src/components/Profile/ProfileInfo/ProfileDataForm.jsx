import React from "react";
import classes from "./ProfileInfo.module.css";
import {Field, Form, Formik} from "formik";

const ProfileDataForm = ({profile, isOwner, goToEditMode, saveProfile}) => {

    return <div className={classes.descriptionBlock}>
        <Formik initialValues={{
            fullName: profile.fullName || '',
            aboutMe: profile.aboutMe || '',
            lookingForAJob: profile.lookingForAJob || false,
            lookingForAJobDescription: profile.lookingForAJobDescription || '',
            contacts: Object.assign({}, profile.contacts),
        }}
                onSubmit={async (values, {setSubmitting, setStatus}) => {
                    await saveProfile(values, setStatus, goToEditMode);
                    setSubmitting(false);
                }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  status,
                  /* and other goodies */
              }) => (
                <Form>
                    <div>
                        <b>FullName:</b>
                        <input type="text"
                               name='fullName'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.fullName}/>
                    </div>
                    <div>
                        <b>About me:</b>
                        <Field as="textarea"
                               name='aboutMe'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.aboutMe}/>
                    </div>
                    <div><b>Looking for a job:</b>
                        <Field type="checkbox" name="lookingForAJob"/>
                    </div>
                    <div>
                        <b>My professional skills:</b>
                        <Field as="textarea"
                               name='lookingForAJobDescription'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.lookingForAJobDescription}/>
                    </div>

                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                        return <div className={classes.contacts}>
                            <b>{key}:</b> <input type="text"
                                                 placeholder={key}
                                                 name={'contacts.' + key}
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.contacts[key]}/>
                        </div>
                    })}
                    </div>

                    {status && <div className={classes.error}>
                        {Object.keys(status).map(key => {
                            return <span>{status[key]}</span>;
                        })}
                    </div>
                    }
                    <button type='submit' disabled={isSubmitting}>Save</button>
                </Form>
            )}

        </Formik>
        <div>{isOwner && <button onClick={goToEditMode}>exit editMode</button>}</div>
    </div>

}

export default ProfileDataForm;