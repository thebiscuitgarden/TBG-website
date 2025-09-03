# The Biscuit Garden Website

This repository contains the code for the official website of The Biscuit Garden

## Overview

This website is designed to showcase The Biscuit Garden's services, provide business information, and serve as a platform for engaging with customers.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Nodemailer (send form data to email)

## Features

- Homepage: Introduction to The Biscuit Garden
- About Us: Information about the business and its team
- Services: Detailed information about offered services (Boarding, Daycare and Grooming)
- Contact Us: Contact form and business contact information
- Responsive Design: Optimized for various devices (mobile, tablet, desktop)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/duellal/TBG-website.git
```

### 2. Install Dependencies

```bash
cd TBG-website/frontend
npm i
```

```bash
cd TBG-website/backend
npm i
```

### 3. Add .env Variables

#### Backend Variables

- EMAIL_HOST
- EMAIL_RECIPIENT
- EMAIL_SENDER
- SENDER_PASS

<b>Note:</b> If using Gmail, go to the gmail sender's settings and search for "App Passwords". Create a new app password and use that for the SENDER_PASS env variable. Nodemailer will not work otherwise.

#### Frontend Variables

- REACT_APP_API
  - Can either be the localhost url or the deployed url

### 4. Run the Application

```bash
cd TBG-website/frontend
npm run start
```

```bash
cd TBG-website/backend
npm run start
```

## Credits

- Developer: Alexandria Duell
  - Email: aduellswe@gmail.com
  - Github: [duellal](https://github.com/duellal)
  - LinkedIn: [in/alexandria-duell](https://www.linkedin.com/in/alexandria-duell/)
  - [Personal Website](https://alexandriaduellswe.netlify.app/)
