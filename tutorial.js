const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.use(express.json())

const courses = [
	{ id: 1, name: "Physics" },
	{ id: 2, name: "Biology" },
	{ id: 3, name: "Chemistry" }
]


// GET ALL COURSES
app.get('/api/courses', (req, res) => {
	res.send(courses)
})


// GET SPECIFIC COURSE
app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id))
	if(!course) return res.status(404).send("Invalid ID")
	res.send(course)
})


// POST METHOD
app.post('/api/courses', (req, res) => {
	const course = {
		id: courses.length + 1,
		name: req.body.name
	}

	courses.push(course)

	if(!course.name || course.name.length < 3) return res.status(404).send("Invalid Name")
	res.send(course)

})

app.put('/api/courses/:id', (req, res) => {

})

const port = process.env.PORT_1 || 3000
app.listen(port, () => console.log(`Listening from ${port}...`))