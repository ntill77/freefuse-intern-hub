// Main application logic
class FreeFuseHub {
    constructor() {
        this.dataLoader = new DataLoader();
        this.currentSection = 'dashboard';
        this.currentViews = {
            announcements: 'table',
            tasks: 'board',
            resources: 'table',
            meetings: 'calendar',
            contacts: 'table',
            interns: 'gallery'
        };
        this.filters = {};
    }

    async init() {
        try {
            // Load data
            await this.dataLoader.loadAllData();
            
            // Initialize UI
            this.setupEventListeners();
            this.renderDashboard();
            this.showSection('dashboard');
            
            console.log('FreeFuse Hub initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError('Failed to initialize the application');
        }
    }

    setupEventListeners() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });

        // View controls
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                const section = e.currentTarget.closest('.content-section').id;
                this.setView(section, view);
            });
        });

        // Filters
        document.querySelectorAll('select, input').forEach(filter => {
            filter.addEventListener('change', () => {
                this.applyFilters();
            });
        });
    }

    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionName;
            this.renderSection(sectionName);
        }

        // Update navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    }

    setView(section, view) {
        this.currentViews[section] = view;
        
        // Update view buttons
        const sectionElement = document.getElementById(section);
        sectionElement.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        sectionElement.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        this.renderSection(section);
    }

    renderSection(sectionName) {
        switch (sectionName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'announcements':
                this.renderAnnouncements();
                break;
            case 'tasks':
                this.renderTasks();
                break;
            case 'resources':
                this.renderResources();
                break;
            case 'meetings':
                this.renderMeetings();
                break;
            case 'contacts':
                this.renderContacts();
                break;
            case 'interns':
                this.renderInterns();
                break;
        }
    }

    renderDashboard() {
        const data = this.dataLoader.data;
        
        // Recent announcements
        const recentAnnouncements = data.announcements
            .filter(a => a.Status === 'Published')
            .sort((a, b) => new Date(b['Publish Date']) - new Date(a['Publish Date']))
            .slice(0, 3);
        
        const announcementsHtml = recentAnnouncements.map(announcement => `
            <div class="dashboard-item">
                <h4>${announcement.Title}</h4>
                <p class="text-muted">${announcement.Summary || 'No summary available'}</p>
                <span class="priority-badge ${announcement.Priority.toLowerCase()}">${announcement.Priority}</span>
            </div>
        `).join('');
        
        document.getElementById('recent-announcements').innerHTML = announcementsHtml || '<p class="text-muted">No recent announcements</p>';

        // My tasks
        const myTasks = data.tasks
            .filter(t => t.Status !== 'Done')
            .sort((a, b) => new Date(a.Due) - new Date(b.Due))
            .slice(0, 3);
        
        const tasksHtml = myTasks.map(task => `
            <div class="dashboard-item">
                <h4>${task.Task}</h4>
                <p class="text-muted">Due: ${task.Due || 'No due date'}</p>
                <span class="status-badge ${task.Status.toLowerCase().replace(' ', '-')}">${task.Status}</span>
            </div>
        `).join('');
        
        document.getElementById('my-tasks').innerHTML = tasksHtml || '<p class="text-muted">No pending tasks</p>';

        // Upcoming meetings
        const upcomingMeetings = data.meetings
            .filter(m => m.Date && new Date(m.Date) >= new Date())
            .sort((a, b) => new Date(a.Date) - new Date(b.Date))
            .slice(0, 3);
        
        const meetingsHtml = upcomingMeetings.map(meeting => `
            <div class="dashboard-item">
                <h4>${meeting.Title}</h4>
                <p class="text-muted">${meeting.Date} • ${meeting.Attendees}</p>
            </div>
        `).join('');
        
        document.getElementById('upcoming-meetings').innerHTML = meetingsHtml || '<p class="text-muted">No upcoming meetings</p>';

        // Quick stats
        const stats = {
            totalAnnouncements: data.announcements.length,
            pendingTasks: data.tasks.filter(t => t.Status !== 'Done').length,
            totalInterns: data.interns.length,
            upcomingMeetings: data.meetings.filter(m => m.Date && new Date(m.Date) >= new Date()).length
        };
        
        document.getElementById('quick-stats').innerHTML = `
            <div class="stat-item">
                <strong>${stats.totalAnnouncements}</strong> Announcements
            </div>
            <div class="stat-item">
                <strong>${stats.pendingTasks}</strong> Pending Tasks
            </div>
            <div class="stat-item">
                <strong>${stats.totalInterns}</strong> Interns
            </div>
            <div class="stat-item">
                <strong>${stats.upcomingMeetings}</strong> Upcoming Meetings
            </div>
        `;
    }

    renderAnnouncements() {
        const data = this.dataLoader.data.announcements;
        const filteredData = this.filterData(data, 'announcements');
        const view = this.currentViews.announcements;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'announcements-content', [
                'Title', 'Publish Date', 'Expires', 'Status', 'Priority', 'Summary', 'Author'
            ]);
        } else if (view === 'board') {
            this.renderBoard(filteredData, 'announcements-content', 'Priority', [
                'Title', 'Publish Date', 'Summary', 'Author'
            ]);
        }
    }

    renderTasks() {
        const data = this.dataLoader.data.tasks;
        const filteredData = this.filterData(data, 'tasks');
        const view = this.currentViews.tasks;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'tasks-content', [
                'Task', 'Status', 'Assignee', 'Due', 'Category/Tags', 'Notes', 'Intern'
            ]);
        } else if (view === 'board') {
            this.renderBoard(filteredData, 'tasks-content', 'Status', [
                'Task', 'Due', 'Assignee', 'Intern'
            ]);
        } else if (view === 'calendar') {
            this.renderCalendar(filteredData, 'tasks-content', 'Due', [
                'Task', 'Status', 'Assignee'
            ]);
        }
    }

    renderResources() {
        const data = this.dataLoader.data.resources;
        const filteredData = this.filterData(data, 'resources');
        const view = this.currentViews.resources;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'resources-content', [
                'Title', 'Type', 'Summary', 'Link', 'Owner'
            ]);
        } else if (view === 'gallery') {
            this.renderGallery(filteredData, 'resources-content', 'Type', [
                'Title', 'Summary', 'Link', 'Owner'
            ]);
        }
    }

    renderMeetings() {
        const data = this.dataLoader.data.meetings;
        const filteredData = this.filterData(data, 'meetings');
        const view = this.currentViews.meetings;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'meetings-content', [
                'Title', 'Date', 'Attendees', 'Decisions', 'Action Items'
            ]);
        } else if (view === 'calendar') {
            this.renderCalendar(filteredData, 'meetings-content', 'Date', [
                'Title', 'Attendees', 'Decisions'
            ]);
        }
    }

    renderContacts() {
        const data = this.dataLoader.data.contacts;
        const filteredData = this.filterData(data, 'contacts');
        const view = this.currentViews.contacts;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'contacts-content', [
                'Name', 'Role', 'Area', 'Email', 'Handle', 'Notes'
            ]);
        } else if (view === 'gallery') {
            this.renderGallery(filteredData, 'contacts-content', 'Area', [
                'Name', 'Role', 'Email', 'Handle'
            ]);
        }
    }

    renderInterns() {
        const data = this.dataLoader.data.interns;
        const filteredData = this.filterData(data, 'interns');
        const view = this.currentViews.interns;
        
        if (view === 'table') {
            this.renderTable(filteredData, 'interns-content', [
                'Name', 'Cohort', 'Track', 'Manager', 'Email'
            ]);
        } else if (view === 'gallery') {
            this.renderGallery(filteredData, 'interns-content', 'Cohort', [
                'Name', 'Track', 'Manager', 'Email'
            ]);
        }
    }

    renderTable(data, containerId, columns) {
        const container = document.getElementById(containerId);
        
        if (data.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No data available</p></div>';
            return;
        }

        const tableHtml = `
            <table class="data-table">
                <thead>
                    <tr>
                        ${columns.map(col => `<th>${col}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${data.map(row => `
                        <tr>
                            ${columns.map(col => {
                                const value = row[col] || '';
                                if (col === 'Status') {
                                    return `<td><span class="status-badge ${value.toLowerCase().replace(' ', '-')}">${value}</span></td>`;
                                } else if (col === 'Priority') {
                                    return `<td><span class="priority-badge ${value.toLowerCase()}">${value}</span></td>`;
                                } else if (col === 'Link' && value) {
                                    return `<td><a href="${value}" target="_blank" class="text-primary">View</a></td>`;
                                } else {
                                    return `<td>${value}</td>`;
                                }
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        container.innerHTML = tableHtml;
    }

    renderBoard(data, containerId, groupBy, columns) {
        const container = document.getElementById(containerId);
        
        if (data.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No data available</p></div>';
            return;
        }

        // Group data
        const grouped = {};
        data.forEach(item => {
            const group = item[groupBy] || 'No Group';
            if (!grouped[group]) grouped[group] = [];
            grouped[group].push(item);
        });

        const boardHtml = `
            <div class="board-container">
                ${Object.keys(grouped).map(group => `
                    <div class="board-column">
                        <h3>${group}</h3>
                        ${grouped[group].map(item => `
                            <div class="board-card">
                                ${columns.map(col => {
                                    const value = item[col] || '';
                                    if (col === 'Status') {
                                        return `<span class="status-badge ${value.toLowerCase().replace(' ', '-')}">${value}</span>`;
                                    } else if (col === 'Priority') {
                                        return `<span class="priority-badge ${value.toLowerCase()}">${value}</span>`;
                                    } else {
                                        return `<p><strong>${col}:</strong> ${value}</p>`;
                                    }
                                }).join('')}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
        
        container.innerHTML = boardHtml;
    }

    renderGallery(data, containerId, groupBy, columns) {
        const container = document.getElementById(containerId);
        
        if (data.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No data available</p></div>';
            return;
        }

        const galleryHtml = `
            <div class="gallery-container">
                ${data.map(item => `
                    <div class="gallery-card">
                        <h4>${item[columns[0]] || 'No Title'}</h4>
                        ${columns.slice(1).map(col => {
                            const value = item[col] || '';
                            if (col === 'Email' && value) {
                                return `<p><strong>${col}:</strong> <a href="mailto:${value}">${value}</a></p>`;
                            } else if (col === 'Link' && value) {
                                return `<p><strong>${col}:</strong> <a href="${value}" target="_blank">View</a></p>`;
                            } else {
                                return `<p><strong>${col}:</strong> ${value}</p>`;
                            }
                        }).join('')}
                    </div>
                `).join('')}
            </div>
        `;
        
        container.innerHTML = galleryHtml;
    }

    renderCalendar(data, containerId, dateField, columns) {
        const container = document.getElementById(containerId);
        
        if (data.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No data available</p></div>';
            return;
        }

        // Simple calendar view - in a real app, you'd use a proper calendar library
        const calendarHtml = `
            <div class="calendar-container">
                <div class="calendar-grid">
                    ${data.map(item => `
                        <div class="calendar-day">
                            <strong>${new Date(item[dateField]).toLocaleDateString()}</strong>
                            <div class="calendar-event">
                                ${item[columns[0]] || 'No Title'}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML = calendarHtml;
    }

    filterData(data, section) {
        let filtered = [...data];
        
        // Apply section-specific filters
        const filters = this.getFilters(section);
        
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                filtered = filtered.filter(item => {
                    const value = item[key];
                    if (typeof filters[key] === 'string') {
                        return value && value.toLowerCase().includes(filters[key].toLowerCase());
                    }
                    return value === filters[key];
                });
            }
        });
        
        return filtered;
    }

    getFilters(section) {
        const filters = {};
        
        switch (section) {
            case 'announcements':
                const statusFilter = document.getElementById('announcement-status-filter');
                const priorityFilter = document.getElementById('announcement-priority-filter');
                if (statusFilter) filters.Status = statusFilter.value;
                if (priorityFilter) filters.Priority = priorityFilter.value;
                break;
            case 'tasks':
                const taskStatusFilter = document.getElementById('task-status-filter');
                const assigneeFilter = document.getElementById('task-assignee-filter');
                if (taskStatusFilter) filters.Status = taskStatusFilter.value;
                if (assigneeFilter) filters.Assignee = assigneeFilter.value;
                break;
            case 'resources':
                const typeFilter = document.getElementById('resource-type-filter');
                if (typeFilter) filters.Type = typeFilter.value;
                break;
            case 'meetings':
                const dateFilter = document.getElementById('meeting-date-filter');
                const decisionsFilter = document.getElementById('meeting-decisions-filter');
                if (dateFilter) filters.Date = dateFilter.value;
                if (decisionsFilter) filters.Decisions = decisionsFilter.value;
                break;
            case 'contacts':
                const areaFilter = document.getElementById('contact-area-filter');
                if (areaFilter) filters.Area = areaFilter.value;
                break;
            case 'interns':
                const cohortFilter = document.getElementById('intern-cohort-filter');
                const trackFilter = document.getElementById('intern-track-filter');
                if (cohortFilter) filters.Cohort = cohortFilter.value;
                if (trackFilter) filters.Track = trackFilter.value;
                break;
        }
        
        return filters;
    }

    applyFilters() {
        this.renderSection(this.currentSection);
    }

    showError(message) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #dc3545;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h2>Error</h2>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const app = new FreeFuseHub();
    app.init();
});
