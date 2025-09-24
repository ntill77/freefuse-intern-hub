# FreeFuse Intern Hub - Import Guide

## Overview

This package contains a normalized set of CSV files and a landing page ready for import into Notion. All data has been cleaned, standardized, and structured according to best practices for Notion database management.

## Files Included

### CSV Databases (6 files)
- `announcements.csv` - Team announcements with priority and expiration tracking
- `contacts_stakeholders.csv` - Directory of contacts with roles and communication channels
- `intern_directory.csv` - Complete intern roster with tracks and managers
- `meeting_notes.csv` - Meeting records with decisions and action items
- `onboarding_checklist.csv` - Task tracking for intern onboarding
- `resources_library.csv` - Organized collection of documents and tools

### Landing Page
- `Intern_Landing_Hub.md` - Central hub page with database links and view configurations

### Reference Files
- `schema_map.json` - Technical mapping of data transformations applied
- `README_IMPORT.md` - This guide

## Quick Import Steps

### Step 1: Import CSV Files
1. In Notion, create a new page or go to your desired workspace
2. For each CSV file:
   - Click "Import" → "CSV" 
   - Upload the file
   - Choose "Create new database"
   - Name the database exactly as shown:
     - `announcements.csv` → **"Announcements"**
     - `contacts_stakeholders.csv` → **"Contacts & Stakeholders"**  
     - `intern_directory.csv` → **"Intern Directory"**
     - `meeting_notes.csv` → **"Meeting Notes"**
     - `onboarding_checklist.csv` → **"Onboarding Checklist"**
     - `resources_library.csv` → **"Resources Library"**

### Step 2: Import Landing Page
1. Import `Intern_Landing_Hub.md` as a new page
2. This creates your central hub with instructions for views

### Step 3: Link Databases
1. Open each database → Copy link (⋮ menu → "Copy link")
2. Edit the Landing Hub page
3. Replace the "Import [filename].csv" text with actual database links

### Step 4: Create Views (Per Database)

Follow the detailed view specifications in the Landing Hub for each database. Key view types:

**Tables** - For detailed data browsing with sorting/filtering
- Enable properties you need, hide others
- Sort by relevant date/name fields
- Apply status/priority filters

**Boards** - For kanban-style management  
- Group by Status, Priority, or Category
- Show key properties on cards
- Useful for task and announcement management

**Galleries** - For visual directory browsing
- Group by Area, Cohort, or Type  
- Show names/titles prominently
- Perfect for contacts and intern directories

**Calendars** - For date-based planning
- Use Due dates or Meeting dates
- Show relevant context on cards

## Data Quality Notes

### Standardizations Applied
- **Dates**: Converted to ISO format (YYYY-MM-DD)
- **Enums**: Priority "Normal" → "Medium" for consistency
- **Status Values**: Preserved as-is (Published, Not Started, etc.)
- **Attendees**: Semicolon-separated format maintained

### Missing Data Handling
- Empty cells preserved (can be filtered out in views)
- Missing manager information in intern directory
- Some dates missing in announcements (Announcement 10)

### Schema Consistency
- All column names standardized for easy filtering
- Consistent naming across related fields
- Future-proof structure for additional data

## Troubleshooting

**Import Issues:**
- Ensure CSV files use UTF-8 encoding
- Check that column headers match exactly
- Verify date formats are recognized by Notion

**View Configuration:**
- Create views one at a time and test filters
- Use "Duplicate view" to create similar configurations  
- Remember to save view settings after changes

**Performance:**
- Keep large text fields collapsed in table views
- Use "Small" text size on the hub page
- Enable "Full width" for better layout

## Maintenance

This import structure is idempotent - safe to re-run if needed:
- Re-importing CSVs will create new databases (won't overwrite)
- Landing hub can be updated without affecting database links
- Schema map documents all transformations for future reference

## Support

All transformations are documented in `schema_map.json`. Original source files preserved in the parent directory for reference if needed.
