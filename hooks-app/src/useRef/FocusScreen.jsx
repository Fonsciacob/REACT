import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onRefInput = () => {
    inputRef.current.select();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Username" />

      <button onClick={onRefInput}>Set Focus</button>
    </>
  );
};
