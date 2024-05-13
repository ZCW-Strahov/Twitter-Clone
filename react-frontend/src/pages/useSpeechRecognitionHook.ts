import { useEffect, useState } from 'react';

let recognition: any = null;
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
}

const useSpeechRecognition = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setText(prevText => prevText + currentTranscript);
    };

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.onresult = null;
      recognition.onstart = null;
      recognition.onend = null;
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
    } else {
      setText(''); // Optionally clear the previous text when starting new session
      recognition.start();
    }
  };

  return {
    text,
    isListening,
    toggleListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
