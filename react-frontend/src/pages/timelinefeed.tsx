// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// // Define data types based on the API's response
// interface UserProfile {
//   id: number;
// }

// interface Tweet {
//   id: number;
//   content: string;
//   picture: string | null;
//   pictureContentType: string | null;
//   createdOn: string;
//   userProfile: UserProfile;
// }

// interface Comment {
//   id: number;
//   content: string;
// }

// const PAGE_SIZE = 4; // Number of tweets per page
// const TWEETS_API = 'http://localhost:8080/api/tweets';

// // Function to fetch paginated tweets (only fetches the first page)
// const fetchTweetsPage = async (): Promise<Tweet[] | null> => {
//   try {
//     const response = await fetch(`${TWEETS_API}?page=0&size=${PAGE_SIZE}`);
//     if (!response.ok) {
//       console.error(`Error fetching tweets: ${response.status} ${response.statusText}`);
//       return null;
//     }
//     const data = await response.json();
//     console.log('Fetched tweets:', data); // Add this line to log the fetched data
//     return data;
//   } catch (error) {
//     console.error('Error fetching paginated tweets:', error);
//     return null;
//   }
// };

// // Helper function to generate data URLs
// const resolvePictureDataUrl = (content: string | null, contentType: string | null) =>
//   content && contentType ? `data:${contentType};base64,${content}` : null;

// // Main component to display tweets
// const PaginatedTweets: React.FC = () => {
//   const [tweets, setTweets] = useState<Tweet[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchTweets = async () => {
//     setLoading(true);
//     const data = await fetchTweetsPage();
//     setTweets(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchTweets();
//   }, []);

//   // Function to handle tweet deletion
//   const handleDeleteTweet = async (tweetId: number) => {
//     try {
//       const response = await fetch(`${TWEETS_API}/${tweetId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         console.error(`Error deleting tweet ${tweetId}: ${response.status} ${response.statusText}`);
//         // Handle error accordingly
//       } else {
//         // If deletion is successful, update state to reflect the change
//         setTweets(prevTweets => prevTweets?.filter(tweet => tweet.id !== tweetId) || null);
//       }
//     } catch (error) {
//       console.error('Error deleting tweet:', error);
//       // Handle error accordingly
//     }
//   };

//   // Function to handle commenting on a tweet
//   const handleCommentOnTweet = async (tweetId: number, comment: string) => {
//     // Logic to handle commenting on the tweet with the given ID
//     console.log(`Commenting on tweet ${tweetId}: ${comment}`);
//     // You can update the UI to display the comment here
//   };

//   // Loading or empty state messages
//   if (loading) return <p>Loading tweets...</p>;
//   if (!tweets || tweets.length === 0) return <p>No tweets available</p>;

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <div style={{ width: '50%' }}>
//         <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
//           <h2>Tweets</h2>
//           <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
//             {tweets.map(tweet => (
//               <TweetComponent
//                 key={tweet.id}
//                 tweet={tweet}
//                 onDelete={() => handleDeleteTweet(tweet.id)}
//                 onComment={(comment: string) => handleCommentOnTweet(tweet.id, comment)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div style={{ width: '50%' }}>{/* Profile section goes here */}</div>
//     </div>
//   );
// };

// const TweetComponent: React.FC<{ tweet: Tweet; onDelete: () => void; onComment: (comment: string) => void }> = ({
//   tweet,
//   onDelete,
//   onComment,
// }) => {
//   const [commentText, setCommentText] = useState<string>('');
//   const [comments, setComments] = useState<Comment[]>([]);

//   const pictureUrl = resolvePictureDataUrl(tweet.picture, tweet.pictureContentType);

//   const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCommentText(event.target.value);
//   };

//   const handleSubmitComment = () => {
//     onComment(commentText);
//     setComments(prevComments => [...prevComments, { id: prevComments.length + 1, content: commentText }]);
//     setCommentText('');
//   };

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px', position: 'relative' }}>
//       <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
//         <button onClick={onDelete} style={{ backgroundColor: 'red', color: 'white' }}>
//           Delete
//         </button>
//       </div>
//       <div>
//         <p>
//           <small>
//             {/* Make the user ID clickable and navigate to "/profile" page */}
//             <Link to={tweet.userProfile.id === 1500 ? '/profile' : `/profile/${tweet.userProfile.id}`} style={{ color: 'black' }}>
//               {tweet.userProfile.id === 1500 ? (
//                 <>
//                   <img
//                     style={{
//                       height: '50px',
//                       width: '50px',
//                       position: 'relative',
//                       borderRadius: '50%',
//                       objectFit: 'cover',
//                     }}
//                     loading="lazy"
//                     alt=""
//                     src="/ellipse-3@2x.png"
//                   />{' '}
//                   Danny
//                 </>
//               ) : (
//                 tweet.userProfile.id
//               )}
//             </Link>
//           </small>
//         </p>
//       </div>
//       <p style={{ fontSize: '30px' }}>{tweet.content}</p>
//       {pictureUrl ? (
//         <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <img
//             src={pictureUrl}
//             alt={`Tweet pic ${tweet.id}`}
//             style={{
//               height: '300px',
//               width: '600px',
//               objectFit: 'cover',
//             }}
//           />
//         </div>
//       ) : (
//         <p>No pictures available</p>
//       )}
//       <div style={{ marginTop: '10px', borderTop: '1px solid #ccc' }}></div> {/* Horizontal line */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//         <div style={{ display: 'flex', width: '100%' }}>
//           <input
//             type="text"
//             value={commentText}
//             onChange={handleCommentChange}
//             placeholder="Write a comment..."
//             style={{ marginRight: '10px', width: '100%' }}
//           />
//           <button onClick={handleSubmitComment}>Comment</button>
//         </div>
//       </div>
//       {comments.length > 0 && (
//         <div style={{ marginTop: '10px' }}>
//           <h3>Comments</h3>
//           {comments.map(comment => (
//             <div key={comment.id}>
//               <p>{comment.content}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaginatedTweets;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './timelinefeed.css'; // Import the CSS file

