# Gerson
Primer paso es instalar el CLI de firebase de aqui
https://firebase.google.com/docs/cli/

Instalas node.js, yo instale el installer v6.10.2 LTS de windows ahi en la
pagina

Se supone que ya no deberias de necesitar hacer la parte de firebase init

Cuando llegues al comando firebase login, logeate con la cuenta de hedron

llegas hasta la parte donde poner npm install -g firebase-tools y lo demas no
deberia de ser necesario.

Una ves que tienes eso, en el cmd, te vas al folder html5 y corres el comando
firebase serve

Con ese comando te deberia decir:
Starting Firebase development server...
Project Directory: <tu ruta del projecto>
Public Directory public

----------------------------------------------------------------
Si te sale un error entonces corre el comando  firebase init

Le pones enter a todo y cuando te pregunte:
What file should be used for Database Rules? database.rules.json
Le das enter a eso

Te va decir que ya hay un archivo con ese nombre y si lo quieres remplazar,
dile que no.

Le pones que si en donde te pregunta:
Configure as a single-page app (rewrite all urls to /index.html)?

Cuando te pregunte:
What do you want to use as your public directory? public

Le pones enter y despues te pregunta si lo quieres remplazar,
no lo remplazes, se supone que yo ya hice eso y el public folder que esta en
el github debe funcionar.

Despues ya le das otro firebase login si es necesario y le das un firebase serve
en tu folder HTML5

----------------------------------------------------------------

En dado caso que aun no funcione entonces borra todo lo que esta dentro
de HTML5 menos el folder public y luego haces los pasos del init, pero esta
vez ya le das yes y enter a todo

----------------------------------------------------------------

Si no funciona eso pues yo nomas quiero hacer juegos. :p
