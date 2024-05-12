import React, { useState, useRef } from 'react';
import axios from 'axios';

interface TweetData {
  content: string;
  picture: string;
  pictureContentType: string;
  createdOn: string;
  userProfile: {
    id: string;
  };
}

const TweetForm: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const tweetData: TweetData = {
          content: content,
          picture: base64String.split(',')[1], // remove the prefix from the base64 string
          pictureContentType: 'image/jpeg',
          createdOn: new Date().toISOString(),
          userProfile: {
            id: '1500', // Static user ID as per your requirement
          },
        };

        try {
          await axios.post('http://localhost:8080/api/tweets', tweetData);
          // Reset the state to clear the form fields
          setContent('');
          setImage(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = ''; // This is necessary to clear the file input
          }
          alert('Tweet posted successfully!');
        } catch (error) {
          console.error('Error posting tweet:', error);
          alert('Failed to post tweet.');
        }
      };
      reader.readAsDataURL(image);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      style={{
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ background: 'black', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '75%' }}
      >
        <textarea
          style={{
            backgroundColor: 'black',
            width: '95%',
            height: '100px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            resize: 'none',
          }}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's happening?"
        />
        <div
          style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}
        >
          <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />
          <img
            src="/instagram.png"
            alt="Upload"
            onClick={handleImageClick}
            style={{ cursor: 'pointer', width: '50px', height: 'auto' }}
          />{' '}
          <button
            type="submit"
            style={{
              backgroundColor: '#1DA1F2',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
