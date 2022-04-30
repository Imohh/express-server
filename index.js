const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
]


// GET METHOD

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) {
	res.status(404).send('The course with the given ID was not found');} // 404

	
	res.send(course);
});

// END OF GET METHOD

// POST METHOD

app.post('/api/courses/', (req, res) => {
	// const schema = {
	// 	name: Joi.string().min(3).required()
	// }

	// const result = Joi.validate(req.body, schema)
	// console.log()


	if(!req.body.name || req.body.name.length < 3) {
		res.status(400).send('Name is required and should be a minimum of 3 characters');
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
})

// END OF POST METHOD


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))