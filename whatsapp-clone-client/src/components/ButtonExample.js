'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const Button_1 = __importDefault(require('./Button'));
// Example usage of the styled Button component
const ButtonExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Styled Button Examples</h3>

      {/* Regular button */}
      <Button_1.default onClick={() => alert('Regular button clicked!')}>
        Regular Button
      </Button_1.default>

      {/* Primary button */}
      <Button_1.default
        primary
        onClick={() => alert('Primary button clicked!')}
      >
        Primary Button
      </Button_1.default>

      {/* Button with different text */}
      <Button_1.default onClick={() => console.log('Button clicked')}>
        Console Log Button
      </Button_1.default>

      {/* Another primary button */}
      <Button_1.default primary onClick={() => alert('Save action!')}>
        Save
      </Button_1.default>
    </div>
  );
};
exports.default = ButtonExample;
