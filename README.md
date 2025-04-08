
# Volunteer Management

A full-stack volunteer management application that allows organizers to post volunteer needs and users to request participation in volunteer activities.

## Live Site

[Live URL](https://voluneteer-management.web.app)

## Project Purpose

The purpose of this project is to:

- Connect volunteers with organizers
- Help organizers manage volunteer needs efficiently
- Track volunteer requests per post
- Create a meaningful impact through collaboration

## Key Features

- Authentication system
- Add & Manage Volunteer Need Posts
- Volunteer Request Functionality
- Separate management for:
- My Volunteer Need Posts (with Update & Delete)
- My Volunteer Request Posts (with Cancel option)
- Responsive and clean UI using Tailwind CSS & DaisyUI
- React Date Picker for selecting deadlines
- Custom 404 Error Page with animation
- RESTful API (Express + MongoDB)
- Toast and Alert messages for UX feedback

## NPM Packages Used

| Package                                              | Purpose                                         |
| ---------------------------------------------------- | ----------------------------------------------- |
| **@emotion/react**                                   | CSS-in-JS styling (used by some animation libs) |
| **axios**                                            | For making API requests                         |
| **date-fns**                                         | Date formatting and manipulation                |
| **firebase**                                         | Authentication                                  |
| **framer-motion** / **motion**                       | Smooth page/component animations                |
| **react** / **react-dom**                            | Core React                                      |
| **react-awesome-reveal**                             | Entry animations (fade/zoom effects)            |
| **react-datepicker**                                 | Deadline picking calendar                       |
| **react-hook-form**                                  | Handling form logic and validation              |
| **react-hot-toast**                                  | Toast success/error messages                    |
| **react-icons**                                      | Icons                                           |
| **react-router-dom**                                 | Routing                                         |
| **sweetalert2**                                      | Sweet styled confirmation modals                |
| **tailwindcss**                                      | Utility-first styling                           |
| **daisyui** (installed through `tailwind.config.js`) | Pre-built UI components                         |

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js, MongoDB
- **Auth:** Firebase Authentication
- **Date:** React DatePicker + date-fns
- **UI/UX:** Framer Motion, SweetAlert2, Toasts
