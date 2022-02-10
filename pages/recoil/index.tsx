import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from 'components/Counter/CharacterCounter';

const main = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default main;
