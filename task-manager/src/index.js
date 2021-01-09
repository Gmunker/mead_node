const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is under maintaince')
// })

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const Task = require('./models/task')
// const User = require(('./models/user'))

// const main = async () => {
//   // const task = await Task.findById('5ff52a3401cadf04803b59dd')
//   // await task.populate('owner').execPopulate()
//   // console.log(task)

//   const user = await User.findById('5ff528206272d41d1c798da1')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)

// }
// main()
