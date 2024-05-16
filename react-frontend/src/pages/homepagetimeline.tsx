import React, { useState, ChangeEvent } from 'react';

const Timeline: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      console.error('Please enter text for your tweet.');
      return;
    }

    const formData = new FormData();
    formData.append('content', text);
    if (image) {
      formData.append('picture', image);
      formData.append('pictureContentType', 'image/png');
    }
    formData.append('createdOn', new Date().toISOString());
    formData.append('hashtag', 'BBBBBBBBBB');

    try {
      const response = await fetch('http://localhost:8315/api/tweets', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // console.log('Tweet posted successfully!');
        setText('');
        setImage(null);
      } else {
        console.error('Failed to post tweet:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  return (
    <div>
      <textarea placeholder="Write your tweet here..." value={text} onChange={handleTextChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Post Tweet</button>
    </div>
  );
};

export default Timeline;
