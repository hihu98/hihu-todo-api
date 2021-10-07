const isDev = ['local', 'dev', 'test'].includes(process.env.NODE_ENV)

const config = { isDev }

export default config
