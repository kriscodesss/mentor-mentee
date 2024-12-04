import React, { useState } from 'react';

interface Meeting {
  mentorId: number;
  menteeId: number;
  date: string;
}

const MeetingScheduler: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const scheduleMeeting = (mentorId: number, menteeId: number, date: string) => {
    setMeetings([...meetings, { mentorId, menteeId, date }]);
  };

  return (
    <div>
      <h2>Schedule a Meeting</h2>
      {/* Form to schedule meetings */}
      {/* Display scheduled meetings */}
    </div>
  );
};

export default MeetingScheduler;