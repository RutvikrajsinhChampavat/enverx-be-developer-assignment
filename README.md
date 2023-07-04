# Enverx Backend Developer Assignment

This repository contains the solution for the Enverx Backend Developer Assignment. It implements a Node.js application that provides an API for managing users and their tasks.

## Getting Started

### Prerequisites

To run this project locally, ensure that you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/RutvikrajsinhChampavat/enverx-be-developer-assignment.git
   ```

2. Navigate to the project directory:
   cd enverx-be-developer-assignment

3. Install the dependencies:
   npm install

4. Create a database schema. Create .env file and declare below given variables in it.

   - DB_HOST
   - DB_PORT
   - DB_USER
   - DB_PASSWORD
   - DB_NAME
   - SERVER_PORT

5. After the database schema is created and the variable are set in .env run below command.

   - npx knex migrate:latest

   This will create blogs table in given database schema.

6. After the migration has run successfully, run below command.

   - npx knex seed:run

   This command will populate dummy data in the database.

7. To start node server run command as below:

   - npm run dev

   The server will start running on provided PORT in .env file.

### API ENDPOINTS

- `GET /posts` - Get all blog posts.
  - params:
    - sort_by (blog_id, title, description, category, created_at, updated_at)
    - sort_order (asc, desc, ASC, DESC)
    - search_field (blog_id, title, description, category)
    - search
- `GET /posts/:id` - Get a specific blog post by ID.
- `POST /posts` - Create a new blog post.
  - body
    - title (requried, string, minimum lenth: 2)
    - category (requried, string, minimum lenth: 2)
    - description (requried, string, minimum lenth: 5)
- `PUT /posts/:id` - Update an existing blog post.
  - body
  - title (requried, string, minimum lenth: 2)
  - category (requried, string, minimum lenth: 2)
  - description (requried, string, minimum lenth: 5)
- `DELETE /posts/:id` - Delete a blog post.
