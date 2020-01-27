import React, {useState} from "react";
import { connect } from 'react-redux'
import { LogItem } from "./components/LogItem";
import { RootState } from "../../store/rootReducer";
import { ILogItem, addLog, editLog, deleteLog } from "../../store/Log";
import uuidv4 from 'uuid'
import { AddLogForm } from "./components/AddLogForm";

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
  const [adding, setAdding] = useState<boolean>(false)

  const toggleHeaderOpen = () => {
    setOpen(!open)
  }

  const handleAddLog = () => {
    // create popup, until then just use inputs
    setAdding(!adding)
  }

  const handleSubmitAddLog = (logItemData: any) => {
    // call upon add event button
    const newLogItem = {
      id: uuidv4(),
      title: logItemData.title,
      description: logItemData.description,
      date: new Date()
    }
    console.log('new item:', newLogItem)
    addLog(newLogItem)
    setAdding(false)
  }

  const handleEditLog = (newLog: ILogItem, id: string) => {
    // edit the item
    // setEditingLog(true)
    editLog(newLog, id)
  }

  const handleDeleteLog = (id: string) => {
    deleteLog(id)
  }

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
          {adding && <AddLogForm handleAddLog={handleSubmitAddLog} /> }
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