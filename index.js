const { setUpFastify } = require("./src/routings");

console.log("Starting Application...");

const fastify = setUpFastify();

console.log(`Starting listener on port ${process.env.PORT}...`);

if (process.env.DRY_RUN === "TRUE") {
  console.warn("Dry run completed. Exiting application...");
  process.exit(0);
}

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
