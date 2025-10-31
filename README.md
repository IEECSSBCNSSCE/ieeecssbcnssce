# IEEE SB CS NSSCE Website 🌐

- View our website at [ieeecssbcnssce](https://ieecssbcnssce.github.io/ieeecssbcnnssce/).

This repository contains the official website of the **IEEE Student Branch CS Society, NSS College of Engineering (NSSCE)**. It serves as a central platform to showcase our activities, events, achievements, and initiatives that promote technology and innovation within the IEEE community at NSSCE.

## 🔍 Features

* Information about the Society and its activities.
* Event announcements and registration.
* Gallery showcasing recent activities.
* Contact and membership details.

---

## 🛠️ Tech Stack

This website is built using the following core technologies:

* **React.js**: A JavaScript library for building user interfaces.
* **Firebase**: Authentication system.
* **npm**: Used for package management.
* **GitHub Pages**: Used for hosting the live website.

---

## 🚀 Roadmap (Future Works)

We have many exciting plans for the website! Our current goals are being tracked as issues and include:

* **New Pages**: Adding a Team Page (`#6`), Projects Page (`#7`), and Contact Page (`#8`).
* **New Components**: Implementing a website-wide Footer (`#9`).
* **UI/UX**: A complete website redesign (`#10`).

---

## 📫 Contributing

We welcome contributions! To contribute, you first need to get the project running on your local machine.

### Prerequisites

* **Node.js**: Make sure you have a recent version of Node.js installed (v16 or higher is recommended). You can download it from [nodejs.org](https://nodejs.org/).
* **npm**: A package manager for Node.js. `npm` is included with Node.js.

### Installation Steps

1.  **Fork the Repository**
    Click the "Fork" button at the top right of this page to create a copy of this repository in your own GitHub account.

2.  **Clone Your Fork**
    Clone the repository from your account to your local machine. Replace `<Your-GitHub-Username>` with your actual username.

    ```bash
    git clone [https://github.com/IEECSSBCNSSCE/ieeecssbcnssce](https://github.com/IEECSSBCNSSCE/ieeecssbcnssce)
    ```

3.  **Navigate to the Project Directory**

    ```bash
    cd ieeecssbcnssce
    ```

4.  **Install Dependencies**
    This command will install all the necessary packages for the project.

    ```bash
    npm install
    ```

5.  **Run the Development Server**
    Start the local React development server.

    ```bash
    npm start
    ```

    Your browser should automatically open to [http://localhost:3000](http://localhost:3000) to display the website. You can now start making changes!

---

## Authentication Feature

We have integrated a **Firebase Authentication system** to enable secure user access and account management on the IEEE SB CS NSSCE website.

### Key Features

* **Login and Sign Up Pages:**  
  Users can create an account or log in securely using email and password.

* **Firebase Integration:**  
  User authentication is handled using **Firebase Auth** ensuring data security and real-time access control.

---

### How to Set Up Firebase Authentication Locally

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Click **Add project** → name it → click **Create Project**.

2. **Enable Authentication**
   - Navigate to **Build → Authentication → Get Started**.
   - Enable the **Email/Password** sign-in method.

3. **Get Firebase Config**
   - In your Firebase project settings, locate your web app configuration.
   - Copy the Firebase config object.

4. **Add Firebase Config to Your Project**
   - Create a `.env` file in the project root **as per the `.env.example` file** provided in the repository.
   - Update it with your Firebase project credentials.

5. **Install Firebase**
   ```bash
   npm install firebase
    ```
    
## 🤝 How to Contribute

We welcome and appreciate all contributions! Here is the general process for contributing to our project.

### The Contribution Workflow

1.  **Find an Issue:** Look for an existing issue to work on or create a new one to suggest a change or feature. Please discuss the change you wish to make via the issue before starting work.

2.  **Create a New Branch:** Before making any changes, create a new branch from `main`. Use a descriptive name for your branch.

    ```bash
    # Example branch names:
    # feature/add-events-page
    # fix/navbar-mobile-bug
    
    git checkout -b <your-branch-name>
    ```

3.  **Make Your Changes:** Write your code and make the necessary changes.

4.  **Commit Your Changes:** Commit your work with a clear and descriptive commit message.

    ```bash
    git add .
    git commit -m "feat: Add the events page with initial layout"
    ```

5.  **Push to Your Fork:** Push your branch to your forked repository on GitHub.

    ```bash
    git push origin <your-branch-name>
    ```

6.  **Create a Pull Request (PR):** Go to your forked repository on GitHub and click the "Compare & pull request" button. Create a PR to merge your branch into the `main` branch of the original repository.

7.  **Wait for Review:** The project maintainers will review your PR. We may suggest some changes or improvements.

Thank you for your interest in contributing!