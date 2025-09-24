# FreeFuse – Intern Onboarding Hub

Your central hub for announcements, tasks, resources, meetings, and contacts.

## Quick Links

- [Announcements Database](#announcements--published-current-and-by-priority)
- [Onboarding Checklist Database](#onboarding-checklist--kanban-my-tasks-calendar-due)
- [Resources Library Database](#resources-library)
- [Meeting Notes Database](#meeting-notes)
- [Contacts & Stakeholders Database](#contacts--stakeholders)
- [Intern Directory Database](#intern-directory)

---

## Announcements — Published (Current) and By Priority

**View A (Table)**: Status=Published; Expires ≥ Today; Sort Publish Date ↓
- Filter: Status equals "Published" AND Expires is on or after today
- Sort: Publish Date descending (newest first)
- Properties to show: Title, Publish Date, Expires, Priority, Summary, Author

**View B (Board)**: Group by Priority
- Group by: Priority
- Card properties: Title, Publish Date, Summary
- Sort within groups: Publish Date descending

*Import `announcements.csv` to create this database*

---

## Onboarding Checklist — Kanban, My Tasks, Calendar (Due)

**View A (Board)**: Group by Status
- Group by: Status
- Card properties: Task, Due, Assignee, Intern
- Sort within groups: Due date ascending

**View B (Table)**: Filter Assignee contains <Your Name>; Sort Due ↑
- Filter: Assignee contains your name (update after import)
- Sort: Due ascending (earliest first)
- Properties to show: Task, Status, Due, Category/Tags, Notes, Intern

**View C (Calendar)**: Date = Due
- Date property: Due
- Card properties: Task, Status, Intern
- Show as: Calendar view

*Import `onboarding_checklist.csv` to create this database*

---

## Resources Library

**View A (Table)**
- Properties to show: Title, Type, Summary, Link, Owner
- Sort: Title alphabetical

**View B (Gallery)**: Group by Type; Card shows Title, Summary, Link
- Group by: Type
- Card preview: Title
- Card properties: Summary, Link, Owner
- Layout: Small cards

*Import `resources_library.csv` to create this database*

---

## Meeting Notes

**View A (Calendar)**: Date
- Date property: Date
- Card properties: Title, Attendees, Decisions
- Show as: Calendar view

**View B (Table)**: Filter Decisions is not empty
- Filter: Decisions is not empty
- Sort: Date descending (newest first)
- Properties to show: Title, Date, Attendees, Decisions, Action Items

*Import `meeting_notes.csv` to create this database*

---

## Contacts & Stakeholders

**View A (Table)**
- Properties to show: Name, Role, Area, Email, Handle, Notes
- Sort: Name alphabetical

**View B (Gallery)**: Card shows Name, Role; Group by Area
- Group by: Area
- Card preview: Name
- Card properties: Role, Email, Handle
- Layout: Medium cards

*Import `contacts_stakeholders.csv` to create this database*

---

## Intern Directory

**View A (Gallery)**: Group by Cohort; Card shows Name, Track, Manager
- Group by: Cohort
- Card preview: Name
- Card properties: Track, Manager, Email
- Layout: Medium cards

**View B (Table)**
- Properties to show: Name, Cohort, Track, Manager, Email
- Sort: Name alphabetical

*Import `intern_directory.csv` to create this database*

---

## How to Finish Setup in Notion

### Import Process:
- [ ] Import each CSV file from the `build/` folder into Notion as a database page
- [ ] Name each database exactly as shown above (e.g., "Announcements", "Onboarding Checklist", etc.)
- [ ] Open each database → Settings → Copy link → Return to this Hub page
- [ ] Edit this page → Replace the "Import [filename].csv" text with the actual database links

### View Configuration:
- [ ] Create the views listed under each section with exact names (e.g., "View A (Table)", "View B (Board)")
- [ ] Apply the specified filters, sorts, and groupings for each view
- [ ] Enable "Full width" and "Small text" settings on this page for better layout
- [ ] Hide noisy properties and resize columns to avoid horizontal scrolling
- [ ] Customize card properties in Gallery and Board views as specified

### Final Steps:
- [ ] Update Quick Links section with actual database links
- [ ] Test all filters and views work as expected
- [ ] Customize assignee filters in Onboarding Checklist View B with actual names

### Tips:
- Use the "Duplicate" option when creating similar views
- Database templates can be created for recurring tasks/announcements
- Set up notifications for due dates and new announcements
- Consider creating additional filtered views based on your team's needs
