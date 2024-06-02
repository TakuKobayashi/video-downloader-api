import { Hono } from 'hono'

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.json({hello: 'Hono'})
})

app.get('/test', (c) => {
  return c.json({hello: 'test'})
})

export default app