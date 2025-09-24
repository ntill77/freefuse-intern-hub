// Data loading and parsing functions
class DataLoader {
    constructor() {
        this.data = {
            announcements: [],
            contacts: [],
            interns: [],
            meetings: [],
            tasks: [],
            resources: []
        };
    }

    async loadAllData() {
        try {
            // Load CSV data from build directory
            await Promise.all([
                this.loadCSV('build/announcements.csv', 'announcements'),
                this.loadCSV('build/contacts_stakeholders.csv', 'contacts'),
                this.loadCSV('build/intern_directory.csv', 'interns'),
                this.loadCSV('build/meeting_notes.csv', 'meetings'),
                this.loadCSV('build/onboarding_checklist.csv', 'tasks'),
                this.loadCSV('build/resources_library.csv', 'resources')
            ]);
            
            console.log('All data loaded successfully:', this.data);
            return this.data;
        } catch (error) {
            console.error('Error loading data:', error);
            // Fallback to sample data if CSV loading fails
            this.loadSampleData();
            return this.data;
        }
    }

    async loadCSV(filePath, dataType) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            const csvText = await response.text();
            this.data[dataType] = this.parseCSV(csvText);
        } catch (error) {
            console.warn(`Could not load ${filePath}, using sample data:`, error);
            this.data[dataType] = this.getSampleData(dataType);
        }
    }

    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',');
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const row = {};
            headers.forEach((header, index) => {
                row[header.trim()] = values[index] ? values[index].trim() : '';
            });
            data.push(row);
        }

        return data;
    }

    getSampleData(dataType) {
        const sampleData = {
            announcements: [
                { Title: 'Welcome to FreeFuse!', 'Publish Date': '2025-09-01', Expires: '2025-09-21', Status: 'Published', Priority: 'High', Summary: 'Welcome message for new interns', Author: 'HR', Link: 'https://example.com/welcome', Notes: 'Important announcement' },
                { Title: 'Orientation Schedule', 'Publish Date': '2025-09-02', Expires: '2025-09-22', Status: 'Published', Priority: 'Medium', Summary: 'Schedule for orientation week', Author: 'HR', Link: 'https://example.com/orientation', Notes: 'Please review schedule' },
                { Title: 'IT Setup Instructions', 'Publish Date': '2025-09-03', Expires: '2025-09-23', Status: 'Published', Priority: 'Medium', Summary: 'Instructions for setting up your workstation', Author: 'IT', Link: 'https://example.com/it-setup', Notes: 'Follow these steps carefully' }
            ],
            contacts: [
                { Name: 'Sarah Johnson', Role: 'HR Manager', Area: 'HR', Email: 'sarah@freefuse.com', Handle: '@sarah', Notes: 'Primary HR contact' },
                { Name: 'Mike Chen', Role: 'Engineering Lead', Area: 'Engineering', Email: 'mike@freefuse.com', Handle: '@mike', Notes: 'Technical mentor' },
                { Name: 'Lisa Rodriguez', Role: 'Intern Coordinator', Area: 'HR', Email: 'lisa@freefuse.com', Handle: '@lisa', Notes: 'Intern program coordinator' }
            ],
            interns: [
                { Name: 'Alex Thompson', Cohort: 'Fall', Track: 'Engineering', Manager: 'Mike Chen', Email: 'alex@freefuse.com' },
                { Name: 'Jordan Kim', Cohort: 'Fall', Track: 'Engineering', Manager: 'Mike Chen', Email: 'jordan@freefuse.com' },
                { Name: 'Sam Wilson', Cohort: 'Fall', Track: 'Design', Manager: 'Sarah Johnson', Email: 'sam@freefuse.com' }
            ],
            meetings: [
                { Title: 'Weekly Standup', Date: '2025-09-01', Attendees: 'Alex;Jordan;Mike', Decisions: 'Continue with current sprint', 'Action Items': 'Update documentation', Link: '' },
                { Title: 'Intern Check-in', Date: '2025-09-02', Attendees: 'Alex;Jordan;Lisa', Decisions: 'Schedule additional training', 'Action Items': 'Book training sessions', Link: '' },
                { Title: 'Project Review', Date: '2025-09-03', Attendees: 'Sam;Sarah;Mike', Decisions: 'Approve design mockups', 'Action Items': 'Implement feedback', Link: '' }
            ],
            tasks: [
                { Task: 'Complete IT Setup', Status: 'Not Started', Assignee: 'Alex Thompson', Due: '2025-09-01', 'Category/Tags': 'HR', Notes: 'Set up laptop and accounts', Intern: 'Alex Thompson' },
                { Task: 'Read Company Handbook', Status: 'In Progress', Assignee: 'Jordan Kim', Due: '2025-09-02', 'Category/Tags': 'HR', Notes: 'Review all policies', Intern: 'Jordan Kim' },
                { Task: 'Meet with Manager', Status: 'Done', Assignee: 'Sam Wilson', Due: '2025-09-01', 'Category/Tags': 'HR', Notes: 'Initial one-on-one meeting', Intern: 'Sam Wilson' }
            ],
            resources: [
                { Title: 'Employee Handbook', Type: 'Doc', Summary: 'Complete company policies and procedures', Link: 'https://example.com/handbook', Owner: 'HR' },
                { Title: 'Development Environment Setup', Type: 'Tool', Summary: 'Guide for setting up development tools', Link: 'https://example.com/dev-setup', Owner: 'Engineering' },
                { Title: 'Design System', Type: 'Template', Summary: 'UI components and design guidelines', Link: 'https://example.com/design-system', Owner: 'Design' }
            ]
        };

        return sampleData[dataType] || [];
    }

    loadSampleData() {
        this.data = {
            announcements: this.getSampleData('announcements'),
            contacts: this.getSampleData('contacts'),
            interns: this.getSampleData('interns'),
            meetings: this.getSampleData('meetings'),
            tasks: this.getSampleData('tasks'),
            resources: this.getSampleData('resources')
        };
    }
}

// Export for use in other files
window.DataLoader = DataLoader;
