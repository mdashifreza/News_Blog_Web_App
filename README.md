# News Blog Web App

## Overview
This project aims to create a responsive and user-friendly News Blog application with Crud Operation storing news from https://newsdata.io/ throungh api in mongoDB.

1. **User Registration and Login:**
   - Users can create accounts and log in to access personalized Blog preferences.
   - Firebase used for authentication.
   - **Dummy Login Credentials:**
   - **Email ID:** impresario_global@gmail.com
   - **Password:** global@123

This project is a web application that provides features for user authentication, a dashboard to display articles, article detail pages, and functionality to create, edit, and delete articles.

## Video Demo
link: (https://www.loom.com/share/152f9869ac664bfda7080fb1bc4f1a05?sid=26b68225-1897-475d-bb4d-856f1884474f)

## Features implemented

- [Authentication](#authentication)
- [Dashboard](#dashboard)
- [Article Detail Page](#article-detail-page)
- [Create/Edit Article](#createedit-article)
- [Delete Article](#delete-article)

## Authentication

- Users can register with a username, email, and password.
- Users can log in with their credentials.
- Authentication is required to access certain features (e.g., creating and deleting articles).

## Dashboard

- After logging in, users are directed to a dashboard displaying a list of articles.
- Each article card shows the title, a brief excerpt, and the author's username.

## Article Detail Page

- Clicking on an article card leads to a detailed view of the article.
- The detailed view includes the full content of the article, the author's username, and a back button to return to the dashboard.

## Create/Edit Article

- Authenticated users can create new articles.
- Users can edit their own articles.
- Form fields for the article title and content.

## Delete Article

- Authenticated users can delete their own articles.
- A confirmation modal might be implemented for safety.

# Technical Implementation

## Frontend

- **React:** Used for building the user interface.
- **Redux:** Employed for state management.
- **Axios:** Utilized for handling API requests.
- **React Router:** Implemented for navigation.

## Backend

- **Node.js and Express:** Utilized for the server.
- **MongoDB:** Chosen for data storage.
- **Mongoose:** Employed for database interactions.
- **JWT:** Used for authentication.

## Project Live
link: (https://impresario-global-frontend.vercel.app/)


2. **Design and UI/UX:**
   - Created a best possible user-friendly interface that is responsive and provides a smooth user experience.

## Getting Started
To run the project locally, follow these steps:

3. Clone the repository:

   ```bash
   git clone https://github.com/mdashifreza/impresario_global_frontend.git
   cd impresario_global_frontend
4. Install dependencies:
    ```bash
    npm install

5. Run the application:
    ```bash
    npm start

