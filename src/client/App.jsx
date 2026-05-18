import React, { useEffect, useState, useMemo } from 'react'
import { AssetService } from './services/AssetService.js'
import AssetList from './components/AssetList.jsx'
import AssetForm from './components/AssetForm.jsx'
import AssetStats from './components/AssetStats.jsx'
import './App.css'

export default function App() {
  const assetService = useMemo(() => new AssetService(), [])
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadAssets()
  }, [assetService])

  const loadAssets = async () => {
    try {
      setLoading(true)
      setError(null)
      const assetData = await assetService.list()
      setAssets(assetData)
    } catch (err) {
      setError('Failed to load assets: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAssetSaved = () => {
    setShowForm(false)
    setSelectedAsset(null)
    loadAssets()
  }

  const handleEditAsset = (asset) => {
    setSelectedAsset(asset)
    setShowForm(true)
  }

  const handleDeleteAsset = async (sysId) => {
    try {
      await assetService.delete(sysId)
      loadAssets()
    } catch (err) {
      setError('Failed to delete asset: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading assets...</p>
      </div>
    )
  }

  return (
    <div className="asset-app">
      <header className="app-header">
        <h1>Asset Tracking Dashboard</h1>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setSelectedAsset(null)
            setShowForm(true)
          }}
        >
          Add New Asset
        </button>
      </header>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>&times;</button>
        </div>
      )}

      <main className="app-main">
        <AssetStats assets={assets} />
        
        {showForm && (
          <AssetForm
            asset={selectedAsset}
            service={assetService}
            onSave={handleAssetSaved}
            onCancel={() => {
              setShowForm(false)
              setSelectedAsset(null)
            }}
          />
        )}

        <AssetList
          assets={assets}
          onEdit={handleEditAsset}
          onDelete={handleDeleteAsset}
        />
      </main>
    </div>
  )
}