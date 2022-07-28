import React from 'react';

const Language = (props) => {
  return (
    <div>
      <select
        name="language"
        id="lng"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="english">English</option>
        <option value="spanish">Español</option>
        <option value="russian">Russia</option>
        <option value="chinese">China</option>
      </select>
    </div>
  );
};

export default Language;
