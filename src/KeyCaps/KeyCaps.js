import React, { useEffect, useState } from 'react';

import KeySVG from './KeySVG';
import useKeyLog from '../hooks/useKeyLog';

const DURATION_MS = 600;

const KeyCaps = () => {
  const keyLog = useKeyLog();
  const [fadeOut, setFadeOut] = useState(false);
  const { key, modifiers } = keyLog;

  useEffect(() => {
    if (!keyLog.key) return;

    setFadeOut(false);
    const doFadeOut = () => setFadeOut(true);
    const timer = setTimeout(doFadeOut, DURATION_MS);

    return () => clearTimeout(timer, doFadeOut);
  }, [keyLog]);

  if (!key) return null;

  return (
    <>
      <KeySVG text="K" size={50} />
      <KeySVG text="E" size={50} />
      <KeySVG text="Y" size={50} />
      <KeySVG text="E" size={50} />
      <KeySVG text="D" size={50} />
    </>
  );

  return (
    <div className={['key-set', fadeOut ? 'fadeOut' : ''].join(' ')}>
      {modifiers.map((mod) => (
        <KeySVG key={mod} text={mod.toUpperCase()} size={50} />
      ))}
      <KeySVG text={key.toUpperCase()} size={50} />
    </div>
  );
};

export default KeyCaps;
