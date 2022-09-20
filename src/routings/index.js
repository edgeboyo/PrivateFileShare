const path = require("path");

function createFastify() {
  const fastify = require("fastify")({
    logger: false,
  });

  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
    prefix: "/", // optional: default '/'
  });

  return fastify;
}

function createRoutings(fastify) {
  // Root directory - upload site
  fastify.get("/", async (request, reply) => {
    reply.view("Hello!");
  });
}

function setUpFastify() {
  const fastify = createFastify();

  createRoutings(fastify);

  return fastify;
}

module.exports = { setUpFastify };
