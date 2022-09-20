const { setUpFastify } = require("./src/routings");

console.log("Starting Application...");

const fastify = setUpFastify();

console.log(`Starting listener on port ${process.env.PORT}...`);

fastify.listen(
  (process.env.PORT,
  "0.0.0.0",
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
    fastify.log.info(`server listening on ${address}`);
  })
);
