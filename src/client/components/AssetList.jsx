import React, { useState } from 'react'

export default function AssetList({ assets, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterType, setFilterType] = useState('')

  const filteredAssets = assets.filter(asset => {
    const assetName = typeof asset.asset_name === 'object' ? 
      asset.asset_name.display_value : asset.asset_name || ''
    const assetTag = typeof asset.asset_tag === 'object' ? 
      asset.asset_tag.display_value : asset.asset_tag || ''
    const status = typeof asset.status === 'object' ? 
      asset.status.value : asset.status || ''
    const assetType = typeof asset.asset_type === 'object' ? 
      asset.asset_type.value : asset.asset_type || ''

    const matchesSearch = assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assetTag.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || status === filterStatus
    const matchesType = !filterType || assetType === filterType

    return matchesSearch && matchesStatus && matchesType
  })

  const handleDelete = (asset) => {
    const assetName = typeof asset.asset_name === 'object' ? 
      asset.asset_name.display_value : asset.asset_name
    const sysId = typeof asset.sys_id === 'object' ? 
      asset.sys_id.value : asset.sys_id

    if (window.confirm(`Are you sure you want to delete "${assetName}"?`)) {
      onDelete(sysId)
    }
  }

  const formatDate = (dateValue) => {
    if (!dateValue) return '-'
    const date = typeof dateValue === 'object' ? dateValue.display_value : dateValue
    if (!date) return '-'
    return new Date(date).toLocaleDateString()
  }

  const formatCurrency = (value) => {
    if (!value) return '-'
    const amount = typeof value === 'object' ? value.display_value : value
    if (!amount || isNaN(amount)) return '-'
    return `$${parseFloat(amount).toLocaleString()}`
  }

  return (
    <div className="asset-list">
      <div className="list-header">
        <h2>Assets ({filteredAssets.length})</h2>
        
        <div className="list-filters">
          <input
            type="text"
            placeholder="Search by name or tag..."
            className="form-input search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="retired">Retired</option>
            <option value="maintenance">Under Maintenance</option>
            <option value="missing">Missing</option>
          </select>

          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
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
      </div>

      {filteredAssets.length === 0 ? (
        <div className="empty-state">
          <p>No assets found matching your criteria.</p>
        </div>
      ) : (
        <div className="asset-table-container">
          <table className="asset-table">
            <thead>
              <tr>
                <th>Asset Tag</th>
                <th>Asset Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Location</th>
                <th>Purchase Cost</th>
                <th>Purchase Date</th>
                <th>Critical</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map(asset => {
                const sysId = typeof asset.sys_id === 'object' ? 
                  asset.sys_id.value : asset.sys_id
                const assetName = typeof asset.asset_name === 'object' ? 
                  asset.asset_name.display_value : asset.asset_name
                const assetTag = typeof asset.asset_tag === 'object' ? 
                  asset.asset_tag.display_value : asset.asset_tag
                const assetType = typeof asset.asset_type === 'object' ? 
                  asset.asset_type.display_value : asset.asset_type
                const status = typeof asset.status === 'object' ? 
                  asset.status.display_value : asset.status
                const assignedTo = typeof asset.assigned_to === 'object' ? 
                  asset.assigned_to.display_value : asset.assigned_to
                const location = typeof asset.location === 'object' ? 
                  asset.location.display_value : asset.location
                const isCritical = typeof asset.is_critical === 'object' ? 
                  asset.is_critical.value : asset.is_critical

                return (
                  <tr key={sysId}>
                    <td>
                      <span className="asset-tag">{assetTag || '-'}</span>
                    </td>
                    <td>
                      <strong>{assetName || '-'}</strong>
                    </td>
                    <td>
                      <span className={`type-badge type-${typeof asset.asset_type === 'object' ? 
                        asset.asset_type.value : asset.asset_type || 'other'}`}>
                        {assetType || '-'}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge status-${typeof asset.status === 'object' ? 
                        asset.status.value : asset.status || 'unknown'}`}>
                        {status || '-'}
                      </span>
                    </td>
                    <td>{assignedTo || '-'}</td>
                    <td>{location || '-'}</td>
                    <td>{formatCurrency(asset.purchase_cost)}</td>
                    <td>{formatDate(asset.purchase_date)}</td>
                    <td>
                      {String(isCritical) === 'true' ? (
                        <span className="critical-badge">⚠️ Critical</span>
                      ) : (
                        <span className="normal-badge">Normal</span>
                      )}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => onEdit(asset)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(asset)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}