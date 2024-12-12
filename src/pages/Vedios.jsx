import React, { useState, useRef } from 'react';
import ubaidImage from '../assets/ubaid.jpg'; // Replace with your image path

export default function Example() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Create a ref for the video element

  // Handle the video play event
  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play(); // Programmatically start the video when the play button is clicked
  };

  // Handle the video pause event
  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video Title */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center p-4">
        About Me
      </h2>

      {/* Video Section */}
      <div className="relative">
        {/* Display the image as thumbnail if not playing */}
        {!isPlaying && (
          <img
            src={ubaidImage} // Use your image here
            alt="Video Thumbnail"
            className="w-full h-64 object-cover rounded-lg"
          />
        )}

        {/* Video Player */}
        <video
          ref={videoRef} // Attach the ref to the video element
          className="h-full w-full rounded-lg"
          controls
          onPlay={() => setIsPlaying(true)} // When the video is played, set the state to playing
          onPause={handlePause}
          style={{ display: isPlaying ? 'block' : 'none' }} // Hide video until it's playing
        >
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black opacity-50 w-full h-full flex justify-center items-center">
              <button
                className="text-white text-5xl"
                onClick={handlePlay} // Handle the play button click
              >
                ▶ {/* You can use a custom icon here */}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mt-1">Channel Name • 1.2M views • 1 day ago</p>
        <p className="text-gray-700 mt-2">
        Hello! I'm Ubaid. In this video, you'll learn more about me—my background, passions, and what drives me. 
        I hope this helps you get to know me better and what I'm all about. Enjoy the video!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex items-center space-x-4 border-t">
        <button className="text-gray-600 hover:text-blue-600">
          👍 Like
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          👎 Dislike
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          💬 Comment
        </button>
      </div>
    </div>
  );
}
