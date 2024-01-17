const fs = require('fs')
const crypto = require('crypto')
const chalk = require('chalk')

/**
 * GET db
**/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))

/**
 * GET random user from db
 * return {string}
**/
const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}

/**
 * add user to db
 * @param {String} userId 
 * @param {String} name 
 * @param {String} age 
 * @param {String} time 
 * @param {String} serial 
**/
const addRegisteredUser = (userid, name, age, time, serials) => {
    const obj = { id: userid, name: name, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./database/registered.json', JSON.stringify(_registered, null, 2))
}

const delRegisteredUser = (serials) => {
    const index = _registered.findIndex(entry => entry.serial === serials);
    
    if (index !== -1) {
        _registered.splice(index, 1);
        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered, null, 2));
    }
}
/**
 * GET random serial
 * params {number} size
 * return {string}
**/
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/**
 * cek user from db
 * params {string} userid
 * return {true/false}
**/
const checkRegisteredUser = (userid) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === userid) {
            status = true
        }
    })
    return status
}

const checkSerialUser = (serials) => {
    const user = _registered.find(entry => entry.id === serials);

    if (user) {
        return user.serial || 'Serial Number not found';
    } else {
        return 'User not found in the database';
    }
}

module.exports = {
	getRegisteredRandomId,
	addRegisteredUser,
	delRegisteredUser,
	createSerial,
	checkRegisteredUser,
	checkSerialUser
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`${__filename} TELAH DI UPDATE`))
delete require.cache[file]
require(file)
})