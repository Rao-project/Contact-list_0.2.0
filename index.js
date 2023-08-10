// const lib = require("./Javascript/test.js");
const sqlite3 = require("sqlite3").verbose();
let sql;

// connect to database
const db = new sqlite3.Database("./data.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
    console.log("Connected to database");
});
// const result = lib.add();
// console.log(result);
// Create table-

// sql = 'CREATE TABLE contact(id INTEGER PRIMARY KEY,first_name,last_name,label_1,phone_number_1,lable_2,phone_number_2,email,birthdate DATE,note,image,is_favorite)';
// db.run(sql , (err) =>{
//     if(err)err.message;
//     console.log("Table created successfully");
// });

// Insert query

// sql = 'INSERT INTO contact(first_name,last_name,label_1,phone_number_1,lable_2,phone_number_2,email,birthdate,note,image,is_favorite) VALUES ("Sarvaiya","Divyesh","work",6352239294,"home",9898899520,"test2003@gmail.com","02-Dec-2003","Hello india","Image:url",1)';
// db.run(sql , (err , data) =>{
//     if(err) {
//         return console.log(err.message); 
//     }
//     console.log('Row was added to the table:');
// });

// //select data

// sql = 'SELECT * FROM contact ';
// db.all(sql, [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     rows.forEach((row) => {
//       console.log(row);
//     });
//   });

//Drop table

// sql = 'DROP TABLE contact';
// db.run(sql , (err) =>{
//     if(err) err.message;
//     console.log("Table deleted successfully");
// })

