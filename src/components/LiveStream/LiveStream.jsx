import React from 'react';
import './livestream.css';

function LiveStream() {
  return (
    <div className="live-stream-page">
      <h1>Watch My Live Stream</h1>

      <div className="stream-container">
        <iframe
          src="https://portal.abs.xyz/stream/TVTone" // Replace with Abstract's embed link or stream URL
          width="100%"
          height="600px"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="Live Stream"
        ></iframe>
      </div>

      {/* Optional: If Abstract provides a chat widget */}
      <div className="chat-container">
        <iframe
          src="" // Replace with chat link if available
          width="300px"
          height="600px"
          frameBorder="0"
          title="Live Stream Chat"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveStream;
