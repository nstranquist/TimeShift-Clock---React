import React, {useState} from 'react'
import { ILogItem } from '../../../store/Log'

interface LogItemProps {
  log: ILogItem
  handleEdit(newLog: ILogItem, id: string): void
  handleDelete(id: string): void
}

export const LogItem: React.FC<LogItemProps> = ({
  log: {
    id,
    title,
    description,
    date
  },
  handleEdit,
  handleDelete,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<any>(null)

  const handleClick = () => {
    // toggle the edit form item
    // handleEdit(id)
    setIsTyping(false)
    setLoading(true)
    // get values, set form
    setIsEditing(true)
    setFormData({
      title, description
    })
    setLoading(false)
  }

  const handleCloseForm = (e?: any) => {
    if(isTyping) {
      setIsTyping(false)
      return;
    }
    if(e.target.nodeName === 'INPUT' || e.target.nodeName === 'BUTTON') return;
    closeForm()
  }
  const closeForm = () => {
    setLoading(true)
    setIsEditing(false)
    setFormData(null)
    setLoading(false)
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if(!isTyping) setIsTyping(true)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newLog = {
      id,
      title: formData.title,
      description: formData.description,
      date
    }
    handleEdit(newLog, id)
    setIsEditing(false)
  }

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  if(!isEditing) {
    return (
      <div style={{display:'flex'}}>
        {/* delete btn here */}
        <div className="delete-btn-wrapper" style={{alignSelf:'center',verticalAlign:'center', textAlign:'center', marginLeft:7,marginRight:7}}>
          <button onClick={handleDeleteClick} style={{background:'transparent', fontWeight:500,color:'red', padding: '7px 12px', outline:'none',border:'1px solid rgba(0,0,0,.25)'}}>
            delete</button>
        </div>
        <div className="log-entry" style={{cursor:'pointer', flex:1}}
          onClick={handleClick}>
          <div className="log-header">
            <h3 className="log-title">{title.length > 0 ? title : '(no title)'}</h3>
            <p className="log-date">{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</p> {/* month/day/year */}
          </div>
          <div className="log-body">
            <p className="log-description">{description.length > 0 ? description : '(no-description)'}</p>
          </div>
        </div>
      </div>
    )
  }
  else if (loading) {
    return <div><p>Loading Form...</p></div>
  }
  else {
    return (
      <form className="log-entry" onSubmit={handleSubmit}
        onClick={handleCloseForm}>
        <div className="log-header">
          <input className="log-title" name="title" autoFocus value={formData.title} onChange={handleChange} />
          <p className="log-date">{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</p> {/* month/day/year */}
        </div>
        <div className="log-body">
          <input className="log-description" value={formData.description} name="description" onChange={handleChange} />
        </div>
        <p className="form-item">
          <button type="submit">Submit</button>
          <button onClick={closeForm}>Cancel</button>
        </p>
      </form>
    )
  }
}
