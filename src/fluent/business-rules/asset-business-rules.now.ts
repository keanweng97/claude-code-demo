import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { validateAssetData, trackAssetChanges } from '../../server/asset-validation.js'
import { monitorAssetHealth } from '../../server/asset-health.js'

// Business rule for asset validation before insert/update
BusinessRule({
  $id: Now.ID['asset-validation-br'],
  name: 'Asset Validation',
  table: 'x_640383_asset_tra_asset',
  when: 'before',
  action: ['insert', 'update'],
  script: validateAssetData,
  active: true,
  order: 100,
  description: 'Validates asset data including asset tag format, uniqueness, and date validation'
})

// Business rule for asset health monitoring before insert/update
BusinessRule({
  $id: Now.ID['asset-health-monitor-br'],
  name: 'Asset Health Monitor',
  table: 'x_640383_asset_tra_asset',
  when: 'before',
  action: ['insert', 'update'],
  script: monitorAssetHealth,
  active: true,
  order: 150,
  description: 'Auto-escalates status to maintenance when condition rating is critical, warns on expiring warranties, and increments claude_count on every save'
})

// Business rule for tracking asset changes after update
BusinessRule({
  $id: Now.ID['asset-change-tracking-br'],
  name: 'Asset Change Tracking',
  table: 'x_640383_asset_tra_asset',
  when: 'after',
  action: ['update'],
  script: trackAssetChanges,
  active: true,
  order: 200,
  description: 'Tracks and logs important changes to asset records'
})