use collegeDB

// Display all students
db.students.find()

// Particular branch
db.students.find({branch:"CSE-AIML"})

// Marks more than 75
db.students.find({marks:{$gt:75}})

// Search by rollNo
db.students.find({rollNo:"23CM001"})

// Search by year
db.students.find({year:3})

// Update marks
db.students.updateOne(
  {rollNo:"23CM001"},
  {$set:{marks:90}}
)

// Update email
db.students.updateOne(
  {rollNo:"23CM002"},
  {$set:{email:"shivnew@example.com"}}
)

// Descending marks
db.students.find().sort({marks:-1})

// Create index
db.students.createIndex({rollNo:1})

// Above 80
db.students.find({marks:{$gt:80}})

// Below 50
db.students.find({marks:{$lt:50}})

// Highest marks
db.students.find().sort({marks:-1}).limit(1)

// Sort marks
db.students.find().sort({marks:-1})

// Delete using rollNo
db.students.deleteOne({rollNo:"23CM005"})
