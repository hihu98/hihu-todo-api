import appCode from 'statics/appCode/appCode'
import config from 'config/config'

const errorHandler = (err, req, res) => {
    console.log(err)

    const message = config.isDev ? err.message || err : 'Something is wrong'

    return res.status(200).json({
        code: appCode.unknownError,
        data: null,
        message: message,
    })
}

export default errorHandler
