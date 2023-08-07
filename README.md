# This is an implement of the answer of the Family Tree Code Test Problem

So far the problem 1 and 2 are done.

## About this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) + `Typescript`.

I've also added libraries including `ESlint`, `react-redux`.

To make it simple, `webpack` and other styling libs like `styled-component` or SCSS are not involved.

Unit tests added for the util functions.

## The data in the app

The app uses a single data source (initialized from the problem's sample), all questions use the same source.

Any update performed in a question (eg. Q2), will update the data, and reflect in other questions. (eg. Add a child in Q2, then search a relevant relation in Q1 will show the difference)

The reset button will set the data back to the original one.

## Run this project

The package I submitted includes the built version in the build folder, can be run by opening the `index.html` file in browser.

Otherwise, it can be run by the scripts `yarn start` (need the node v16 setup and `yarn` installed and `yarn install`).

## Assumptions

1. Each person's name is unique in the family tree. (Avoid using uid for each person)
2. A pair of couples has one and only one male and female.
3. If a person has parents, he/she must have a father and a mother.
4. Adding child must have both mother and father existing.
5. Granddaughter relation includes the further granddaughters (Eg. grand-granddaughter)
