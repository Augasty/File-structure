import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./styles.css"
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, name, isFolder)

    setExplorerData(finalTree)
  }




  return (
    <div className="App">
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
