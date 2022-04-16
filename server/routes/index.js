module.exports = app => {

    // Base URLS

    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/image', require('./image.routes.js'))
    app.use('/api/album', require('./album.routes.js'))
    app.use('/api/comment', require('./comment.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}