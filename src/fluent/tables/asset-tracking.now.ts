import '@servicenow/sdk/global'
import { 
  Table, 
  StringColumn, 
  DateColumn, 
  ReferenceColumn, 
  BooleanColumn,
  DecimalColumn,
  IntegerColumn
} from '@servicenow/sdk/core'

export const x_640383_asset_tra_asset = Table({
  name: 'x_640383_asset_tra_asset',
  label: 'Asset',
  schema: {
    asset_tag: StringColumn({ 
      label: 'Asset Tag', 
      maxLength: 50,
      mandatory: true
    }),
    asset_name: StringColumn({ 
      label: 'Asset Name', 
      maxLength: 100,
      mandatory: true
    }),
    asset_type: StringColumn({
      label: 'Asset Type',
      maxLength: 50,
      choices: {
        computer: { label: 'Computer', sequence: 0 },
        laptop: { label: 'Laptop', sequence: 1 },
        monitor: { label: 'Monitor', sequence: 2 },
        printer: { label: 'Printer', sequence: 3 },
        phone: { label: 'Phone', sequence: 4 },
        furniture: { label: 'Furniture', sequence: 5 },
        equipment: { label: 'Equipment', sequence: 6 },
        other: { label: 'Other', sequence: 7 }
      },
      dropdown: 'dropdown_with_none'
    }),
    serial_number: StringColumn({ 
      label: 'Serial Number', 
      maxLength: 100 
    }),
    purchase_date: DateColumn({ 
      label: 'Purchase Date' 
    }),
    purchase_cost: DecimalColumn({ 
      label: 'Purchase Cost' 
    }),
    assigned_to: ReferenceColumn({ 
      label: 'Assigned To', 
      referenceTable: 'sys_user' 
    }),
    location: StringColumn({ 
      label: 'Location', 
      maxLength: 100 
    }),
    status: StringColumn({
      label: 'Status',
      maxLength: 50,
      choices: {
        active: { label: 'Active', sequence: 0 },
        inactive: { label: 'Inactive', sequence: 1 },
        retired: { label: 'Retired', sequence: 2 },
        maintenance: { label: 'Under Maintenance', sequence: 3 },
        missing: { label: 'Missing', sequence: 4 }
      },
      dropdown: 'dropdown_with_none',
      default: 'active'
    }),
    warranty_expiry: DateColumn({ 
      label: 'Warranty Expiry Date' 
    }),
    vendor: StringColumn({ 
      label: 'Vendor', 
      maxLength: 100 
    }),
    model: StringColumn({ 
      label: 'Model', 
      maxLength: 100 
    }),
    condition_rating: IntegerColumn({
      label: 'Condition Rating',
      min: 1,
      max: 10
    }),
    is_critical: BooleanColumn({
      label: 'Critical Asset'
    }),
    notes: StringColumn({
      label: 'Notes',
      maxLength: 1000
    }),
    claude_count: StringColumn({
      label: 'Claude Count',
      maxLength: 255
    })
  },
  display: 'asset_name',
  accessible_from: 'public',
  caller_access: 'tracking',
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  allow_new_fields: true,
  allow_ui_actions: true,
  allow_client_scripts: true,
  extensible: true,
  audit: true
})