import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { greetingDataFetch } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetingItem } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(greetingDataFetch());
  }, [dispatch]);

  if (!greetingItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>{greetingItem.greeting}</h2>
      <p>Code Reviewer Testing</p>
    </>
  );
};

export default Greeting;