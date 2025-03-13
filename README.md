# SplashGram

- SplashGram is an image management application that allows you to create albums from images received through Unsplash API calls after creating a user account and logging in. 

- New features and improvements will be added soon, such as the creation of a user avatar

Endpoints server:

| Endpoint | Method | Description
| ------------- | ------------- | ------------
| /getOneAlbum/:album_id  | GET  | Returns information about a specific album
| /newAlbum    |  POST           | Creates a new album
| /getAlbumsByOwner/:user_id | GET | Returns all albums an user has
| /getAllAlbums  | GET  | Returns all albums
| /addImageToAlbum/:album_id | POST  | Adds an image to a specific album
| /deleteAlbum/:album_id     | DELETE  | Deletes an album
| /signUp | POST | Registers the user
| /login  | POST  | Logs the user in
| /logOut  | POST  | Logs the user out
| /loggedIn     |  GET           | Keeps the user logged in
| /getUser/:user_id | GET | Returns all user information
| /updateUser  | PUT  | Updates user information
| /newImage  | POST  | Creates a new image
| /getOneImage/:image_id    |  GET           | Returns information about a specific image
| /getAllImages | GET | Returns all images
| /deleteImage/:image_id  | DELETE  | Deletes an album image
| /addCommentToImage | POST  | Adds a comment to a specific image
| /getAllCommentsFromImage/:image_id     |GET  | Returns all comments on a specific image