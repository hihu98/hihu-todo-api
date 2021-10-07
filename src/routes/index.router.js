import _createRouter from 'routes/_createRouter'
import processAction from 'libs/processAction'
import ping from 'actions/ping/ping'

const indexRouter = _createRouter()

indexRouter.get('/', processAction(ping))

export default indexRouter
