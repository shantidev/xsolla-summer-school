import { useState, useEffect, useRef } from 'react';

export const useCallbackState = (initialState, callback = () => {}) => {
  const [state, setState] = useState(initialState);
  const pristine = useRef(true);

  useEffect(() => {
    if (pristine.current === true) {
      pristine.current = false;
      return
    }

    callback(state)
  }, [state]);

  return [state, setState];
};