/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('aggree');


// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.


// gruoup by gemder
const groupByGender = db.getCollection('users').aggregate([
    {
      $group: {
        _id: '$gender'
      }
    },
]);

// group by age 
const groupByAge = db.getCollection('users').aggregate([
    {
      $group: {
        _id: '$age'
      }
    },
]);


// What is the average age of all users?  
const averageAge = db.getCollection('users').aggregate([
    {
      $group: {
        _id: null,
        averageAge:{
        $avg: "$age"
        }    
      }
    },
]);



// What is the average age of males and average age of females?  
const groupByGenderAndAverageAge = db.getCollection('users').aggregate([
    {
      $group: {
        _id: "$gender",
        averageAge:{
        $avg: "$age"
        }    
      }
    },
]);


// List the count of Fruits 
const groupAndCount = db.getCollection('users').aggregate([
    {
      $group: {
        _id: "$favoriteFruit",
        quantity:{
        $sum: 1
        }    
      }
    },
]);


// Sort the fruits by higest count
const groupCountAndSort = db.getCollection('users').aggregate([
    {
      $group: {
        _id: "$favoriteFruit",
        quantity:{
        $sum: 1
        }    
      }
    },
    {
        $sort: {
          quantity: -1
        }
    }
]);



// List the top 2 most common fruits 
const groupCountAndSortAndimit = db.getCollection('users').aggregate([
    {
      $group: {
        _id: "$favoriteFruit",
        quantity:{
        $sum: 1
        }    
      }
    },
    {
        $sort: {
          quantity: -1
        }
    },
    {
        $limit: 2
    }
]);




