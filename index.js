#!/usr/bin/env node

import app from 'app'
import http from 'http'

const port = process.env.PORT || 3000
app.set('port', port)
const server = http.createServer(app)

const _onErr = error => {
    if (error.syscall !== 'listen') throw error

    if (error.code === 'EACCES') {
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
    }

    if (error.code === 'EADDRINUSE') {
        console.error(bind + ' is already in use')
        process.exit(1)
    }

    throw error
}

const _onListening = () => {
    console.log(`App started: http://localhost:${port}`)
}

server.listen(port)
server.on('error', _onErr)
server.on('listening', _onListening)
