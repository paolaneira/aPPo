const router = require("express").Router();
const { User } = require("../db/models");
const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
module.exports = router;

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// })

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "firstName", "lastName", "email", "phone"]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findById(id);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    next(err);
  }
});

// //update user profile image
// router.put('/avatar', async (req, res, next) => {
//   try {
//     const userId = req.user.id
//     const base64 = req.body.base64
//     const avatar = new Buffer.from(base64, 'base64').toString('binary')
//     const file = `avatar.png`

//     await fs.writeFile(file, avatar, 'binary', err => {
//       if (err) throw err
//       console.log(`The file has been saved!`)
//     })

//     const s3 = new AWS.S3()
//     const DATE_NOW = Date.now()
//     const filePath = path.join(__dirname, '..', '..', 'avatar.png')

//     const params = {
//       Bucket: process.env.S3_BUCKET,
//       Body: fs.createReadStream(filePath),
//       Key: `avatars/avatar_${DATE_NOW}.png`,
//       ACL: 'public-read'
//     }

//     s3.upload(params, function(err, data) {
//       if (err) console.log(`Error: ${err}`)
//       if (data) console.log(`Uploaded in: ${JSON.stringify(data)}`)
//       if (data) console.log(`Uploaded in: ${data.Location}`)
//     })

//     const avatarUri = `https://identifi-jubjub.s3.amazonaws.com/avatars/avatar_${DATE_NOW}.png`
//     console.log(`
//       AvatarURI: ${avatarUri}
//     `)

//     const user = await User.findOne({
//       where: {
//         id: userId
//       }
//     })
//     const updated = await user.update({
//       avatar: avatarUri
//     })
//     res.json(updated)
//   } catch (err) {
//     next(err)
//   }
// })

//update user email
router.put("/email", async (req, res, next) => {
  try {
    const userId = req.user.id;
    const email = req.body.email;
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    const updated = await user.update({
      email
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

//update user name
router.put("/name", async (req, res, next) => {
  try {
    const userId = req.user.id;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    // console.log('this is the name -------------', firstName, lastName)
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    const updated = await user.update({
      firstName,
      lastName
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

//update user password
router.put("/password", async (req, res, next) => {
  try {
    const userId = req.user.id;
    const password = req.body.password;
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    const updated = await user.update({
      password
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

//update user phone
router.put("/phone", async (req, res, next) => {
  try {
    const userId = req.user.id;
    const phone = req.body.phone;
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    const updated = await user.update({
      phone
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});
