import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import assetTrackingPage from '../../client/index.html'

export const asset_tracking_dashboard = UiPage({
  $id: Now.ID['asset-tracking-ui-page'],
  endpoint: 'x_640383_asset_tra_dashboard.do',
  description: 'Modern React-based dashboard for managing organizational assets',
  category: 'general',
  html: assetTrackingPage,
  direct: true
})