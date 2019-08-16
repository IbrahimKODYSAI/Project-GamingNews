GAME NEWS

Presentation du projet 

Projet de fin d'etude pour O'clock

le but de ce projet etait de faire un site web d'actu gaming fullstack JS,

REACT JS pour le front et Node JS pour le back 

Présentation du projet
C’est un site d’actualité sur le gaming qui a pour but de faire un référencement sur tout ce qu’il faut savoir sur l’univer du jeu vidéo avec des catégories classés par plateforme et par genre. Le but est d'aider les fans de jeu vidéo.

Fonctionnalités

- CRÉATION ET AFFICHAGE DES ARTICLES PAR CATÉGORIE

permettre à un administrateur ou modérateur  d'accéder une page spéciale qui va lui permettre  de créer un article avec comme spécification sa catégorie sa plateforme ( pc, console salon, portable ), il aura la possibilité de poster des images et de pouvoir l’afficher. Ces articles seront ensuite  stocker dans une base de donnés.

- CRÉER UN COMPTE UTILISATEUR
Présence d’une page d’inscription avec nom prénom, email, mot de passe, article préféré…., 

-CONNEXION À UN COMPTE UTILISATEUR. 
On pourra trouver un formulaire de connexion, une fois le formulaire rempli on vérifiera l’existence du compte.  On vérifiera si l’email et le mot de passe sont bons, puis il  renverra les informations de l'utilisateur ou un message d’erreur en fonction du cas de figure. Redirection sur l’espace personnel si les informations sont bonnes, sinon affichage d’un message d’erreur.

- CHOISIR DES THÈMES / CATÉGORIES A  SUIVRE / INTERFACE PERSONNALISER
Pour les utilisateurs connectés à leur session, permettre de cocher une case “j’aime” ou “suivre” sur des thèmes des catégories, stocker  les thèmes et catégorie suivis en base de donnés, Les articles en rapport avec ces thèmes ou catégorie seront ensuite affichés sur son espace personnel. Il y aura un système d’envoi d’emails pour prévenir  des nouveautés en rapport avec ces catégories à l’utilisateur.

- COMMENTER UN ARTICLE / LIKER UN ARTICLE
Système de like et de commentaire en dessous de chaque article avec le pseudo de chaque utilisateur (réserver aux utilisateur connectés)
système d'avatar : l'utilisateur de peut mettre a jour son avatar en le telechargeant directement depuis son ordinateur,

- AFFICHER DU CONTENUE VIDÉO
Page dédié à l’affichage des vidéo de chaque article avec comme onglet “ video ou trailer de la semaine”

- FORMULAIRE DE CONTACT
Il y aura une page avec un formulaire de contact qui enverra un mail contenant le message à l’administrateur

- SYSTEME DE NOTIFICATION
Présence d’un système de notification par mail pour informer les utilisateurs enregistrés de la sortie d’un nouvel article sur le ou les thèmes choisis.  

- PARTAGE D’ARTICLE SUR LES RESEAUX SOCIAUX
Les articles pourront être partagé sur Facebook et Twitter. 

- Outils technologiques utilisés

Les bases de données seront gérés en SQL. 

Au niveau des librairies et API  : 

Express pour le back en node ainsi que les 

Nodemailer pour le system de notification

Sequilize pour la gestion des bases SQL avec node. 

Bcrypt pour les mot de passes en node. 

Pour le front : 

"@material-ui/core": "^4.2.1",
   "axios": "^0.19.0",
   "classnames": "^2.2.6",
   "prop-types": "^15.7.2",
   "react": "^16.8.6",
   "react-dom": "^16.8.6",
   "react-facebook-share-link": "^1.0.4",
   "react-images-upload": "^1.2.7",
   "react-motion": "^0.5.2",
   "react-redux": "^7.1.0",
   "react-responsive-carousel": "^3.1.49",
   "react-router": "^5.0.1",
   "react-router-dom": "^5.0.1",
   "react-twitter-share-link": "^1.2.1",
   "react-youtube": "^7.9.0",
   "redux": "^4.0.4",
   "semantic-ui-css": "^2.4.1",
   "semantic-ui-react": "^0.87.3"

POUR VOIR LE SITE :

telecharger le dossier en faisant un git clone puis :
dans le dossier du projet :

Replissez les parties username et password  du fichier config present dans le dossier du même nom :

{
  "development": {
    "username": "",
    "password": "",
    "database": "Actugaming_database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": "",
    "database": "Actugaming_database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"

  },
  "production": {
    "username": "",
    "password": "",
    "database": "Actugaming_database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

ensuite faites ces  commandes :

yarn 

sequelize db:create
sequelize db:migrate
sequelize db:seed:all

yarn start

dans uen autre console faites :
nodemon server/index.js


et admirez le site !
