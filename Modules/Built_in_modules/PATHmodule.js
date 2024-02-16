const path = require('path') 
// console.log(path)

// console.log(__dirname)
const mypath = '/media/mahiboob/6C5C5DDB5C5DA11E/Documents/fulstack/node_pro/Modules/Built_in_modules/Pathmodule.js'

const pathInfo = {
    fileName : path.basename(mypath),
    folderName : path.dirname(mypath),
    fileExtension : path.extname(mypath),
    absoluteORnot : path.isAbsolute(mypath),
    detailInfo : path.parse(mypath)
}

console.log(pathInfo)


//path.separator

console.log(`-Path.Separator-:   ${path.sep}`)

console.log(`-Path.Join-:   ${path.join('grandFather','myFather','mySelf','myText.txt')}`)

console.log(`-Path.Resolve-:   ${path.resolve('grandFather','myFather','mySelf','myText.txt')}`)

