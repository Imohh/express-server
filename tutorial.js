const express = require('express')
const app = express()

const courses = [
	{ id: 1, name: 'courses1' },
	{ id: 2, name: 'courses2' },
	{ id: 3, name: 'courses3' }
];	

// GET METHOD
app.get('/', (req, res) => {
	res.send('HELLO WORLD!!!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) res.status(404).send('Not a valid ID');
	res.send(course);
});

// END OF GET METHOD

const port = 4000;
app.listen(4000, () => console.log('Listening from port 4000...'));