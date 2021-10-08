import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import Link from 'next/link';
import { END } from 'redux-saga';
import { State } from '../store/reducer/sampel.reducer';
import { SAGA_ACTION } from '../store/saga/sample.saga';
import { SagaStore, wrapper } from '../store/sagaStore';

export interface ConnectedPageProps {
  custom: string;
}

const Page: NextPage<ConnectedPageProps> = ({ custom }: ConnectedPageProps) => {
  const { page } = useSelector<State, State>((state) => state);
  return (
    <div>
      <pre>{JSON.stringify({ page, custom }, null, 2)}</pre>
      <Link href="/test"><a href="">test</a></Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  store.dispatch({ type: SAGA_ACTION });
  store.dispatch(END);
  await (store as SagaStore).sagaTask.toPromise();
  return { props: { custom: 'custom'}};
})

export default Page;