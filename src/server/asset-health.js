import { gs, GlideDateTime } from '@servicenow/glide'

export function monitorAssetHealth(current, previous) {
    const conditionRating = parseInt(current.getValue('condition_rating') || '0')
    const status = current.getValue('status')
    const warrantyExpiry = current.getValue('warranty_expiry')
    const assetTag = current.getValue('asset_tag')

    // Auto-escalate to maintenance when condition is critically low
    if (conditionRating > 0 && conditionRating <= 3 && status === 'active') {
        current.setValue('status', 'maintenance')
        gs.addInfoMessage(
            'Asset ' + assetTag + ' automatically moved to "Under Maintenance" — condition rating is ' + conditionRating + '/10.'
        )
    }

    // Warn when warranty expires within 90 days
    if (warrantyExpiry) {
        const expiryDate = new GlideDateTime(warrantyExpiry)
        const now = new GlideDateTime()
        const daysUntilExpiry = gs.dateDiff(now.getDate(), expiryDate.getDate(), true)

        if (daysUntilExpiry >= 0 && daysUntilExpiry <= 90) {
            gs.addInfoMessage(
                'Warning: Warranty for asset ' + assetTag + ' expires in ' + daysUntilExpiry + ' day(s).'
            )
        } else if (daysUntilExpiry < 0) {
            gs.addInfoMessage(
                'Notice: Warranty for asset ' + assetTag + ' expired ' + Math.abs(daysUntilExpiry) + ' day(s) ago.'
            )
        }
    }

    // Increment claude_count to track how many times this record has been saved
    const rawCount = current.getValue('claude_count')
    const parsedCount = parseInt(rawCount || '0', 10)
    const currentCount = Number.isNaN(parsedCount) ? 0 : parsedCount
    current.setValue('claude_count', String(currentCount + 1))
}
