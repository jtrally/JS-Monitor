connect = require('connect')
express = require('express')
app = express.createServer()
io = require('socket.io').listen(app)
port = 1337
os = require 'os'

app.use express.static(__dirname + '/static')

sendInfo = (q) ->
	data = 
		freemem : os.freemem()
		totalmem: os.totalmem()
		loadavg: os.loadavg()
		hostname: os.hostname()
		uptime: os.uptime()
	io.sockets.emit q,data
		

setInterval (->sendInfo('freemem')),1e3
setInterval (->sendInfo('loadavg')),1e3

app.listen(port)
