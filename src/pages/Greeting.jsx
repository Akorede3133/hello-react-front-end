import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error ocuured</p>;
  }
  return (
    <div>{message}</div>
  );
};

export default Greeting;
