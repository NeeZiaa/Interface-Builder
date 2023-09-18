---
sidebar_position: 1
---

# Base de la requête

```json title="Request.json"
{
    "action": "createWebView",
    "name": "testInterface",
    "context": {...},
    "components": [...] 
}
```
Pour créer une requête, il faut envoyer un JSON avec les champs suivants:

| Champs | Type | Description |
| --- | --- | --- |
| action | string | Action à effectuer |
| name | string | Nom de l'interface |
| context | object | Contexte de l'interface |
| components | array | Tableau des composants de l'interface |

```name``` doit être unique et ne doit pas contenir de caractères spéciaux, il sera le nom utiliser pour modifier et supprimer l'interface 

```action``` peut prendre les valeurs suivantes:
- ```createWebView``` pour la création d'une nouvelle interface à partir d'un JSON <!--(voir [Création d'une interface](/docs/request-creation/create))-->
- ```updateWebView``` pour modifier une interface déjà crée <!--(voir [Modification d'une interface](/docs/request-creation/update))-->
- ```deleteWebView``` pour supprimer une interface <!--(voir [Suppression d'une interface](/docs/request-creation/delete))-->
- ```openWebView``` pour ouvrir une interface déjà "pré-crée" dans un dossier de l'app <!--(voir [Ouverture d'une interface](/docs/request-creation/open))-->