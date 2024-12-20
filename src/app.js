const fastify = require('fastify')({ logger: true });
const path = require('path');
const routes = require('./routes/index');
const plugins = require('./plugins/index');

// Register plugins
plugins(fastify);

fastify.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs')
    },
    root: path.join(__dirname, 'views')
});

// Set up middleware (if any)

// Register routes
routes(fastify);

// Start the server
async function start() {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server listening on http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();