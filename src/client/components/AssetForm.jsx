import React, { useState, useEffect } from 'react'

export default function AssetForm({ asset, service, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    asset_tag: '',
    asset_name: '',
    asset_type: '',
    serial_number: '',
    purchase_date: '',
    purchase_cost: '',
    assigned_to: '',
    location: '',
    status: 'active',
    warranty_expiry: '',
    vendor: '',
    model: '',
    condition_rating: '',
    is_critical: false,
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (asset) {
      setFormData({
        asset_tag: service.extractDisplayValue(asset.asset_tag) || '',
        asset_name: service.extractDisplayValue(asset.asset_name) || '',
        asset_type: service.extractValue(asset.asset_type) || '',
        serial_number: service.extractDisplayValue(asset.serial_number) || '',
        purchase_date: service.extractDisplayValue(asset.purchase_date) || '',
        purchase_cost: service.extractDisplayValue(asset.purchase_cost) || '',
        assigned_to: service.extractValue(asset.assigned_to) || '',
        location: service.extractDisplayValue(asset.location) || '',
        status: service.extractValue(asset.status) || 'active',
        warranty_expiry: service.extractDisplayValue(asset.warranty_expiry) || '',
        vendor: service.extractDisplayValue(asset.vendor) || '',
        model: service.extractDisplayValue(asset.model) || '',
        condition_rating: service.extractDisplayValue(asset.condition_rating) || '',
        is_critical: String(service.extractValue(asset.is_critical)) === 'true',
        notes: service.extractDisplayValue(asset.notes) || ''
      })
    }
  }, [asset, service])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const submitData = {
        ...formData,
        is_critical: formData.is_critical ? 'true' : 'false'
      }

      if (asset) {
        const sysId = service.extractValue(asset.sys_id)
        await service.update(sysId, submitData)
      } else {
        await service.create(submitData)
      }
      
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="asset-form-overlay">
      <div className="asset-form-modal">
        <div className="asset-form-header">
          <h2>{asset ? 'Edit Asset' : 'Add New Asset'}</h2>
          <button type="button" className="close-btn" onClick={onCancel}>×</button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="asset-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Asset Tag</label>
              <input
                type="text"
                name="asset_tag"
                className="form-input"
                value={formData.asset_tag}
                onChange={handleChange}
                placeholder="Leave empty for auto-generation"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Asset Name *</label>
              <input
                type="text"
                name="asset_name"
                className="form-input"
                value={formData.asset_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Asset Type</label>
              <select
                name="asset_type"
                className="form-select"
                value={formData.asset_type}
                onChange={handleChange}
              >
                <option value="">Select type...</option>
                <option value="computer">Computer</option>
                <option value="laptop">Laptop</option>
                <option value="monitor">Monitor</option>
                <option value="printer">Printer</option>
                <option value="phone">Phone</option>
                <option value="furniture">Furniture</option>
                <option value="equipment">Equipment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Serial Number</label>
              <input
                type="text"
                name="serial_number"
                className="form-input"
                value={formData.serial_number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Purchase Date</label>
              <input
                type="date"
                name="purchase_date"
                className="form-input"
                value={formData.purchase_date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Purchase Cost</label>
              <input
                type="number"
                step="0.01"
                name="purchase_cost"
                className="form-input"
                value={formData.purchase_cost}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-input"
                value={formData.location}
                onChange={handleChange}
                placeholder="Building, Floor, Room"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="retired">Retired</option>
                <option value="maintenance">Under Maintenance</option>
                <option value="missing">Missing</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Warranty Expiry</label>
              <input
                type="date"
                name="warranty_expiry"
                className="form-input"
                value={formData.warranty_expiry}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Vendor</label>
              <input
                type="text"
                name="vendor"
                className="form-input"
                value={formData.vendor}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Model</label>
              <input
                type="text"
                name="model"
                className="form-input"
                value={formData.model}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Condition Rating (1-10)</label>
              <input
                type="number"
                min="1"
                max="10"
                name="condition_rating"
                className="form-input"
                value={formData.condition_rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="is_critical"
                checked={formData.is_critical}
                onChange={handleChange}
              />
              Critical Asset
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea
              name="notes"
              className="form-textarea"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes about this asset..."
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : asset ? 'Update Asset' : 'Create Asset'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}