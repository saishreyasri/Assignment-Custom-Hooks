import React, { useState } from 'react';
import useStorage from './useStorage';

const StorageComponent = () => {
  const [localValue, setLocalValue, sessionValue, setSessionValue] = useStorage('storageKey', '');

  return (
    <div>
      <div>
        <label>
          Local Storage:
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Session Storage:
          <input
            type="text"
            value={sessionValue}
            onChange={(e) => setSessionValue(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default StorageComponent;
