<img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/6e2a64e5-7806-4d6e-b484-de6db7c6c605" />


## Task Master (TypeScript)
High-performance task management engine focused on clean architecture and optimized state flow.

## Tech Stack
* Core: React 18, TypeScript, Vite
* State Logic: useReducer (Complex State Transitions) & Context API
* Optimization: useMemo, useCallback for render performance
* Persistence: LocalStorage Sync via custom hooks
* Architecture: Custom Hook Decomposition (Logic vs. View)

## Key Engineering Features
* Predictable State: Implemented a Reducer pattern with Discriminated Unions to handle complex task transitions (Duplicate, Toggle, Clear) safely.
* Modular Logic: Decoupled business logic into specialized Custom Hooks (useTodoLogic, useTheme), making the UI components "dumb" and maintainable.
* Performance First: Leveraged useMemo for heavy filtering and useCallback to prevent unnecessary child re-renders, ensuring 60fps interaction even with large lists.
* Theme Engine: Global theme management using React Context with a safe-guard pattern for production-ready error handling.
* Type Safety: 100% Type coverage. Every action, state slice, and component prop is strictly typed to eliminate runtime errors.

## Functionality
* Advanced CRUD: Standard operations plus a "Duplicate" feature with unique ID generation.
* Smart Filtering: Dynamic views (All/Active/Completed) optimized via memoization.
* Persistence: Automatic state hydration and synchronization with the browser's LocalStorage.
