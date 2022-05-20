import React from 'react';

const KeyCaps = ({ size, text }) => {
  const ems = text.length;

  return (
    <div
      style={{
        position: 'relative',
        paddingRight: '0.2em',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '4px',
          left: '15px',
          fontFamily: 'monospace',
          fontSize: '24px',
        }}
      >
        {text}
      </div>
      <svg
        viewBox="41.424 17.915 266.963 267.391"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: size, width: 30 + ems * 15 }}
      >
        <defs>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx="174.428"
            cy="151.179"
            r="130.662"
            id="gradient-1"
            gradientTransform="matrix(-1.110149, 0.037009, -0.032239, -0.967052, 372.942904, 290.921667)"
          >
            <stop offset="0" style={{ stopColor: 'rgba(216, 216, 216, 1)' }} />
            <stop offset="1" style={{ stopColor: 'rgba(165, 165, 165, 1)' }} />
          </radialGradient>
        </defs>
        <path
          style={{
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '5px',
            fill: 'url(#gradient-1)',
          }}
          d="M 44.672 45.396 L 43.767 259.874 C 43.767 259.874 43.1 281.472 68.421 281.606 C 93.742 281.74 282.167 281.449 282.167 281.449 C 282.167 281.449 304.449 281.44 304.968 259.768 C 305.487 238.096 304.179 45.326 304.179 45.326 C 304.179 45.326 305.528 19.946 283.691 20.96 C 261.854 21.974 67.451 20.717 67.451 20.717 C 67.451 20.717 44.405 20.26 44.672 45.396 Z"
        />
        <path
          style={{
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '4px',
            fill: 'rgb(216, 216, 216)',
          }}
          d="M 71.354 41.194 L 70.69 212.585 C 70.69 212.585 70.164 229.844 90.385 229.952 C 110.604 230.059 261.068 229.826 261.068 229.826 C 261.068 229.826 278.863 229.819 279.27 212.501 C 279.678 195.183 278.58 41.14 278.58 41.14 C 278.58 41.14 279.65 20.858 262.213 21.668 C 244.775 22.479 89.537 21.474 89.537 21.474 C 89.537 21.474 71.133 21.109 71.354 41.194 Z"
        />
        <path
          style={{
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '3px',
          }}
          d="M 70.566 216.423 L 42.757 265.062"
        />
        <path
          style={{
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '3px',
          }}
          d="M 80.486 226.615 L 67.002 281.148"
        />
        <path
          style={{
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '3px',
          }}
          d="M 267.009 226.754 L 283.388 282.68"
        />
        <path
          style={{
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '3px',
          }}
          d="M 278.072 216.983 L 304.465 252.459"
        />
      </svg>
    </div>
  );
};

export default KeyCaps;
