import { Mentor } from '../types/Mentor';
import { Mentee } from '../types/Mentee';

export function matchMentorsAndMentees(mentors: Mentor[], mentees: Mentee[]) {
  const matches = [];
  for (const mentee of mentees) {
    for (const mentor of mentors) {
      let score = 0;
      for (const idea of mentee.projectIdeas) {
        for (const expertise of mentor.expertise) {
          // Basic keyword matching (case-insensitive)
          if (idea.toLowerCase().includes(expertise.toLowerCase())) {
            score++;
          }
        }
      }
      // Consider other matching criteria here (e.g., experience, interests)
      if (score > 0) { 
        matches.push({ mentor, mentee, score });
      }
    }
  }
  return matches.sort((a, b) => b.score - a.score); // Sort by score (descending)
}