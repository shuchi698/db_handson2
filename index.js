const mongoClient = require('mongodb'). MongoClient; 

const connectionString = 'mongodb://127.0.0.1:27017';

mongoClient.connect(connectionString, async(err, db) => { 
    
    if (err) { 
        console.error("Error while connecting", err);
         return;
} 

const database = db.db ("Human_Resource"); const insertObj = 
[{

    "firstname" : "John",
    "lastname" : "Doe",
    "salary" : 25000,
    "department" : "HR",
    "lastCompany" : "X",
    "lastSalary" : 10000,
    "overallExp" : 2,
    "contactInfo" : 1234567890,
    "gradStream" : "CSE",
    "yearGrad" : 2016
},

{
    
    "firstname" : "Rohan",
    "lastname" : "Jame",
    "salary" : 30000,
    "department" : "Technical",
    "lastCompany" : "Y",
    "lastSalary" : 15000,
    "overallExp" : 1,
    "contactInfo" : 1234567890,
    "gradStream" : "CSE",
    "yearGrad" : 2015
},

{

    "firstname" : "Jame",
    "lastname" : "Doe",
    "salary" : 35000,
    "department" : "Accounts",
    "lastCompany" : "Z",
    "lastSalary" : 20000,
    "overallExp" : 1,
    "contactInfo" : 1234567890,
    "yearGrad" : 2019,
    "gradStream" : "ECE"
},

{

    "firstname" : "Sao",
    "lastname" : "Avika",
    "salary" : 30000,
    "department" : "Sales",
    "lastCompany" : "Y",
    "lastSalary" : 30000,
    "overallExp" : 2,
    "contactInfo" : 1234567860,
    "yearGrad" : 2015,
    "gradStream" : "CSE"
},

{
 
    "firstname" : "Jame",
    "lastname" : "roh",
    "salary" : 35000,
    "department" : "Accounts",
    "lastCompany" : "Z",
    "lastSalary" : 15000,
    "overallExp" : 2,
    "contactInfo" : 1234567890,
    "yearGrad" : 2019,
    "gradStream" : "EEE"
},

{

    "firstname" : "Rohan",
    "lastname" : "Jame",
    "salary" : 30000,
    "department" : "Techincal",
    "lastCompany" : "Y",
    "lastSalary" : 30000,
    "overallExp" : 1,
    "contactInfo" : 1234567860,
    "yearGrad" : 2015,
    "gradStream" : "CSE"
},

{
   
    "firstname" : "Jame",
    "lastname" : "Doe",
    "salary" : 35000,
    "department" : "Accounts",
    "lastCompany" : "Z",
    "lastSalary" : 20000,
    "overallExp" : 1,
    "contactInfo" : 1234567890,
    "yearGrad" : 2019,
    "gradStream" : "ECE"
},

{
   
    "firstname" : "Jame",
    "lastname" : "Doe",
    "salary" : 35000,
    "department" : "Accounts",
    "lastCompany" : "Z",
    "lastSalary" : 20000,
    "overallExp" : 1,
    "contactInfo" : 1234567890,
    "yearGrad" : 2019,
    "gradStream" : "ECE"
},

{
  
    "firstname" : "Sao",
    "lastname" : "Avika",
    "salary" : 30000,
    "department" : "Sales",
    "lastCompany" : "Y",
    "lastSalary" : 15000,
    "overallExp" : 2,
    "contactInfo" : 1234567860,
    "yearGrad" : 2015,
    "gradStream" : "CSE"
},

{

    "firstname" : "Jame",
    "lastname" : "Doe",
    "salary" : 35000,
    "department" : "Accounts",
    "lastCompany" : "Z",
    "lastSalary" : 15000,
    "overallExp" : 2,
    "contactInfo" : 1234567890,
    "yearGrad" : 2019,
    "gradStream" : "EEE"
}];

// Create a collection inside this named "employee".

const create = await database.collection('employee').insertMany (insertObj);
console.log(create);


// Query the collection "employee" and list all the documents.

const collection = await database.collection('employee').find().toArray();
console.log(collection);  


// Query the collection "employee" and list the employees who are having salary more than 30000.

const salary = await database.collection('employee').find({salary:{$gt:30000}}).toArray();
console.log(salary);  

// Query the collection "employee" and list the employees who are having experience more than 2 years.

const experience = await database.collection('employee').find({overallExp:{$gte:2}}).toArray();
console.log(experience);  

// Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year.


const graduate = await database.collection('employee').find({yearGrad:2015, overallExp:{$gte:2}}).toArray();
console.log(graduate);  

// Query the collection "employee" and update the salary of the employee whose salary is greater than 30000.

const update = await database.collection('employee').updateMany({salary:{$gte:30000}}, {$set:{salary:40000}});
console.log(update);   


//  Query the collection "employee" salary of the employee whose salary is greater than 30000.

const response = await database.collection('employee').find({salary:{$gte:30000}}).toArray();
console.log(response); 

// Delete all the documents from "employee" where last company is Y.

const remove = await database.collection('employee').deleteMany({lastCompany:"Y"});
console.log(remove);   


});
