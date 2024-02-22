# MVC Structure

This is my simple nodejs application to showcase MVC structure and simple Rest API. This boilerplate is very basic and should be used as a training ground

This database uses mongodb.

After installing, run the server using

npm start
If instead, you get something like the following, someone is already using the default port of 8080:

Server running at http://127.0.0.1:8080/

events.js:72
    throw er; // Unhandled 'error' event
              ^
Error: listen EADDRINUSE
    at errnoException (net.js:901:11)
    at Server._listen2 (net.js:1039:14)
    at listen (net.js:1061:10)
    at Server.listen (net.js:1127:5)
    ...
Once the server is running, test it by visiting the following URL in your browser:

http://localhost:8080/

## files in this repository

server.js

The server written with node.js. This server was adapted from the example provided in the node docs.

.gitignore

List of file patterns that should NOT be stored in git. If you aren't using git, you don't need this file. And the contents are personal preference.

See the npm google groups topic 'node_modules in git' from FAQ for discussion.

package.json

Standard package.json file for node packages. You will need this file for two reasons:

identify your node package dependencies during npm install
identify to Bluemix that this directory contains a node.js application
See the npm doc package.json for more information.

README.md

This file!

### Module9Lab2

Create an express back-end application for a Blog website using MongoDB. You should
refer to your database model from Module 8 for this, ensuring that your app matches the
model.

### Requirements
● Your system should have a proper MVC Structure
● The system should be able to create users.
● The users should be able to create multiple posts (posts should be very basic with
title, description and image)
● Other users should be able to like the posts and comment on the posts.