import React, { useState } from 'react';

const TreeNode = ({ label, children }) => (
  <div style={{ border: '1px solid #ccc', padding: '8px', margin: '8px' }}>
    {label}
    {children}
  </div>
);

const BinaryTree = ({ label, depth }) => {
  const [childCount, setChildCount] = useState(0);

  const addChild = () => {
    setChildCount(prevCount => prevCount + 1);
  };

  const renderChildNodes = () => {
    if (depth <= 0) {
      return null;
    }

    const childNodes = [];

    for (let i = 1; i <= childCount; i++) {
      childNodes.push(
        <BinaryTree key={i} label={`${label}${i}`} depth={depth - 1} />
      );
    }

    return childNodes;
  };

  return (
    <TreeNode label={label}>
      <button style={{padding:"5px 20px", backgroundColor:"green",borderRadius:"6px", margin:"0px 5px"}}onClick={addChild}>Add Component</button>
      {renderChildNodes()}
    </TreeNode>
  );
};

const App = () => {
  return (
    <div >
      <BinaryTree label="A" depth={3} />
    </div>
  );
};

export default App;
