const router = require("express").Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const albumsRouter = require('./albums.js')
const followsRouter = require('./follows.js')
const asyncHandler = require("express-async-handler");


router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/albums', albumsRouter)
router.use('/follows', followsRouter)
//***********DELETE LATER *****/
// const { setTokenCookie, requireAuth } = require("../../utils/auth.js");
// const { User } = require("../../db/models");
// const { restoreUser } = require("../../utils/auth.js");
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "FakeUser1",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

module.exports = router;
