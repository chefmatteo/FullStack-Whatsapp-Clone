import React from 'react';
import Button from './Button';

// Example usage of the styled Button component
const ButtonExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Styled Button Examples</h3>
      
      {/* Regular button */}
      <Button onClick={() => alert('Regular button clicked!')}>
        Regular Button
      </Button>
      
      {/* Primary button */}
      <Button primary onClick={() => alert('Primary button clicked!')}>
        Primary Button
      </Button>
      
      {/* Button with different text */}
      <Button onClick={() => console.log('Button clicked')}>
        Console Log Button
      </Button>
      
      {/* Another primary button */}
      <Button primary onClick={() => alert('Save action!')}>
        Save
      </Button>
    </div>
  );
};

export default ButtonExample;
