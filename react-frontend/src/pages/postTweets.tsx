import React, { useState, useRef } from 'react';
import axios from 'axios';
import useSpeechRecognition from './useSpeechRecognitionHook'; // make sure this hook is properly implemented as previously described

interface TweetData {
  content: string;
  picture?: string;
  pictureContentType?: string;
  createdOn: string;
  userProfile: {
    id: string;
  };
}

const TweetForm: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Speech recognition hook
  const { text, isListening, toggleListening, hasRecognitionSupport } = useSpeechRecognition();

  // Effect to update content with recognized text
  React.useEffect(() => {
    setContent(content => content + text);
  }, [text]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const tweetData: TweetData = {
      content: content,
      createdOn: new Date().toISOString(),
      userProfile: {
        id: '1500', // Static user ID as per your requirement
      },
    };

    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        tweetData.picture = base64String.split(',')[1];
        tweetData.pictureContentType = 'image/jpeg';
        try {
          await axios.post('http://localhost:8315/api/tweets', tweetData);
          resetForm();
          window.location.reload(); // Refreshes page
        } catch (error) {
          console.error('Error posting tweet:', error);
          alert('Failed to post tweet.');
        }
      };
      reader.readAsDataURL(image);
    } else {
      try {
        await axios.post('http://localhost:8315/api/tweets', tweetData);
        resetForm();
        window.location.reload(); // Refreshes page
      } catch (error) {
        console.error('Error posting tweet:', error);
        alert('Failed to post tweet.');
      }
    }
  };

  const resetForm = () => {
    setContent('');
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // This is necessary to clear the file input
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
        height: '104vh',
        backgroundColor: '#000000',
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
            color: 'rgba(255,255,255,0.75)',
            fontSize: '21px',
            fontFamily: 'Roboto, sans-serif',
          }}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's happening?"
        />
        <div
          style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}
        >
          <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />
          <img src="/instagram.png" alt="Upload" onClick={handleImageClick} style={{ cursor: 'pointer', width: '50px', height: 'auto' }} />
          <button
            type="button" // Change this to a regular button to control the speech recognition
            onClick={toggleListening}
            style={{
              backgroundColor: isListening ? '#07b5f4' : 'rgba(7,181,244,0.94)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
            }}
          >
            {isListening ? 'Stop Echo Voice' : 'Start Echo Voice'}
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: '#07b5f4',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
            }}
          >
            Echo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
