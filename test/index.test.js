const tap = require('tap');
const createServer = require('../index');  // Імпортуємо функцію для створення сервера

tap.test('GET / should return { hello: "world" }', async (t) => {
  const app = createServer();  // Створюємо новий сервер для тесту
  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  t.equal(response.statusCode, 200, 'Status code should be 200');
  t.same(JSON.parse(response.payload), { hello: 'world' }, 'Response payload should match');
});

tap.test('GET /goodbye should return { message: "Goodbye, world!" }', async (t) => {
  const app = createServer();  // Створюємо новий сервер для тесту
  const response = await app.inject({
    method: 'GET',
    url: '/goodbye'
  });

  t.equal(response.statusCode, 200, 'Status code should be 200');
  t.same(JSON.parse(response.payload), { message: 'Goodbye, world!' }, 'Response payload should match');
});

tap.afterEach(async () => {
  // Закриваємо сервер після кожного тесту
  await app.close();
});