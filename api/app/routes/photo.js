const { photoAPI } = require('../api'),
    path = require('path'),
    { wrapAsync, auth } = require('../infra')

module.exports = app => {

    app.route('/:userName/photos')
        .get(wrapAsync(photoAPI.list));
        
    app.route('/photos')
        .get(wrapAsync(photoAPI.listAll));
    
    app.route('/photos/upload')
        .post(auth, app.get('upload').single('imageFile'), wrapAsync(photoAPI.addUpload))

    app.route('/photos/:photoId')
        .post(auth, wrapAsync(photoAPI.add))
        .delete(auth, wrapAsync(photoAPI.remove))
        .get(wrapAsync(photoAPI.findById));

   
    app.route('/photos/:photoId/like')
        .post(auth, wrapAsync(photoAPI.like));
};