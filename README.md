# 🚀 FreeFuse Intern Hub

A beautiful, interactive web application for managing intern onboarding, announcements, tasks, resources, and team collaboration.

## ✨ Features

### 📊 Interactive Dashboard
- **Recent Announcements** - Latest published announcements with priority indicators
- **My Tasks** - Pending onboarding tasks with due dates
- **Upcoming Meetings** - Scheduled meetings and events
- **Quick Stats** - Overview metrics of all data

### 📋 Multiple Data Views
- **Tables** - Sortable, filterable data tables with search
- **Boards** - Kanban-style task management with drag-and-drop
- **Galleries** - Visual card layouts for directories and resources
- **Calendars** - Date-based views for meetings and deadlines

### 🔍 Smart Filtering & Search
- Filter by status, priority, assignee, date, and more
- Real-time search across all data
- Multiple view types per section
- Responsive design for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (for http-server) OR Python OR PHP
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd freefuse-intern-hub
   ```

2. **Start the web server** (choose one method):
   
   **Option A: Node.js (Recommended)**
   ```bash
   npm run start:node
   # or
   npx http-server -p 8000 -c-1
   ```
   
   **Option B: Python**
   ```bash
   npm run dev
   # or
   python -m http.server 8000
   ```
   
   **Option C: PHP**
   ```bash
   npm run start:php
   # or
   php -S localhost:8000
   ```
   
   **Option D: Windows Batch File**
   ```bash
   start-server.bat
   ```

3. **Open your browser** to `http://localhost:8000`

## 📁 Project Structure

```
freefuse-intern-hub/
├── index.html              # Main application page
├── styles.css              # Modern CSS styling
├── app.js                  # Main application logic
├── data.js                 # Data loading and parsing
├── package.json            # Project configuration
├── start-server.bat        # Windows server startup
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── README_WEBAPP.md        # Detailed web app guide
└── build/                  # Data files and documentation
    ├── announcements.csv
    ├── contacts_stakeholders.csv
    ├── intern_directory.csv
    ├── meeting_notes.csv
    ├── onboarding_checklist.csv
    ├── resources_library.csv
    ├── Intern_Landing_Hub.md
    ├── README_IMPORT.md
    └── schema_map.json
```

## 🎯 Sections Overview

### 1. **Announcements**
- Table view with status and priority filtering
- Board view grouped by priority levels
- Shows publish dates, expiration, and summaries
- Priority badges (High, Medium, Low)

### 2. **Onboarding Checklist**
- Board view grouped by task status (Not Started, In Progress, Done)
- Table view with personal task filtering
- Calendar view showing due dates
- Assignee and category tracking

### 3. **Resources Library**
- Table view with type filtering (Doc, Template, Tool, Policy, Link)
- Gallery view grouped by resource type
- Direct links to documents and tools
- Owner and summary information

### 4. **Meeting Notes**
- Calendar view showing meeting dates
- Table view with decision filtering
- Action items and attendee tracking
- Follow-up date management

### 5. **Contacts & Stakeholders**
- Table view with area filtering (HR, Engineering, Management)
- Gallery view grouped by department
- Contact information and communication channels
- Role and responsibility tracking

### 6. **Intern Directory**
- Gallery view grouped by cohort (Fall, Spring, Summer)
- Table view with track filtering (Engineering, Design, Marketing)
- Manager assignments and contact info
- Start date and status tracking

## 🛠️ Customization

### Adding New Data
1. Update CSV files in the `build/` directory
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
- **Modern UI** - Gradients, animations, and smooth transitions

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Data Management

### CSV Structure
All data is stored in CSV files with standardized schemas:

- **Announcements**: Title, Publish Date, Expires, Status, Priority, Summary, Author, Link, Notes
- **Tasks**: Task, Status, Assignee, Due, Category/Tags, Notes, Intern
- **Resources**: Title, Type, Summary, Link, Owner
- **Meetings**: Title, Date, Attendees, Decisions, Action Items, Link
- **Contacts**: Name, Role, Area, Email, Handle, Notes
- **Interns**: Name, Cohort, Track, Manager, Email

### Data Loading
- Automatic CSV parsing with fallback to sample data
- Real-time filtering and search
- No external dependencies for data processing

## 🚀 Deployment

This is a static web application that can be deployed to:

- **GitHub Pages** - Free hosting for public repos
- **Netlify** - Drag and drop deployment
- **Vercel** - Zero-config deployment
- **Any web server** - Just upload the files

### GitHub Pages Deployment
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Check the [README_WEBAPP.md](README_WEBAPP.md) for detailed web app documentation
- Review the [build/README_IMPORT.md](build/README_IMPORT.md) for Notion import instructions
- Open an issue for bugs or feature requests

## 🎉 Acknowledgments

- Built with modern web technologies
- Designed for FreeFuse intern onboarding
- Inspired by Notion's clean interface design
- Optimized for team collaboration and productivity

---

**Enjoy your new FreeFuse Intern Hub!** 🚀
