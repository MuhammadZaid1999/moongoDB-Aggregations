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



// Match array as one of their element   
db.getCollection('users').aggregate([
  {
    $match: {
      tags: 'enim'
    },
  }
]);


// How many users have 'enim' as one of their tags?  
db.getCollection('users').aggregate([
  {
    $match: {
      tags: 'enim'
    },
  },
  {
    $count: "userWithEnimTag"
  }
]);


// What are the names and age of users who are inactive and have 'velit' as their tag?
db.getCollection('users').aggregate([
  {
    $match: {
      isActive: false,
      tags: 'velit'
    },
  },
  {
    $project: {
      name: 1,
      age: 1
    }
  }
]);


// how many users have a phone number starting with '+1 (940)'?
db.getCollection('users').aggregate([
  {
    $match: {
      'company.phone': /^\+1 \(940\)/ 
    },
  },
  {
    $count: 'userWithSpecificPhone'
  }
]);


// how many users have a phone number starting with '+1 (940)'?
db.getCollection('users').aggregate([
  {
    $match: {
      'company.phone': /^\+1 \(940\)/ 
    },
  },
  {
    $project: {
      name: 1,
      age: 1
    }
  }
]);