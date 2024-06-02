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


// Who has registered most recently?
db.getCollection('users').aggregate([
  {
    $sort: {
      registered: -1
    }
  },
  {
    $limit: 4
  },
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1
    }
  }
]);



// Categorize user by their favourite fruit
db.getCollection('users').aggregate([
  {
    $group: {
      _id: '$favoriteFruit',
      users: {
        $push: "$name"
      }
    },
  }    
]);

db.getCollection('users').aggregate([
    {
      $group: {
        _id: '$favoriteFruit',
        users: {
          $push: {name: '$name', age: '$age', fruit: '$favoriteFruit'}
        }
      },
    }    
]);



// How many users have 'ad' as the second tag in their list of tags?
db.getCollection('users').aggregate([
    {
      $match: {
        "tags.1": "ad"
      }
    },
    {
      $count: 'sencondTagAd'
    }    
]);


// Find users who have both 'enim' and 'id' as their tags. 
db.getCollection('users').aggregate([
    {
      $match: {
        tags: {
            $all: ['enim', 'id']
        }
      }
    },
]);


// List all companies loacted in USA with their corresponding user count
db.getCollection('users').aggregate([
    {
      $match: {
        'company.location.country': 'USA'
      }
    },
    {
      $group: {
        _id: '$company.title',
        userCount: {
            $sum: 1
        }
      }
    }
]);