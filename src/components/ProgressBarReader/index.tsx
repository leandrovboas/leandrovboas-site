import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Progress } from './styles';

function ProgressBarReader() {
  const scrollPosition = useScrollPosition();

  return <Progress scroll={`${scrollPosition}%`} />;
}

export default ProgressBarReader;
