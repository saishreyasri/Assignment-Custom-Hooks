import { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
  const getStoredValue = (storageType) => {
    const savedValue = storageType.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  };

  const [localValue, setLocalValue] = useState(() => getStoredValue(localStorage));
  const [sessionValue, setSessionValue] = useState(() => getStoredValue(sessionStorage));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localValue));
  }, [key, localValue]);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(sessionValue));
  }, [key, sessionValue]);

  return [localValue, setLocalValue, sessionValue, setSessionValue];
};

export default useStorage;
