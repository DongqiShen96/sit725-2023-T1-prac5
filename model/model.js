let client = require('../dbConnection');
let collection = client.db('test').collection('Projects');

const insertProjects = (project, callback) => {
    collection.insertOne(project, callback);
}

const getProjects = (callback) => {
    collection.find({}).toArray(callback);
}

module.exports = {insertProjects,getProjects}