# FullStack Project

Fonctionnalités : authentication utilisateur, paramètres du profil, timeline, commentaires, liste d'amis (abonnement/désabonnement), messagerie.


# User Stories

- En tant qu'utilisateur, je veux pouvoir créer un compte pour pouvoir me connecter.
- En tant qu'utilisateur, je souhaite pouvoir me connecter afin de pouvoir visualiser mon flux d'accueil.
- En tant qu'utilisateur, je souhaite pouvoir afficher les publications pour savoir quelles sont les personnes que je suis en train de suivre.
- En tant qu'utilisateur, je veux pouvoir créer un article pour pouvoir partager mon statut actuel.
- En tant qu'utilisateur, je veux pouvoir supprimer mes messages pour que les utilisateurs ne puissent plus les voir.
- En tant qu'utilisateur, je souhaite pouvoir modifier mes publications afin de pouvoir corriger ou clarifier mes pensées.
- En tant qu'utilisateur, je veux pouvoir aimer / ne pas ressembler à un message pour pouvoir approuver les messages que j'aime.
- En tant qu'utilisateur, je souhaite pouvoir commenter un message afin de pouvoir partager d'autres idées.
- En tant qu'utilisateur, je souhaite pouvoir afficher les profils des autres utilisateurs afin d'en apprendre davantage à leur sujet.
- En tant qu'utilisateur, je souhaite pouvoir modifier mon propre profil (c'est-à-dire changer le nom, la couleur de l'avatar ou la bio) afin de pouvoir ajouter davantage de style à ma page.


# instructions de mise en route (testé sous macOS 10.14.4 Mojave)
Serveur :
1. Cloner le repository.
2. Faire `cd` dans le dossier principal et lancer `npm install`.
3. Lancer `cd client && npm install`.
4. Retourner au dossier principal et lancer `npm start`.

Fichier pour modifier l'URL de base de donnée : secrets.js


# Utilisations

- [Express.js](https://expressjs.com/) - Backend web framework.
- [Heroku](http://heroku.com/) - Platforme de déploiement d'application web.
- [JSON Web Token](https://jwt.io/) - Un standard pour authentifier en toute sécurité les requêtes HTTP.
- [Material-UI](https://material-ui.com/) - Bibliothèque UI pour React
- [MongoDB](https://www.mongodb.com/) - Base de données pour stocker des données basées sur des documents.
- [Mongoose](https://mongoosejs.com/) - Outil de modélisation d'objet pour Node.js.
- [Node.js](https://nodejs.org/en/) - Environnement d'exécution permettant de créer des applications serveur rapides.
- [React](https://reactjs.org/) - Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- [Redux](https://redux.js.org/) - Bibliothèque JavaScript pour aider à mieux gérer l'état de l'application.
- [Socket.io](https://socket.io/) - Bibliothèque JavaScript pour les applications Web en temps réel.


Back :
- odels: création des champs de saisis requis pour les posts, les commentaire et le sutilisateurs.
- routes: création, modification et suppression des posts et des commentaires, mise à jour d'un utilisateur, suppression, suivi ou désabonnement.
- validation: tests et messages d'erreur pour valider ou non une inscription, une connexion ou traiter un champs vide.
- secret.js: URL base de donnée et JSON Web Token
- server.js:


Front :
- public: icon de l'onglet, index.html et informations sur l'app (nom, couleurs utlisées, tailles)
- src:
    - actions: contient les actions pour les posts, les commentaites, les authentifications et les utilisateurs
    - components: Routes entres les différentes pages, différents blocs utilisés pour pourvoir s'intégrer aux pages.
    - containers: Pages de l'application.
    - images: image utilisée pour illustrer le fond du profil d'un utilisateur.
    - misc: couleurs utilisées pour modifier l'avatar d'un utilisateur.
    - reducers: mise à jour des états en temps réel (likes, abonnements)
    - tests: tests les différentes fonctionnalités.
    - validation: meme role que pour le back

    

