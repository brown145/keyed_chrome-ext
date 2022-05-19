import './content-frame.styles.css';

import Frame, { FrameContextConsumer } from 'react-frame-component';

import App from '../../App';
import React from 'react';

const ContentFrame = () => {
  return (
    <Frame
      head={[
        <link
          key="main-stylesheet"
          type="text/css"
          rel="stylesheet"
          href={chrome.runtime.getURL('content.styles.css')}
        ></link>,
      ]}
    >
      <FrameContextConsumer>{() => <App />}</FrameContextConsumer>
    </Frame>
  );
};

export default ContentFrame;
