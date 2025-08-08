
# Zoomlex BD

Zoomlex BD is a modern web application built with Next.js, React, and MongoDB. It provides a seamless platform for users to manage their accounts, access services, and interact with the Zoomlex BD ecosystem.

## Features

- User authentication (login, registration)
- Google OAuth login
- Responsive UI with custom components
- Form validation using React Hook Form and Zod
- MongoDB database integration
- Admin panel and website routes

## Tech Stack

- **Frontend:** Next.js, React
- **Styling:** Tailwind CSS, custom UI components
- **Backend:** Node.js, MongoDB, Mongoose
- **Validation:** Zod, React Hook Form

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- MongoDB Atlas or local MongoDB instance

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/mhasan0505/zoomlexbd.com.git
  cd zoomlexbd.com
  ```

2. Install dependencies:
  ```sh
  npm install
  ```

3. Set up environment variables:
  - Create a `.env.local` file in the root directory.
  - Add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
  ```sh
  npm run dev
  ```

	 The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
components.json
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
README.md
app/
 globals.css
 layout.js
 page.js
 (root)/
  auth/
   layout.js
   login/
    page.js
   register/
    page.js
 api/
  route.js
components/
 application/
 ui/
  button.jsx
  card.jsx
lib/
 DatabaseConnection.js
 utils.js
 zodSchema.js
public/
 zoomlex_logo.jpg
 Icons/
  googleicon.png
routes/
 AdminPanel/
 Website/
zoomlexbd/
 ...
```

## Usage

- Register or log in to your account.
- Use Google login for quick access.
- Access admin and website features via dedicated routes.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact

For support or inquiries, contact [mhasan0505](mailto:mhasan0505@gmail.com).
