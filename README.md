# Overview 
**DRAW-INSIGHT** is a comprehensive web application designed for parents to manage their children's profiles and gain insights into their psychological health through the analysis of their drawings. The app allows parents to create profiles for their children, which include details such as names, genders, ages, and records of the latest insights (drawings predictions or analysis details). These insights serve as psychological records that help parents monitor their children’s emotional well-being.

The core of DrawInsight is a predictive model based on YOLOv8-class classification, which has been trained to achieve an accuracy of **95.99%**. The training and model details are documented in a [previous repository](https://github.com/HebaHamdan2/Psychological-Classification-of-Children-Drawings) with the Flask API deployed [here](https://github.com/HebaHamdan2/ChildDrawingClassifier-api). This repository represents the full application, including a [backend](https://github.com/HebaHamdan2/ChildDrawingsSpeak-backend) built with Node.js and Express.js, managing user authentication, children profiles, and storing records in a MongoDB database.



<p align="center">
  <img src="https://github.com/user-attachments/assets/3663cdd8-527b-48b3-9c5e-6740553219de" alt="Image" width="300"/>
</p>

# Features
- **User Authentication**: Includes sign-up, login, and password recovery features.
- **Dashboard**: A parent-friendly dashboard showcasing recent insights with pagination and a "Load More" button for seamless navigation.
- **Children Profiles**: Parents can manage profiles by adding, editing, or deleting children’s information.
- **Drawing Analysis**: Upload and predict children’s drawings with results displayed as radial percentage circles for emotions like happiness, sadness, anxiety, and anger. The circles are color-coded based on **psychological classifications** (e.g., happy is yellow, sad is blue).
- **Save Predictions**: Parents can save the analysis results to their child’s profile for future reference.
- **Account Management**: Options for parents to edit their account details, change passwords, or delete their accounts.
- **User Experience Enhancements**: Includes skeleton loaders for a smooth user experience and a "Page Not Found" component to handle erroneous paths. The app is fully responsive, ensuring optimal performance across different screen sizes.

# Technology Stack
- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: Handles routing within the app.
- **Formik & Yup**: Used for form handling and validation.
- **Axios**: For making HTTP requests.
- **Framer Motion**: Provides animations for a more dynamic user experience.
- **React Toastify**: Displays toast notifications.
- **SweetAlert2**: Adds beautiful alerts and modals.
- **Moment.js**: Parses, validates, manipulates, and formats dates.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **DaisyUI**: A component library built on Tailwind CSS, used for creating elements like radial progress and skeleton loaders.
- **Font Awesome**: Provides icons for enhancing the UI.
This stack enables a responsive, user-friendly interface with clear feedback, form handling, and visually appealing components.

# Journey and Purpose
Building **DRAW-INSIGHT** has been a fulfilling journey filled with learning and growth. The app reflects a deep passion for creating meaningful solutions that can have real-world impact, particularly in helping parents understand and support their children's emotional health. In a world where many children face post-war traumas, this app provides a valuable tool for them to express their feelings, even when they may not be able to articulate them verbally. It is a **dream realized, turning ideas into a functional app** that can make a difference in the lives of families.

# Demo
Check out the live demo of the application:
[Demo Link](https://www.linkedin.com/posts/heba-hamdan2_after-months-of-hard-work-im-thrilled-to-activity-7286664108307795968-XKPV?utm_source=share&utm_medium=member_desktop)

#  UI/UX Design
This project is based on a beautiful design created in Figma:  
[Dashboard(HR, Transactional)](https://www.figma.com/design/jUHg01hYM4DdlNe4NVIEBR/Dashboard-HR--Transactional---Community-?node-id=0-1&p=f&t=UrQaJB1smkKRkchs-0)

 
# Contributing
Contributions are welcome to improve features and impact. Feel free to fork, submit pull requests, or suggest ideas!

