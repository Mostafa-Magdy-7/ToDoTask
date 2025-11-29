# CHANGELOG

All notable changes to this project will be documented in this file.

---
## [1.0.4] - 2025-11-27

## Fixed

- as the Website starts All Tasks List will be Selected.

- due for an Api of Placeholder isn't working it was changed.


## [1.0.3] – 2025-11-22

### Added

- Implemented list-based task filtering

- Tasks now display only for the list the user selects (e.g., Work, Personal, All Tasks).

- When adding a new task, assigning it to a list correctly stores it and updates the UI.

- Added popup close buttons (X) to both:

- The Add List window

- The Add Task window
- - This allows cancelling the action without adding anything.

- # Implemented form validations for:

- - Creating a new list

- - Creating a new task
    Both now require a minimum of 3 characters, and the Add button is disabled until criteria are met.

### Changed

- Improved overall styling of popups, buttons, and spacing for cleaner UI.

- Lists now properly apply selection logic and communicate with tasks through the shared service.

- Updated component workflow to switch from template-driven forms to reactive forms, improving reliability and control.

### Fixed

- Fixed an issue where list selections were not detected by other components.

- Fixed incorrect UI behavior where tasks did not update after selecting a list.

- Improved communication between components using a shared service (BehaviorSubject-based approach).

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
