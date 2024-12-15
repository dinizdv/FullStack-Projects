import winston from 'winston' // for logs
import config from 'config'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = config.get<string>('env') || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn' // debug: all; warn: any
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD | HH:mm' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level} - ${info.message}` // (info): object that contains log infos
    )
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({
        filename: 'logs/all.log',
    })
]

const Logger = winston.createLogger({
    level: level(), // returns the level => value as a 'debug' or 'development'
    levels,
    format,
    transports
})

export default Logger