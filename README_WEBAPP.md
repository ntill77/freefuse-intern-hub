# FreeFuse Intern Hub - Web Application

A beautiful, interactive web application that displays your Notion data in a modern dashboard format.

## 🚀 Quick Start

### Option 1: Python (Recommended)
```bash
npm run dev
# or
python -m http.server 8000
```

### Option 2: Node.js
```bash
npm run start:node
# or
npx http-server -p 8000 -c-1
```

### Option 3: PHP
```bash
npm run start:php
# or
php -S localhost:8000
```

Then open your browser to: **http://localhost:8000**

## ✨ Features

### 📊 Interactive Dashboard
- **Recent Announcements** - Latest published announcements
- **My Tasks** - Pending onboarding tasks
- **Upcoming Meetings** - Scheduled meetings
- **Quick Stats** - Overview of all data

### 📋 Data Views
- **Tables** - Sortable, filterable data tables
- **Boards** - Kanban-style task management
- **Galleries** - Visual card layouts
- **Calendars** - Date-based views

### 🔍 Smart Filtering
- Filter by status, priority, assignee, date, and more
- Real-time search and filtering
- Multiple view types per section

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Modern, clean interface
- Fast and lightweight

## 📁 File Structure

```
├── index.html          # Main application page
├── styles.css          # Modern CSS styling
├── app.js             # Main application logic
├── data.js            # Data loading and parsing
├── package.json       # Project configuration
├── build/             # CSV data files
│   ├── announcements.csv
│   ├── contacts_stakeholders.csv
│   ├── intern_directory.csv
│   ├── meeting_notes.csv
│   ├── onboarding_checklist.csv
│   └── resources_library.csv
└── README_WEBAPP.md   # This file
```

## 🎯 Sections

### 1. **Announcements**
- Table view with status and priority filtering
- Board view grouped by priority
- Shows publish dates, expiration, and summaries

### 2. **Onboarding Checklist**
- Board view grouped by task status
- Table view with personal task filtering
- Calendar view showing due dates

### 3. **Resources Library**
- Table view with type filtering
- Gallery view grouped by resource type
- Direct links to documents and tools

### 4. **Meeting Notes**
- Calendar view showing meeting dates
- Table view with decision filtering
- Action items and attendee tracking

### 5. **Contacts & Stakeholders**
- Table view with area filtering
- Gallery view grouped by department
- Contact information and communication channels

### 6. **Intern Directory**
- Gallery view grouped by cohort
- Table view with track filtering
- Manager assignments and contact info

## 🛠️ Customization

### Adding New Data
1. Update the CSV files in the `build/` directory
2. Refresh the browser to see changes
3. The app automatically loads the latest data

### Styling
- Modify `styles.css` for custom colors, fonts, or layouts
- All styles use CSS custom properties for easy theming
- Responsive design works on all screen sizes

### Functionality
- Edit `app.js` to add new features
- Modify `data.js` to change data loading behavior
- Add new sections by updating the HTML and JavaScript

## 🔧 Technical Details

- **Pure JavaScript** - No frameworks required
- **Responsive CSS** - Mobile-first design
- **CSV Data Loading** - Automatic data parsing
- **Local Storage** - Optional data caching
- **Font Awesome Icons** - Professional iconography

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Notes

- The app loads data from CSV files in the `build/` directory
- If CSV files are not found, it falls back to sample data
- All data is processed client-side for privacy
- No external dependencies required

## 🚀 Deployment

This is a static web application that can be deployed to:
- **GitHub Pages** - Free hosting for public repos
- **Netlify** - Drag and drop deployment
- **Vercel** - Zero-config deployment
- **Any web server** - Just upload the files

Enjoy your new FreeFuse Intern Hub! 🎉
