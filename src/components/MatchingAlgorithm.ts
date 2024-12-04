interface Mentor {
    id: number;
    expertise: string[];
  }
  
  interface Mentee {
    id: number;
    projectIdeas: string[];
  }
  
  const matchMentorsToMentees = (mentors: Mentor[], mentees: Mentee[]): { mentorId: number; menteeId: number }[] => {
    // Simple matching logic based on common expertise and project ideas
    const matches: { mentorId: number; menteeId: number }[] = [];
    mentees.forEach(mentee => {
      const matchedMentor = mentors.find(mentor => 
        mentor.expertise.some(expertise => mentee.projectIdeas.includes(expertise))
      );
      if (matchedMentor) {
        matches.push({ mentorId: matchedMentor.id, menteeId: mentee.id });
      }
    });
    return matches;
  };
  
  export default matchMentorsToMentees;