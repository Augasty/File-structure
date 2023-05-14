import React, { useState } from 'react'

const Folder = ({ explorer, handleInsertNode }) => {

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
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder)

      setShowInput({ ...showInput, visible: false })
    }
  }



  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className='folder' onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleButtons(e, true)}>📁+</button>
            <button onClick={(e) => handleButtons(e, false)}>📄+</button>
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
            return <Folder explorer={exp} handleInsertNode={handleInsertNode} key={exp.id} />
          })}
        </div>
      </div>)
  }
  else {
    return <div className='file'>📄 {explorer.name}</div>
  }


}

export default Folder