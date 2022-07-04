import React from 'react';
import Counter from '@/components/atoms/Counter/Counter';

const HomeContainer = () => {
  return (
    <div>
      HomeContainer
      <hr />

      <Counter defaultValue={0} />
    </div>
  );
};

export default HomeContainer;