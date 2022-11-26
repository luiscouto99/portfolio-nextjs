import React, { useEffect, useState } from 'react';
import { LoaderContainer, LoaderTitle } from './PageLoader.styled';

const PageLoader = ({ loader, layout }: { loader: () => void; layout: () => void }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage === 100) {
      setPercentage(100);
      setTimeout(() => layout(), 840);
      setTimeout(() => loader(), 1000);
    } else {
      setTimeout(() => {
        setPercentage(percentage + 1);
      }, 2);
    }
  }, [percentage, loader, layout]);

  return (
    <LoaderContainer percentage={percentage}>
      <LoaderTitle>{percentage}%</LoaderTitle>
    </LoaderContainer>
  );
};

export default PageLoader;
