import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { validateAssetData, trackAssetChanges } from '../../server/asset-validation.js'

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