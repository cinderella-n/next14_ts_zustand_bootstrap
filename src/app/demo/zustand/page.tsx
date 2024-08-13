// pages/index.tsx
'use client'
import react from 'react'
import { useStore } from '@/stores/count/useCountStore';

const Home = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className='container text-center border-2'>
      <h1 className=' bg-success rounded-2 text-light p-2'>Count:  {count}</h1>
      <button className='m-2 rounded bg-danger text-light border-1 border-light p-2' onClick={decrement}>- Decrement</button>
      <button className='m-2 rounded bg-primary text-light border-1 border-light p-2' onClick={increment}>+ Increment</button>
    </div>
  );
};

export default Home;
