import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./styles.css"
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode, deleteNode } = useTraverseTree()

  const handleNode = (folderId, name, isFolder, whatFor) => {
    if (whatFor === 'insert') {
      let finalTree = insertNode(explorerData, folderId, name, isFolder)
      setExplorerData(finalTree)
    }
    else if(whatFor === 'delete') {
      let finalTree = deleteNode(explorerData, folderId)
      setExplorerData(finalTree)
    }
    
  }




  return (
    <div className="App">
      <Folder explorer={explorerData} handleNode={handleNode} key={explorerData.id}/>
    </div>
  );
}
