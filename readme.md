# Chicken Runner API

### Description

Cette API en JavaScript (Node.js) permet de gérer des informations sur les poulets, en offrant des fonctionnalités de création, lecture, mise à jour et suppression (CRUD).

## Technologies Utilisées
* NodeJS
* ExpressJS
* MongoDB

## Installation
### 1 - Clone du reposiory
```shell
git clone https://github.com/LeBenjos/Projet-RS-HETIC.git
```
### 2 - Installation des dépendances
```shell
npm install dotenv express mongoose
```
### 3 - Lancement de l'API
```shell
node index
```

## Endpoints
* `GET /chicken` : Récupère tous les poulets et leurs informations.
* `POST /chicken` : Crée un nouveau poulet.
* `PUT /chicken/:id` : Met à jour les information d'un poulet spécifique grâce à son ID.
* `PATCH /chicken/` : Met à jour la distance parcourue par le poulet en fonction de si celui-ci court.
* `PATCH /chicken/run/:id` : Active ou désactive le mode de course pour un poulet spécifique grâce à son ID.
* `DELETE /chicken/:id` : Supprime un poulet spécifique par son ID.


## Paramètres :
`:id` correspond à l'id généré automatiquement par MongoDB (`"_id"`)

### Requêtes POST et PUT
Ces requêtes nécessites des paramètres supplémentaires transmises par le body de la requête.  

Voici un exemple :

```js
{
    "name": "Georges",
    "birthdate": "2005-03-26", // facultatif / 'YYYY-MM-DD'
    "weight": 2.7,
    "steps": 11, // facultatif / configuré à 0 par défaut
    "isRunning": false // facultatif / configuré à false par défaut
}
```

## Auteur
* Mattis ALMEIDA LIMA
