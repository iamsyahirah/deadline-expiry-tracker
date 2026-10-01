# Deadline — Personal Expiry Tracker

Deadline is a lightweight React application for tracking important expiry and renewal dates in one place.

It is designed for items such as:

- Road tax
- Insurance
- Passport
- Driving licence
- Domains
- Hosting
- Subscriptions
- Memberships
- Warranties
- Certifications

## Problem

Important expiry and renewal information is often scattered across emails, documents, apps, and physical records.

This makes it easy to forget when something needs to be renewed.

Deadline provides a single dashboard where users can monitor upcoming expiry dates, renewal costs, and items that require attention.

## Features

- Add expiry items
- Edit existing items
- Delete items with confirmation
- Automatic days-left calculation
- Automatic status:
  - Active
  - Expiring Soon
  - Expired
- Search by item name or category
- Filter by status
- Sort by expiry date
- Renewal cost tracking
- Monthly and yearly recurrence metadata
- Upcoming renewal cost summary
- Needs Attention section
- localStorage persistence
- Responsive desktop and mobile layouts
- Empty states
- Form validation
- Accessible modal interactions

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React
- localStorage

## Architecture

The application uses a simple client-side architecture suitable for the MVP.

`App.jsx` manages the main application state, while UI responsibilities are split into reusable components.

Business logic such as expiry status and date calculations is separated into utility functions.

Example structure:

```text
src/
├── components/
├── data/
├── utils/
├── App.jsx
├── main.jsx
└── index.css