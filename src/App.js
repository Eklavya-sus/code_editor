import Editor from '@monaco-editor/react';

function App() {
  return (
    <Editor height="100vh" language="javascript" value="console.log('Hello, World!');" />
  );
}

export default App;