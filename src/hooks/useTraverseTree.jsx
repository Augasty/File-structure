const useTraverseTree = () => {
    function insertNode(tree, folderId, name, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name,
                isFolder,
                isFile: !isFolder,
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


    const deleteNode = (tree, folderId) => {
        console.log(tree)
        if(tree.id === folderId){
            return {
                id: -new Date().getTime(),
                name:'',
                isFolder:false,
                isFile:false,
                items: []
            }
        }
        let latestNode = []
        latestNode = tree.items.map((subTree)=>{
            return deleteNode(subTree,folderId)
        })
        return {...tree,items:latestNode}
        
    }; 


    function renameNode(tree, folderId, name, isFolder) {
    //     if (tree.id === folderId && tree.isFolder) {
    //         tree.name = name;
    //         return tree;
    //     }

    //     // using DFS
    //     let latestNode = []
    //     latestNode = tree.items.map((subTree) => {
    //         return renameNode(subTree, folderId, name, isFolder)
    //     })
        
    //     return {...tree,items:latestNode}
    }

    return { insertNode , deleteNode, renameNode }
}

export default useTraverseTree