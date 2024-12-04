import React, { useEffect, useState } from 'react';
import { Mentor } from '../types/Mentor';
import { Mentee } from '../types/Mentee';
import { matchMentorsAndMentees } from '../utils/matchingAlgorithm'; 
import useAuthStore from '../store/useAuthStore';

const Matches: React.FC = () => {
  const [matches, setMatches] = useState<{ mentor: Mentor; mentee: Mentee; score: number }[]>([]);
  const role = useAuthStore((state) => state.role);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // 1. Fetch mentor and mentee data (replace with your actual API calls)
        const mentors: Mentor[] = await fetch('/api/mentors').then((res) => res.json()); 
        const mentees: Mentee[] = await fetch('/api/mentees').then((res) => res.json());

        // 2. Get matches based on the user's role
        const matched =
          role === 'mentor'
            ? matchMentorsAndMentees(mentors, mentees).filter((match) => match.mentor.id === 'your_mentor_id')
            : matchMentorsAndMentees(mentors, mentees).filter((match) => match.mentee.id === 'your_mentee_id');
        setMatches(matched);
      } catch (error) {
        console.error('Error fetching matches:', error);
        // Handle error (e.g., display an error message)
      }
    };

    fetchMatches();
  }, [role]); // Re-fetch matches if the role changes

  return (
    <div>
      <h2>Your Matches</h2>
      {/* Display the matches */}
      <ul>
        {matches.map((match) => (
          <li key={`${match.mentor.id}-${match.mentee.id}`}>
            {role === 'mentor' ? (
              <>
                <p>Mentee: {match.mentee.name}</p>
                <p>Project Ideas: {match.mentee.projectIdeas.join(', ')}</p>
              </>
            ) : (
              <>
                <p>Mentor: {match.mentor.name}</p>
                <p>Expertise: {match.mentor.expertise.join(', ')}</p>
              </>
            )}
            <p>Match Score: {match.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;