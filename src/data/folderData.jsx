const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  isFile: false,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true, isFile: false,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true, isFile: false,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false, isFile: true,
              items: []
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false, isFile: true,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false, isFile: true,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "src",
      isFolder: true, isFile: false,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false, isFile: true,
          items: []
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false, isFile: true,
          items: []
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false, isFile: true,
          items: []
        }
      ]
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false, isFile: true,
      items: []
    }
  ]
};


export default explorer;

 
// const deleteNode = (tree, id) => {
//     if(tree.id === id) return null;
//     if (tree.items && tree.items.length > 0) {
//     const updatedItems = tree.items.filter(item => deleteNode(item, id));
//     tree.items = updatedItems.length > 0 ? updatedItems : [];
//   }
//   return tree;
// };
 
// const res = deleteNode(explorer, "7");
// console.log(res);