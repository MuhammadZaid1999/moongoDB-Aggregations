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


// find the total number of males and females
db.getCollection('users').aggregate([
 {
    $group: {
      _id: "$gender",
      genderCount: {
        $sum: 1
      }
    }
 }
]);


// Which country has the highest number of registered users?
db.getCollection('users').aggregate([
    {
       $group: {
         _id: "$company.location.country",
         registeredUsers: {
           $sum: 1
         }
       }
    },
    {
        $sort: {
            registeredUsers: -1
        }
    },
    {
        $limit: 1
    }
]); 


// list all unique eye colors present in collection
db.getCollection('users').aggregate([
    {
       $group: {
         _id: "$eyeColor",
       }
    }
]);   
