import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Working'
})

app.listen({
    port: 3333,
}) .then(() => {
    console.log('HTTP Server is running now!')
})