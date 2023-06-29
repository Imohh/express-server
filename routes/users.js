const router = require("express").Router()
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt")
const CryptoJS = require("crypto-js");

router.post("/", async(req, res) => {


	const newUser = new User({
		fullName: req.body.fullName,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
	})

	try {
		const savedUser = await newUser.save()
		res.status(201).json(savedUser)
	} catch (err) {
		res.status(500).json(err)
	}


})

module.exports = router