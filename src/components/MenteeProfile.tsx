import React, { useState } from 'react';

interface Mentee {
  name: string;
  projectIdeas: string[];
  skills: string;
  learningGoals: string;
  interests: string;
  // ... other fields (background, experience)
}

const MenteeProfile: React.FC = () => {
  const [menteeData, setMenteeData] = useState<Mentee>({
    name: '',
    projectIdeas: [],
    skills: '',
    learningGoals: '',
    interests: '',
    // ... other fields
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMenteeData({ ...menteeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Mentee profile data:', menteeData);
    // TODO: Send data to backend or state management
  };

  return (
    <div> {/* Removed className={styles.container} */}
      <h2>Mentee Profile</h2>
      <form onSubmit={handleSubmit}>
        <div> {/* Removed className={styles.formGroup} */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={menteeData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div> {/* Removed className={styles.formGroup} */}
          <label htmlFor="projectIdeas">Project Ideas:</label>
          <textarea
            name="projectIdeas"
            value={menteeData.projectIdeas.join('\n')}
            onChange={(e) =>
              setMenteeData({ ...menteeData, projectIdeas: e.target.value.split('\n') })
            }
            placeholder="Enter project ideas, one per line"
          />
        </div>
        <div> {/* Removed className={styles.formGroup} */}
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            name="skills"
            value={menteeData.skills}
            onChange={handleInputChange}
            placeholder="List your skills"
          />
        </div>
        <div> {/* Removed className={styles.formGroup} */}
          <label htmlFor="learningGoals">Learning Goals:</label>
          <textarea
            name="learningGoals"
            value={menteeData.learningGoals}
            onChange={handleInputChange}
            placeholder="Describe your learning goals"
          />
        </div>
        <div> {/* Removed className={styles.formGroup} */}
          <label htmlFor="interests">Interests:</label>
          <input
            type="text"
            name="interests"
            value={menteeData.interests}
            onChange={handleInputChange}
            placeholder="List your interests"
          />
        </div>
        {/* ... add fields for background, experience */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MenteeProfile;