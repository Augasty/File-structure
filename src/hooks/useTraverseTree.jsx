const useTraverseTree = () => {
    function insertNode(tree, folderId, name, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name,
                isFolder,
                items: []
            })
            return tree;
        }

        // using DFS
        let latestNode = []
        latestNode = tree.items.map((subTree) => {
            return insertNode(subTree, folderId, name, isFolder)
        })
        
        return {...tree,items:latestNode}



    }


    const deleteNode = () => {}; 

    const renameNode = () => {}; 

    return { insertNode , deleteNode, renameNode }
}

export default useTraverseTree