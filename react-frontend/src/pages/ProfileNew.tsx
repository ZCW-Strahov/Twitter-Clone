import React from 'react';
import { useEffect } from 'react';
import Profile from './Profile';
import PaginatedTweets from '../pages/timelinefeed';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Add any side effects or initialization code here
  }, []);

  return (
    <div>
      <div style={{ position: 'absolute', left: '-7.7%', top: '-9%', width: '150%', margin: '30px 150px' }}>
        <Profile /> {/* Call the PaginatedTweets component */}
      </div>
      {/* You can adjust the positioning and styling of these components as needed 26 top*/}
      <div style={{ position: 'absolute', left: '17.3%', top: '32%', width: '80%', margin: '30px 150px' }}>
        <PaginatedTweets /> {/* Call the PaginatedTweets component */}
      </div>
    </div>
  );
};

export default HomePage;
