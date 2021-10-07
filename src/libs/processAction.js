import appCode from 'statics/appCode/appCode'

const processAction = action => async (req, res) => {
    try {
        const data = (await action(req, res)) || true

        return res.json({
            code: appCode.ok,
            data: data,
            message: null,
        })
    } catch (e) {
        console.log(e)

        const { message, code = appCode.unknownError, status = 200 } = e

        return res.status(status).json({
            code: code,
            data: null,
            message: message,
        })
    }
}

export default processAction
