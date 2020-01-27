import React, {useState} from 'react'

interface AddAlarmFormProps {
  addForm(alarmData: any): void
}

export const AddAlarmForm: React.FC<AddAlarmFormProps> = ({
  addForm
}) => {
  const [formData, setFormData] = useState<any>({ name: '', daysInactive: [], active: true })

  const handleChange = (e: any) => {
    if(e.target.name === 'active') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked
      })
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addForm(formData)
  }

  return (
    <form onSubmit={handleSubmit} style={{padding:20, margin:'0 auto', textAlign:'center'}}>
      <p className="form-item">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" autoFocus value={formData.name} onChange={handleChange} />
      </p>
      {/* Days Active input here */}

      {/* Active input toggle here */}
      <p className="alarm-status">
        <input
          type="checkbox"
          className="toggle-switch"
          style={{display:'initial'}}
          id="checkbox-2"
          name="active"
          checked={formData.active}
          onChange={handleChange}
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  )
}