// Define data types based on the API's response
interface UserProfile {
  id: number;
}

interface Tweet {
  id: number;
  content: string;
  picture: string | null;
  pictureContentType: string | null;
  createdOn: string;
  userProfile: UserProfile;
}

interface Comment {
  id: number;
  content: string;
}

const PAGE_SIZE = 4; // Number of tweets per page
const TWEETS_API = 'http://localhost:8080/api/tweets';

// Function to fetch paginated tweets (only fetches the first page)
const fetchTweetsPage = async (): Promise<Tweet[] | null> => {
  try {
    const response = await fetch(`${TWEETS_API}?page=0&size=${PAGE_SIZE}`);
    if (!response.ok) {
      console.error(`Error fetching tweets: ${response.status} ${response.statusText}`);
      return null;
    }
    const data = await response.json();
    console.log('Fetched tweets:', data); // Add this line to log the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching paginated tweets:', error);
    return null;
  }
};

// Helper function to generate data URLs
const resolvePictureDataUrl = (content: string | null, contentType: string | null) =>
  content && contentType ? `data:${contentType};base64,${content}` : null;

// Main component to display tweets
const PaginatedTweets: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTweets = async () => {
    setLoading(true);
    const data = await fetchTweetsPage();
    setTweets(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  // Function to handle tweet deletion
  const handleDeleteTweet = async (tweetId: number) => {
    try {
      const response = await fetch(`${TWEETS_API}/${tweetId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        console.error(`Error deleting tweet ${tweetId}: ${response.status} ${response.statusText}`);
        // Handle error accordingly
      } else {
        // If deletion is successful, update state to reflect the change
        setTweets(prevTweets => prevTweets?.filter(tweet => tweet.id !== tweetId) || null);
      }
    } catch (error) {
      console.error('Error deleting tweet:', error);
      // Handle error accordingly
    }
  };

  // Function to handle commenting on a tweet
  const handleCommentOnTweet = async (tweetId: number, comment: string) => {
    // Logic to handle commenting on the tweet with the given ID
    console.log(`Commenting on tweet ${tweetId}: ${comment}`);
    // You can update the UI to display the comment here
  };

  // Loading or empty state messages
  if (loading) return <p>Loading tweets...</p>;
  if (!tweets || tweets.length === 0) return <p>No tweets available</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '55%' }}>
        <div className="tweet-container">
          <h2>Tweets</h2>
          <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
            {tweets.map(tweet => (
              <TweetComponent
                key={tweet.id}
                tweet={tweet}
                onDelete={() => handleDeleteTweet(tweet.id)}
                onComment={(comment: string) => handleCommentOnTweet(tweet.id, comment)}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: '50%' }}>{/* Profile section goes here */}</div>
    </div>
  );
};

const TweetComponent: React.FC<{ tweet: Tweet; onDelete: () => void; onComment: (comment: string) => void }> = ({
  tweet,
  onDelete,
  onComment,
}) => {
  const [commentText, setCommentText] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const pictureUrl = resolvePictureDataUrl(tweet.picture, tweet.pictureContentType);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = () => {
    onComment(commentText);
    setComments(prevComments => [...prevComments, { id: prevComments.length + 1, content: commentText }]);
    setCommentText('');
  };

  return (
    <div className="tweet-container">
      <div className="delete-button">
        <button onClick={onDelete}>Delete</button>
      </div>
      <div>
        <p>
          <small>
            {/* Make the user ID clickable and navigate to "/profile" page */}
            <Link to={tweet.userProfile.id === 1500 ? '/profile' : `/profile/${tweet.userProfile.id}`} className="user-link">
              {tweet.userProfile.id === 1500 ? 'Danny' : tweet.userProfile.id}
            </Link>
          </small>
        </p>
      </div>
      <p className="tweet-content">{tweet.content}</p>
      {pictureUrl ? (
        <div className="tweet-pic">
          <img src={pictureUrl} alt={`Tweet pic ${tweet.id}`} />
        </div>
      ) : (
        <p>No pictures available</p>
      )}
      <div className="horizontal-line"></div>
      <div className="comment-input">
        <input type="text" value={commentText} onChange={handleCommentChange} placeholder="Write a comment..." />
        <button onClick={handleSubmitComment}>Comment</button>
      </div>
      {comments.length > 0 && (
        <div className="comments-section">
          <h3>Comments</h3>
          {comments.map(comment => (
            <div className="comment" key={comment.id}>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginatedTweets;
