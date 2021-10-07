import _createRouter from 'routes/_createRouter'
import indexRouter from 'routes/index.router'

const router = _createRouter()

router.use(indexRouter)

export default router
