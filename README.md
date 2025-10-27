#  CHANGELOG

All notable changes to this project will be documented in this file.

---

## [1.0.1] - 2025-10-27

### Added
- Integrated **API** (`https://jsonplaceholder.typicode.com/todos`) to fetch to-do tasks dynamically in `task.service.ts`.
- Added `getApiTasks()` method to retrieve API data.
- Implemented random task selection for each reload.

###  Changed
- Updated `task.component.ts` to use live API data instead of static task array.
- Limited displayed tasks to 10 for better variety and performance.
- Changed `task.component.html` to use **Bootstrap form controls** (checkbox + label) for a cleaner UI.

###  Styled
- Added margins and spacing in `task.component.css` for better task separation and layout.
- Improved alignment and readability of task list.

---

## [1.0.0] - Initial Version
- Basic static to-do list created with sample tasks.
