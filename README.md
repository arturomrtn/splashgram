# SplashGram

SplashGram es una aplicación de gestión de imágenes donde tras crear un usuario e iniciar sesión se pueden crear álbumes a partir de imágenes recibidas a través de llamadas a la API de Unsplash. 

Pronto se añadirán nuevas funcionalidades y mejoras, como la creación de un avatar para el usuario a través de Cloudinary.

A continuación, 

Endpoints servidor:

| Endpoint | Método | Descripción
| ------------- | ------------- | ------------
| /getOneAlbum/:album_id  | GET  | Devuelve información sobre un álbum concreto
| /newAlbum    |  POST           | Crea un nuevo álbum
| /getAlbumsByOwner/:user_id | GET | Devuelve todos los álbumes de un usuario
| /getAllAlbums  | GET  | Devuelve todos los álbumes
| /addImageToAlbum/:album_id | POST  | Añade una imagen a un álbum concreto
| /deleteAlbum/:album_id     | DELETE  | Elimina un álbum
| /signUp | POST | Lleva a cabo el registro del usuario
| /login  | POST  | Permite iniciar la sesión del usuario
| /logOut  | POST  | Permite cerrar sesión
| /loggedIn     |  GET           | Mantiene al usuario con la sesión iniciada
| /getUser/:user_id | GET | Devuelve toda la información del usuario
| /updateUser  | PUT  | Actualiza información del usuario
| /newImage  | POST  | Crea una nueva imagen
| /getOneImage/:image_id    |  GET           | Nos devuelve información de una imagen concreta
| /getAllImages | GET | Nos devuelve todas las imágenes
| /deleteImage/:image_id  | DELETE  | Elimina una imagen
| /addCommentToImage | POST  | Añade un comentario a una imagen concreta
| /getAllCommentsFromImage/:image_id     |GET  | Devuelve todos los comentarios de una imagen concreta