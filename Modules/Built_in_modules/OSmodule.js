const os = require('os')

var systemUptime = os.uptime()

console.log(systemUptime)

var userInfo = os.userInfo()

console.log(userInfo)

var otherInfo = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem()
}

console.log(otherInfo)

