const routes = async (fastify, options) => {
  fastify.get('/', async (request, reply) => {
    return reply.view('/index.ejs');
  });

  fastify.get('/health', async (request, reply) => {
    return { status: 'ok' };
  });
};

module.exports = routes;