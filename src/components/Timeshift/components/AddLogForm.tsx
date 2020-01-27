import React, {useState} from 'react'

interface AddLogFormProps {
  handleAddLog(formData: any): void
}

export const AddLogForm: React.FC<AddLogFormProps> = ({
  handleAddLog,
}) => {
  const [formData, setFormData] = useState<any>({ title: '', description: '' })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // stuff
    handleAddLog(formData)
    clearForm()
  }

  const clearForm = () => setFormData({ title: '', description: '' })

  return (
    <form className="add-log-form" onSubmit={handleSubmit} style={{marginTop:20, textAlign:'center', margin:'10px auto'}}>
      <p className="form-item">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </p>
      <p className="form-item">
        <label htmlFor="description">Description</label>
        <input type="description" name="description" value={formData.description} onChange={handleChange} />
      </p>
      <p className="form-item">
        <button type="submit">Submit</button>
      </p>
    </form>
  )
}
