const crypto = require('crypto')


function hasKey(key){
    const sha1 = crypto.createHash('sha1')
    sha1.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    return sha1.digest('base64')
}


console.log(hasKey('L5cxmDWe3kL9grBFR7Ud3g=='))