const os=require('os')

const userData=os.userInfo()
console.log(userData);

const sysUptime=os.uptime()
console.log(`The system uptime is:${sysUptime}`) //returns in seconds

const osInfo={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(), //returns in bytes
    freeMemory:os.freemem(),
}

console.log(osInfo);