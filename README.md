# CHANGELOG

All notable changes to this project will be documented in this file.

---

## [1.0.2] - 2025-10-29

### Fixed

- Resolved an issue where newly added tasks did not appear immediately after creation.

- - Now, when a user adds their own tasks, the component automatically hides API tasks and displays user tasks instead.

- - If the user hasn’t added any tasks, the default API tasks will still appear as before.

- Improved readability

### Added

- Added a dropdown menu (Bootstrap) in task.component.html to allow users to select a list (e.g., Work, Personal, All Tasks) when adding a new task.

- Currently, this feature is UI-only — functionality (selecting and assigning tasks to a list) will be implemented in a future update.

## [1.0.1] - 2025-10-13

### Added

- Integrated **API** (`https://jsonplaceholder.typicode.com/todos`) to fetch to-do tasks dynamically in `task.service.ts`.
- Added `getApiTasks()` method to retrieve API data.
- Implemented random task selection for each reload.

### Changed

- Updated `task.component.ts` to use live API data instead of static task array.
- Limited displayed tasks to 10 for better variety and performance.
- Changed `task.component.html` to use **Bootstrap form controls** (checkbox + label) for a cleaner UI.

### Styled

- Added margins and spacing in `task.component.css` for better task separation and layout.
- Improved alignment and readability of task list.

---

## [1.0.0] - Initial Version

- Basic static to-do list created with sample tasks.
