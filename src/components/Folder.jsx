import React, { useState } from 'react'

const Folder = ({ explorer, handleNode , id}) => {

  const [expand, setExpand] = useState(false)
  const [showInput, setShowInput] = useState({ visible: false, isFolder: null })



  const handleButtons = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleNode(explorer.id, e.target.value, showInput.isFolder,'insert')

      setShowInput({ ...showInput, visible: false })
    }
  }


  const handleDelete = (e) =>{
    e.stopPropagation();
    handleNode(explorer.id, e.target.value, showInput.isFolder,'delete')
  }

  if (explorer.isFile) {    
    return <div className='file'>
    <span>📄 {explorer.name}</span>
    <div>
    <button onClick={(e) => handleDelete(e)}>🗑️</button>
    </div>
    </div>
  }

  else if(explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className='folder' onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleButtons(e, true)}>📁+</button>
            <button onClick={(e) => handleButtons(e, false)}>📄+</button>
            <button onClick={(e) => handleDelete(e)}>🗑️</button>

          </div>

        </div>



        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
          {
            showInput.visible && (
              <div className='inputContainer' >
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  className='inputContainer__input'
                  type='text'
                  onBlur={() => {
                    setShowInput({ ...showInput, visible: false })
                  }}
                  autoFocus
                  onKeyDown={(e) => addFolder(e)}
                ></input>
              </div>
            )
          }



          {explorer.items.map((exp) => {
            {/* recursively rendering the UI */ }
            return <Folder explorer={exp} handleNode={handleNode} key={exp.id} />
          })}
        </div>
      </div>)
  }


}

export default Folder