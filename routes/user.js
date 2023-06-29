const User = require("../models/user")
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken")
const router = require("express").Router()

router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
	if(req.body.password) {
		req.body.password = Crypto.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
	}
	try {
		const updateUser = await User.findByIdAndUpdate(
			req.params.id, 
			{
				$set: req.body
			}, {new: true}
		)
		ress.status(200).json(updatedUser)
	} catch(err) {
		res.status(500).json(err)
	}
})

module.exports = router