import React from 'react'
import './AssetStats.css'

export default function AssetStats({ assets }) {
  const stats = React.useMemo(() => {
    const totalAssets = assets.length
    const activeAssets = assets.filter(asset => {
      const status = typeof asset.status === 'object' ? asset.status.value : asset.status
      return status === 'active'
    }).length
    
    const criticalAssets = assets.filter(asset => {
      const isCritical = typeof asset.is_critical === 'object' ? asset.is_critical.value : asset.is_critical
      return String(isCritical) === 'true'
    }).length
    
    const inMaintenanceAssets = assets.filter(asset => {
      const status = typeof asset.status === 'object' ? asset.status.value : asset.status
      return status === 'maintenance'
    }).length

    // Calculate total value
    const totalValue = assets.reduce((sum, asset) => {
      const cost = typeof asset.purchase_cost === 'object' ? 
        parseFloat(asset.purchase_cost.value || 0) : 
        parseFloat(asset.purchase_cost || 0)
      return sum + cost
    }, 0)

    return {
      total: totalAssets,
      active: activeAssets,
      critical: criticalAssets,
      maintenance: inMaintenanceAssets,
      totalValue: totalValue
    }
  }, [assets])

  return (
    <div className="asset-stats">
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total Assets</p>
          </div>
        </div>

        <div className="stat-card active">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.active}</h3>
            <p>Active Assets</p>
          </div>
        </div>

        <div className="stat-card critical">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3>{stats.critical}</h3>
            <p>Critical Assets</p>
          </div>
        </div>

        <div className="stat-card maintenance">
          <div className="stat-icon">🔧</div>
          <div className="stat-content">
            <h3>{stats.maintenance}</h3>
            <p>Under Maintenance</p>
          </div>
        </div>

        <div className="stat-card value">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>${stats.totalValue.toLocaleString()}</h3>
            <p>Total Value</p>
          </div>
        </div>
      </div>
    </div>
  )
}