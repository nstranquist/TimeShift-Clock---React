import React, {useState} from "react";
import { connect } from 'react-redux'
import { LogItem } from "./components/LogItem";
import { RootState } from "../../store/rootReducer";
import { ILogItem, addLog, editLog, deleteLog } from "../../store/Log";
import uuidv4 from 'uuid'

interface LogProps {
  logs: ILogItem[]
  addLog(newLog: ILogItem): void
  editLog(newLog: ILogItem, id: string): void
  deleteLog(id: string): void
}

const TS_LogUI: React.FC<LogProps> = ({
  logs,
  addLog,
  editLog,
  deleteLog,
}) => {
  const [open, setOpen] = useState<boolean>(true)
  // const [editingLog, setEditingLog] = useState<boolean>(false)
  const [logItemData, setLogItemData] = useState<any>({ title: '', description: '' })

  const toggleHeaderOpen = () => {
    setOpen(!open)
  }

  const handleFormChange = (e: any) => {
    setLogItemData({
      ...logItemData,
      [e.target.name]: e.target.value
    })
  }

  const handleAddLog = () => {
    // create popup, until then just use inputs
    handleSubmit()
    clearAddForm()
  }

  const clearAddForm = () => setLogItemData({ title: '', description: '' })

  const handleSubmit = (e?: any) => {
    if(e) e.preventDefault()
    // call upon add event button
    const newLogItem = {
      id: uuidv4(),
      title: logItemData.title,
      description: logItemData.description,
      date: new Date()
    }
    console.log('new item:', newLogItem)
    addLog(newLogItem)
    clearForm()
  }

  const handleEditLog = (newLog: ILogItem, id: string) => {
    // edit the item
    // setEditingLog(true)
    editLog(newLog, id)
  }

  const handleDeleteLog = (id: string) => {
    deleteLog(id)
  }

  const clearForm = () => setLogItemData({ title: '', description: '' })

  return (
    <section className="log-container" id="log-section">
      <header className="log-toggle section-header"
        onClick={toggleHeaderOpen}>
        <h3 className="log-section-header">Log</h3>
      </header>
      {open && (
        <div id="ts-log">
          <div className="log-container">
            {logs.map((log, index) => (
              <LogItem
                key={index}
                log={log}
                handleEdit={handleEditLog}
                handleDelete={handleDeleteLog}
              />
            ))}
            {logs.length < 1 && (
              <div style={{textAlign:'center',padding:15}}>
                <p>There are no logs yet! Create one to get started</p>
              </div>
            )}
          </div>
          {/* Add Log Form Here (later move to a created modal) */}
          <form className="add-log-form" onSubmit={handleSubmit} style={{marginTop:20}}>
            <p className="form-item">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" value={logItemData.title} onChange={handleFormChange} />
            </p>
            <p className="form-item">
              <label htmlFor="description">Description</label>
              <input type="description" name="description" value={logItemData.description} onChange={handleFormChange} />
            </p>
            <p className="form-item">
              <button type="submit">Submit</button>
            </p>
          </form>
          {/* Add Log Button Here */}
          <div className="save-wrapper" style={{textAlign:'center'}}>
            <h3 style={{paddingLeft:15,paddingRight:15, marginBottom:10, width:'auto', marginLeft:0,marginRight:0,display:'inline-block'}}
              onClick={handleAddLog}>
              Add</h3>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  logs: state.log.logs
})

export const TS_Log = connect (
  mapStateToProps,
  { addLog, editLog, deleteLog }
)(TS_LogUI)