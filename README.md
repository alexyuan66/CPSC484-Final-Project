# CPSC 484 Project - Cats4Wellness

## Description

Our project aims to create a self-care platform that promotes mental well-being. This is achieved by encouraging users to engage in healthy habits and stress-reducing activities.

To incentivize users, the platform includes a cute mascot, a health bar/point system. Users complete tasks, such as breathing exercises, reading to jokes/inspirational quotes, and completing a self-care checklist. Each time one of these actions is completed, health points are added to the mascot, which can be seen on the health bar under the mascot.

By providing practical mental health solutions that can be done anywhere, the platform aims to produce healthy habits and improve the mental well-being of its users.

## Addressed Tasks

1. To engage the users, a cute creature such as a mascot (e.g. Handsome Dan) should be displayed on the screen to move or jump around as the user approaches the sensor. This could encourage the user to interact with our solution. During the interviews, it was noted that users missed the sources of comfort from their home, such as pets and family members, which could might help enhance their mental well-being.
    - This task is addressed by having a cute pixel-cat GIF that continuously plays on the screen. This virtual pet has a health bar which enhances the user’s engagement with the virtual system.
2. Participants should be able to have some sort of incentive to engage with the platform such as a task bar, health bar, score, etc. We introduced this task because interviewees indicated a desire for an incentive to complete self-care tasks.
    - This is achieved in our project through the inclusion of a health bar which can increase when users perform tasks. This provides a gamification aspect to the self-care tasks, giving users a sense of accomplishment and encouraging them to continue engaging with the platform.
3. Users can ask the mascot to 'cheer them up, in which case the mascot could tell them a funny joke or something. Interviewees mentioned jokes as something that made them happy.
    - This is achieved by having an option in the self-care tasks to hear a funny joke or receive an inspirational quote while the mascot is standing next to the text. This feature provides a source of entertainment and joy for the user, and makes them more appreciative of the mascot.
4. Users can answer a questionnaire about their health. This questionnaire/checklist is to remind users to do good things for their health such as drinking water, exercising, eating, etc. This will help motivate users to complete their self-care tasks, which interviewees indicated a desire towards.
    - This is achieved by having a section in the tasks option to complete a set of “self-care” tasks, which includes actions such as “Drink Water,” “Exercise,” “Remind Yourself You’re Amazing,” and “Talk to a Friend,” which we hope that the user will see as valuable additions to their routines. The rewarding of points for completing these tasks is also included to incentivize users to complete them regularly.
5. Participants should be able to receive guided practice on good deep breathing techniques. Many studies have shown how deep breathing can positively influence mental health and reduce stress. Interviewees also indicated an interest in practical mental health solutions that can be done anywhere, which deep breathing accommodates.
    - This is achieved by having a “controlled breathing” action that the user can perform which provides points to the user. This allows the user to practice and master this important skill while also providing an incentive to continue, perhaps multiple times. We also provide visual and auditory cues to guide the user through the deep breathing exercise to ensure they are following proper technique. The presence of the mascot provides positive reinforcement during the exercise, making it a more enjoyable and effective experience for the user.

# Usage

## Dependencies

- No dependencies need to be installed

## How to Run

- Open ./index.html on a web browser

## Constraints from the Deployable Environment

- Our prototype is built on the basis of TV 4 in Hillhouse. It may not work as intended on other TV systems.
- Our prototype only utilizes the right wrist as form of sensor input, as well as the chest as a form of normalization. No other body part works on our prototype.
- A user cannot stand too far from the display, or else it will not work as intended. Namely, users will not be able to reach one side of the screen to another side by moving their right arm.
- A user cannot stand too close to the display, or else it will not work as intended. Namely, the cursor utilized within our display may be too sensitive, going all over the place and not working as intended.
- A user should stand at a comfortable distance from the display so that they are able to reach all areas of the display (with the cursor) with their right arm and with no physical discomfort.

# Collaboration Record

- Alex Yuan (amy24)
    - I began the prototype development by organizing group work sessions as well as coordinated what each person was working on. 
    - My group began by first working on the front-end of our code. In specific, I assisted in developing the main-menu and congratulation pages as well as design them with their respective HTML, CSS, and JS files. One feature that was particularly buggy on these pages was the healthbar, where the value of the healthbar had to be saved between pages. I designed and implemented the health bar functionality as well as added css, fulfilling a task for our game. This involved creating the healthbar.js and updateHealthbar.js files.
    - Next, I implemented the cursor/sensor functionality within kinect-cursor.js. This was extremly difficult but Oion and I met up numeous times, attened office hours, managed to figure it out, debug, and test the cursor. This took a significant amount of time as I had no prior knowledge of the kinect sensor.
    - Once finishing the cursor, I then added this baseline cursor functionality within our front-end implementation and continued to work on the design and style of our platform. 
    - Unfortunately, after we finished the style of our platform, we added to the TV, realizing that much of the CSS of our code had to be adjusted. I adjusted the code to fit the TV,debugged based on the TV functionality, and added adjustments to the cursor functionality.
    - Finally, I created the Usage section of this readme, wrote my contributions, and further debugged the code.

- Anna Xu (awx2)
    - I did a lot of the frontend for this project. I did index.html, part of the main-menu.html, and congratulations.html. Addiitonally, I worked on styling for all the pages. One of the most difficult aspects I worked on was connecting the kinect cursor with the html pages. Before, we were using mouse hovering, which was not compatible with the sensor. Instead I had to use the javascript function getBoundingClientRect() to detect one div on top of another div. In the end, I wrote javascript for all the buttons in the project. I also was the one to upload our project to the sensor and start testing it there. 
    - It was sometimes difficult coordinating with group because of incompatible scheudles. We were able to work around this by meeting in pairs, triples, and on occation 4 people at a time. We also were in frequent communicaiton over text. 

- Nathalia Reis (nvr4)
    - Throughout the week our team met up multiple times in person and online to develop the prototype. 
    - I created the breathe.html, css, and js files and worked on getting the animated breathing circle working. 
    - I collaborated with my team to do a lot of front end development such as css styling and html coding on main-menu, breathing, quotes, and jokes. 
    - I worked with my team to adapt the code to work with the kinect sensor including adding functionality to the buttons so that hovering over them in order to select, instead of clicking. 
    - I worked on linking buttons to appropriate pages. 
    - I worked on making the buttons grow and change color when you hover over them in order to give users visual feedback of what their hands were doing. 
    - I assisted in creating the README file with Alex and Oion. 
    - As a team, we worked on testing and debugging throughout the process, and I’m very grateful to my team for helping me to figure out issues along the way. 

- Oion Akif (ora3)
    - I helped write up the README for the document, specifically the Project section including a description and tasks.
    - I created the framework for the website frontend which the rest of the code was based on, and continued to make tweaks throughout our project to help in the development of it. Namely, this involved creating the skeleton code for our front-end in main-menu.html, breathe.html, check-in.html, quotes-inspirational.html, quotes-jokes.html and quotes.js. I also added css within this code, stylizing the pages to fulfill the layout we had proposed in the figma prototype. I also added some of the front-end JS functionality within these pages, which involved getting the buttons to load on 3 seconds of contact.
    - I helped with the implementation of the cursor logic on the backend to make it controllable via the Kinect sensor. This was an extremly difficult task, but Alex and I met on a daily basis, attended office hours, and got it done. I then added this cursor functionality with Alex to our front-end code.
    - In addition to creating these pages and functionalities, I also assisted in the debugging of the code and helped test it with my groupmates.
    - I helped organize and coordinate group work sessions. We followed the schedule we had put out.