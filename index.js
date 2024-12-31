const fastify = require('fastify');

// Створення функції для ініціалізації Fastify
const createServer = () => {
  const app = fastify({ logger: true });

  // Роут / (головна сторінка)
  app.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

  // Роут /goodbye
  app.get('/goodbye', async (request, reply) => {
    return { message: 'Goodbye, world!' };
  });

  return app;
};

// Експортуємо функцію для ініціалізації сервера
module.exports = createServer;

// Запуск серверу, якщо файл виконано безпосередньо
if (require.main === module) {
  const app = createServer();
  app.listen({ host: 'localhost', port: 3000 }, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Server is running at http://localhost:3000');
  });
}