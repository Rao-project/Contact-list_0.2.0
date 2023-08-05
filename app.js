const sqlite3 = require("sqlite3").verbose();
let sql;

// connect to database
const db = new sqlite3.Database("./contact.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
    console.log("Connected to database");
});

// Create table 

// sql = 'CREATE TABLE contact(id INTEGER PRIMARY KEY,first_name,last_name,phone_number_1,label_1,phone_number_2,lable_2,email,birthdate DATE,note,image,is_favorite)';
// db.run(sql , (err) =>{
//     if(err)err.message;
//     console.log("Table created successfully");
// });


// Insert query

// sql = 'INSERT INTO contact(first_name,last_name,phone_number_1,label_1,phone_number_2,lable_2,email,birthdate,note,image,is_favorite) VALUES ("Sarvaiya","Divyesh",6352239294,"work",9898899520,"home","test2003@gmail.com",2003-12-02,"Hello india","data: url",0)';
// db.run(sql , (err , data) =>{
//     if(err) {
// 		return console.log(err.message); 
// 	}
// 	console.log('Row was added to the table');

// });

//delete data

// sql = 'DELETE FROM contact WHERE id = 2';
// db.run(sql ,(err) => {
//     if(err) err.message;
//     console.log("data deleted successfully");
// });


//select data

// sql = 'SELECT * FROM contact';
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
