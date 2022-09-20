const path = require("path");

function createFastify() {
  const fastify = require("fastify")({
    logger: true,
  });

  fastify.register(require("@fastify/static"), {
    root: path.join(path.dirname(require.main.filename), "public"),
    prefix: "/", // optional: default '/'
  });

  return fastify;
}

function createRoutings(fastify) {
  // Root directory - upload site
  fastify.get("/", async (request, reply) => {
    reply.send({ hello: "world" });
  });
}

function setUpFastify() {
  const fastify = createFastify();

  createRoutings(fastify);

  return fastify;
}

module.exports = { setUpFastify };
