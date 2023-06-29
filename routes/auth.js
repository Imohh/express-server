const router = require("express").Router()
const { User } = require("../models/user")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")


router.post("/", async(req, res) => {


	try {
		const user = await User.findOne({ email: req.body.email })
		!user && res.status(401).json("wrong credentials")

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password, 
			process.env.PASS_SEC
		)
		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

		OriginalPassword != req.body.password && 
			res.status(401).json("Wrong credentials")

			const accessToken = jwt.sign({
				id:user._id
			}, 
			process.env.JWT_SEC,
			{expiresIn: "3d"}
			)

		const { password, ...others } = user._doc

		res.status(200).json({...others, accessToken})
	} catch (err) {
		res.status(500).json(err)
	}

})

module.exports = router