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


// size of array 
db.getCollection('users').aggregate([
  {
    $addFields: {
      noOftags: {
        $size: "$tags"
      }
    }
  }
]);

// What is the average number of tags per user?
db.getCollection('users').aggregate([
  {
    $addFields: {
      noOftags: {
        $size: {$ifNull: ['$tags', []]}
      }
    }
  },
  {
    $group: {
      _id: null,
      avgTag: {
        $avg: '$noOftags'
      }
    }
  }
]);



// count unwind documnets
db.getCollection('users').aggregate([
  {
    $unwind: '$tags'
  },
  {
    $count: 'totalDocuments'
  }
]);



// group and sum 
db.getCollection('users').aggregate([
  {
    $unwind: '$tags'
  },
  {
    $group: {
      _id: '$_id',
      noOftags: {
        $sum: 1
      }
    }
  }
]);



// What is the average number of tags per user?
db.getCollection('users').aggregate([
  {
    $unwind: '$tags'
  },
  {
    $group: {
      _id: '$_id',
      noOftags: {
        $sum: 1
      }
    }
  },
  {
    $group: {
      _id: null,
      avgTag: {
        $avg: "$noOftags"
      }
    }
  }
]);



