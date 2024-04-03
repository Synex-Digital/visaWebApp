import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Function to retrieve all stored values
  const getAllStoredValues = () => {
    try {
      const allStoredValues = {};
      for (let i = 0; i < localStorage.length; i++) {
        const storageKey = localStorage.key(i);
        if (storageKey) {
          allStoredValues[storageKey] = JSON.parse(localStorage.getItem(storageKey));
        }
      }
      return allStoredValues;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== JSON.stringify(storedValue)) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue, getAllStoredValues];
}

export default useLocalStorage;
