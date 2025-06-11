# Food Recipe Search and User Management

This project is a web application that allows users to search for food recipes, view details, and manage user accounts with features like sign-up, login (via OTP), and profile management but not dynamically.

---

## Live Demo & Preview

Experience the application live or take a quick visual tour!

* **Live Demo:**
    [https://zomatohomepage2k24.netlify.app/](https://zomatohomepage2k24.netlify.app/)]
* **Preview:**

* 
    ![Screenshot 2025-06-12 030656](https://github.com/user-attachments/assets/742c2967-5d10-4385-b7d2-2e86c87f5202)

    ![Screenshot 2025-06-12 030916](https://github.com/user-attachments/assets/1bd3589f-1d6b-4081-8477-0f0cea5385bd)

---

## Features

* **Food Recipe Search:**
    * Search for recipes by dish name using the `themealdb.com` API.
    * Display recipe details including name, category, tags, and a YouTube video link for preparation.
    * Dynamic display of search results.
* **User Authentication & Profile:**
    * **Sign Up:** Users can sign up with their full name and email.
    * **Login (OTP Based):** Users can log in using their phone number, which triggers an OTP (One-Time Password) generation and validation.
    * **Profile Management:** After successful login, the user's name is displayed in the profile section, and the sign-up/login options are hidden.
    * **Logout:** Users can log out, which clears their session and reverts the UI to the initial state.
* **Interactive UI Elements:**
    * **"Show More/Less" functionality:** Toggles the visibility of additional content sections (e.g., `i1` through `i9`).
    * **Placeholder Toggling:** Dynamic placeholder text for input fields (Email/Phone) based on user interaction.
    * **Swiper Carousel:** A responsive image carousel powered by the Swiper.js library.
    * **Dropdown/Toggle Menus:** Interactive elements for "caretDown", "Popup3", and "Popup2" to show/hide content.
* **Form Validations:** Basic validation for input fields like name, email, and phone number.
* **Loading Spinners & Popups:** Provides visual feedback during asynchronous operations (e.g., login, sign-up) and displays messages using popups.
* **Local Storage Integration:** Persists the user's profile name in local storage for a consistent user experience.
* **OTP Input Handling:** Automatically moves focus to the next input field as the user types the OTP.

---

## Technologies Used

* **HTML5:** Structure of the web pages.
* **CSS3:** Styling and layout (including responsiveness).
* **JavaScript (ES6+):** Core logic for dynamic content, API interactions, and user interface manipulation.
* **Swiper.js:** A modern touch slider for creating responsive image carousels.
* **MealDB API:** Used to fetch food recipe data.

---
