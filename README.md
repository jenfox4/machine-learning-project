# Machine Learning For Web Developers

I presented to web developers on how web developers can utilize machine learning. Web developers and data scientist are often at an intersection. And yet, many times I hear people say they don't know enough math to begin understanding Neural Networks and machine learning. Although it may be true that the advanced mathematics and statistics involved in machine learning cannot be learned overnight, web developers have an opportunity to at least explore machine learning using JavaScript libraries. This presentation and demonstration is aimed at how Web Dev's can start exploring machine learning with simply applications today!

For this project, I built a simple color hue predictor. The user can help train by adding to the database or the user can ask the computer to make a prediction on whether the color hue is a light or dark color.

[Check out the deployed site](https://jenfox4.github.io/machine-learning-project/)
[Check out my presentation](./machine-learning-presentation.pdf)

## Development Process

For this project, I wanted to start with something simple, so I choose color where we clearly have red, green, and blue variables that are defined. Then, something subjective needed to happen in order to fully utilize the idea of machine learning. Color hue can be subjective and merky, which makes the training for this really fun!

I created a simply html platform to create a visual effect for what's going on. I am a huge visual learner and I like when I can see what is happening. So I figured that using colors in a web browser would be the best way to show what's going on.

I decided that there would be two buttons-- train, or ask the computer to think. If you train, you should see a box with a randomly generated color and than you get to decide if the color is light or dark. This information is sent to a database. The algorithm trains based on the database and then makes a prediction.

## Getting Started With Your Own Project
To get started in your own project:
`npm install brain.js`

In your JavaScript file:
`const brain = require('brain.js')`

Read the docs on brain.js and code away!

## Built With

* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [brain.js](https://github.com/BrainJS/brain.js) - Machine Learning Library
* [bootstrap](https://getbootstrap.com/) - Used to generate RSS Feeds

# Check out more of my projects at my [website](http://jenfox4.github.io)
