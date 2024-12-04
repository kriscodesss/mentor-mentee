import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Mentor {
  name: string;
  bio: string;
  expertise: string[];
  experience: number;
  education: string;
  portfolioLink: string;
  // ... other fields (profile picture, communication methods, availability)
}

const MentorProfileSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  bio: Yup.string().required('Required'),
  expertise: Yup.array().of(Yup.string()).min(1, 'Select at least one area of expertise'),
  experience: Yup.number().required('Required').min(0, 'Experience cannot be negative'),
  education: Yup.string().required('Required'),
  portfolioLink: Yup.string().url('Invalid URL'),
  // ... validation for other fields
});

const MentorProfile: React.FC = () => {
  const [mentorData, setMentorData] = useState<Mentor | null>(null);

  const handleSubmit = (values: Mentor) => {
    setMentorData(values);
    console.log('Mentor profile data:', values);
    // TODO: Send data to backend or state management
  };

  return (
    <div> {/* Removed className={styles.container} */}
      <h2>Mentor Profile</h2>
      <Formik
        initialValues={{
          name: '',
          bio: '',
          expertise: [],
          experience: 0,
          education: '',
          portfolioLink: '',
          // ... other fields
        }}
        validationSchema={MentorProfileSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" /> {/* Removed className={styles.error} */}
          </div>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="bio">Bio:</label>
            <Field as="textarea" name="bio" />
            <ErrorMessage name="bio" component="div" /> {/* Removed className={styles.error} */}
          </div>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="expertise">Expertise:</label>
            <Field as="select" name="expertise" multiple>
              {/* Add more options as needed */}
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option> 

            </Field>
            <ErrorMessage name="expertise" component="div" /> {/* Removed className={styles.error} */}
          </div>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="experience">Years of Experience:</label>
            <Field type="number" name="experience" />
            <ErrorMessage name="experience" component="div" /> {/* Removed className={styles.error} */}
          </div>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="education">Education:</label>
            <Field type="text" name="education" />
            <ErrorMessage name="education" component="div" /> {/* Removed className={styles.error} */}
          </div>
          <div> {/* Removed className={styles.formGroup} */}
            <label htmlFor="portfolioLink">Portfolio/Website Link:</label>
            <Field type="text" name="portfolioLink" />
            <ErrorMessage name="portfolioLink" component="div" /> {/* Removed className={styles.error} */}
          </div>
          {/* ... add fields for profile picture, communication methods, availability */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MentorProfile;