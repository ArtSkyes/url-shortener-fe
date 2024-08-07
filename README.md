# URL Shortener Application

## Overview

This URL shortener is a full-stack web application built with a Ruby on Rails backend and a React frontend. It provides a simple and efficient way to shorten long URLs and track their usage.

### Key Features

- Shorten long URLs to easily shareable short links
- View the top 100 most accessed shortened URLs
- Display analytics including click count and creation date for each shortened URL
- Responsive design for both desktop and mobile devices
- Custom color scheme and modern UI

## Algorithm

The core algorithm for URL shortening involves the following steps:

1. **URL Submission**
   - User submits a long URL through the frontend form
   - Frontend sends a POST request to the Rails backend

2. **URL Validation**
   - Backend validates the submitted URL using a regex pattern
   - If invalid, an error is returned to the frontend

3. **Short Code Generation**
   - For valid and new URLs, a unique short code is generated
   - Short code is based on the database ID of the URL entry, encoded to base 62

4. **Database Storage**
   - Long URL, short code, and initial click count (0) are stored in the database

5. **Response to Frontend**
   - Backend sends the short code and other URL details back to the frontend

6. **Display to User**
   - Frontend displays the new shortened URL to the user

7. **URL Redirection**
   - When a shortened URL is visited, backend looks up the corresponding long URL
   - Click count for that URL is incremented
   - User is redirected to the original long URL

8. **Top 100 List**
   - Backend maintains a list of the top 100 most accessed URLs
   - List is updated each time a URL is accessed
   - Frontend can request and display this list

## Architecture

- RESTful API principles for frontend-backend communication
- React hooks (useState, useEffect) for state management and side effects
- Tailwind CSS for responsive and modern UI design

This architecture allows for a scalable, maintainable, and user-friendly URL shortening service.
