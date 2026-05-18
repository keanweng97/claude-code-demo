export class AssetService {
  constructor() {
    this.tableName = 'x_640383_asset_tra_asset'
  }

  async list(filters = {}) {
    try {
      const searchParams = new URLSearchParams(filters)
      searchParams.set('sysparm_display_value', 'all')
      searchParams.set('sysparm_limit', '1000')
      
      const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `HTTP ${response.status}`)
      }

      const data = await response.json()
      return data.result || []
    } catch (error) {
      console.error('Error fetching assets:', error)
      throw error
    }
  }

  async create(assetData) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        },
        body: JSON.stringify(assetData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `HTTP ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating asset:', error)
      throw error
    }
  }

  async update(sysId, assetData) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        },
        body: JSON.stringify(assetData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `HTTP ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error updating asset:', error)
      throw error
    }
  }

  async delete(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `HTTP ${response.status}`)
      }

      return true
    } catch (error) {
      console.error('Error deleting asset:', error)
      throw error
    }
  }

  async getById(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?sysparm_display_value=all`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `HTTP ${response.status}`)
      }

      const data = await response.json()
      return data.result
    } catch (error) {
      console.error('Error fetching asset:', error)
      throw error
    }
  }

  // Helper method to extract primitive values from ServiceNow field objects
  extractValue(field) {
    return typeof field === 'object' && field !== null ? field.value : field
  }

  extractDisplayValue(field) {
    return typeof field === 'object' && field !== null ? field.display_value : field
  }
}