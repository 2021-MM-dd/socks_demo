import JSEncrypt from 'jsencrypt'

const encryptor = new JSEncrypt()

const PUBLIC_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN78DfNquR5W2/RGheMU8AgqscuPLmBf4vrr/vv212kW/eo0G4CSOYFCoZffN9rNUzETL86eCgFwWH9JRMHhuVc54k/CAE1A+wxW/d0CNhiKHo2DGNSDPOWX8vRDRNHJfKKFAGK5IrfWoi2GaPWkFLK+ePnOIkst03GPDcWNhFawIDAQAB";
const PRIVATE_KEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAM3vwN82q5Hlbb9EaF4xTwCCqxy48uYF/i+uv++/bXaRb96jQbgJI5gUKhl9832s1TMRMvzp4KAXBYf0lEweG5VzniT8IATUD7DFb93QI2GIoejYMY1IM85Zfy9ENE0cl8ooUAYrkit9aiLYZo9aQUsr54+c4iSy3TcY8NxY2EVrAgMBAAECgYEAsprYNP9OR+eqijMDLYYoVXH+g5eoGnViIeq2TnFAt4+lbXs7+Sf79d6vMJK7BelKstKc3RreFRpCUsp9f5KxKhql3WaplP+Cv6WC9TZQRWlqmB/imEBWWQPN4g07WN+IdO/37c64lUvgzYnKGtgCnnQN76xRkknuG7DA8vYo04kCQQD4n4TpER4m1Qc9hbNYZDskTmfgOD0N7Sk5qyuYywqKn1zy90B73hDy/CG6p2ZNU5Vyn3c3nopAfzig4BL1N5lvAkEA1Av/Tt7olNiNTtjRYy3xoSk34Fs/JPurseVvrsq2Jq4q+Ky2nPqV/e7cSORD+qZB0hHRxcFukk6w+YPlORx9xQJAQKmUct2d3vGm6Wxdoc6nxyCRSbK2xml5QGNxelLMkhMypIqD/fNaqyfCSf6Bz/i+NMqewht8z5uHCehdZeOpBwJAFcjpwOObx3b8BYa29FaLBYCjkfQt55HHkO4+bBm9XvnzxjqQRE5mTIFWtlJlPYIJLxjPkV6PCo71FZ1cVmK79QJAT6SwOgYIPgTf0AtXtNak5NmKueqnwa4MkfUCqjbLWHblU8UXdiTHsucxAPNo1vEv5HwO9QlSnwpl07JakZ0Uwg==";


function encrypt(data) {
    encryptor.setPublicKey(PUBLIC_KEY)
    return encryptor.encrypt(data);
}

function decrypt(data) {
    encryptor.setPrivateKey(PRIVATE_KEY)
    return encryptor.decrypt(data);
}

function test(data) {
    let cryptStr = encrypt(data);
    let str = decrypt(cryptStr);
    console.log(str);
}

test("123")