let http = require('http')
let port = 8080

const program = require('commander')

program
    .version('1.1.0', '-v --version')
    .option('-p, --duan')
    .parse(process.argv)

if (program.duan) {

    if (process.argv[3] === undefined) {
        port = 8080
    } else {
        port = process.argv[3]
    }
    console.log(port)
}

const server = http.createServer((req, res) => {
    res.end('111')
})
server.listen(port, () => {
    console.log(`成功，端口${port}`)
})