import { gs, GlideDateTime, GlideRecord } from '@servicenow/glide'

export function validateAssetData(current, previous) {
    // Validate asset tag format (e.g., must be uppercase and alphanumeric)
    const assetTag = current.getValue('asset_tag')
    
    if (assetTag) {
        // Check if asset tag follows the correct format (uppercase letters and numbers)
        const assetTagPattern = /^[A-Z0-9]+$/
        if (!assetTagPattern.test(assetTag)) {
            gs.addErrorMessage('Asset Tag must contain only uppercase letters and numbers (e.g., AST001, COMP123)')
            current.setAbortAction(true)
            return
        }
        
        // Check for duplicate asset tags
        const gr = new GlideRecord('x_640383_asset_tra_asset')
        gr.addQuery('asset_tag', assetTag)
        gr.addQuery('sys_id', '!=', current.getUniqueValue())
        gr.query()
        
        if (gr.next()) {
            gs.addErrorMessage('Asset Tag "' + assetTag + '" already exists. Please use a unique asset tag.')
            current.setAbortAction(true)
            return
        }
    }
    
    // Validate warranty expiry is not in the past for new assets
    const warrantyExpiry = current.getValue('warranty_expiry')
    const purchaseDate = current.getValue('purchase_date')
    
    if (warrantyExpiry && purchaseDate) {
        const warrantyDate = new GlideDateTime(warrantyExpiry)
        const purchaseDateObj = new GlideDateTime(purchaseDate)
        
        if (warrantyDate.compareTo(purchaseDateObj) < 0) {
            gs.addErrorMessage('Warranty expiry date cannot be earlier than purchase date')
            current.setAbortAction(true)
            return
        }
    }
    
    // Auto-generate asset tag if not provided
    if (!assetTag) {
        const assetType = current.getValue('asset_type') || 'AST'
        const typePrefix = assetType.substring(0, 3).toUpperCase()
        
        // Generate next sequential number
        const counterGr = new GlideRecord('x_640383_asset_tra_asset')
        counterGr.addQuery('asset_tag', 'STARTSWITH', typePrefix)
        counterGr.orderByDesc('asset_tag')
        counterGr.setLimit(1)
        counterGr.query()
        
        let nextNumber = 1
        if (counterGr.next()) {
            const lastTag = counterGr.getValue('asset_tag')
            const numberPart = lastTag.replace(typePrefix, '')
            if (!isNaN(numberPart)) {
                nextNumber = parseInt(numberPart) + 1
            }
        }
        
        const paddedNumber = String(nextNumber).padStart(4, '0')
        current.setValue('asset_tag', typePrefix + paddedNumber)
    }
    
    gs.addInfoMessage('Asset data validated successfully')
}

export function trackAssetChanges(current, previous) {
    const changes = []
    
    // Track important field changes
    const fieldsToTrack = ['assigned_to', 'location', 'status', 'condition_rating']
    
    fieldsToTrack.forEach(field => {
        const currentValue = current.getDisplayValue(field)
        const previousValue = previous ? previous.getDisplayValue(field) : ''
        
        if (currentValue !== previousValue) {
            changes.push(`${field}: "${previousValue}" → "${currentValue}"`)
        }
    })
    
    if (changes.length > 0) {
        const changeMsg = 'Asset ' + current.getValue('asset_tag') + ' updated: ' + changes.join(', ')
        gs.addInfoMessage(changeMsg)
        gs.log(changeMsg, 'Asset Tracking')
    }
}