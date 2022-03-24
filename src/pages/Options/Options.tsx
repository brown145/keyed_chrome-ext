import './Options.css';

import React from 'react';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className="OptionsContainer">{title} TODO</div>;
};

export default Options;
