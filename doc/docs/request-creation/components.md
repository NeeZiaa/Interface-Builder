# Création des composants

Il existe 3 types de composants : les composants de 1er niveau (natifs) puis les composants de 2ème et troisième niveau qui sont des conteneurs.
Les composants de plus haut niveau contiènes ceux de niveaux inférieurs, par exemple un composant de 3ème niveau peut contenir un composant de 2ème et de 1èer niveau.

![image info](../../static/img/components-schema.png)

| Saisie de données | Conteneurs   | Affichage   |
| :---------------- | :----------- | :---------- |
| AreaField         | Item         | Title       |
| Checkbox          | Banner       | Description |
| PasswordField     | Form         | Sepatator   |
| ColorPicker       | Header       | Image       |
| Radio             | Footer       | Button      |
| Selector          | ItemsWrapper |             |
| TextField         |              |             |
| DatePicker        |              |             |
 
Chaque composant à des paramètres facultatifs et obligatoires, veuillez consulter leurs documentation pour plus d'informations.  
Dans le cas où un paramètre obligatoire est manquant, une erreur surviendra et l'interface ne sera pas affichée.

Les propriétés sont passés dans un objet `props`, et les composants enfants sont passés dans un objet `children`.

:warning: **Attention !** Les composants de 1er niveau ne peuvent pas avoir de composants enfants.

Exemple de requête JSON

```json title="Request.json"
{
    "action": "createWebView",
    "name": "testInterface",
    "context": {
        "theme": "dark",
        "font": "arial",
        "position": "top-left"
    },
    "components": [
        {
            "type": "Header",
            "props": {
                "title": "Hello c'est un exemple",
                "banner": "assets/image.png",
                "description": "Petit texte de description en bas de header"
            }
        },
        {
            "type": "Field",
            "props": {
                "label": "Field",
                "icon": "Icon",
                "style": ["light", "transparent"],
                "callback": "field_callback"
            },
            "children": [
                {
                    "type": "TextField",
                    "props": {
                        "type": "text",
                        "name": "Name",
                        "placeholder": "Placeholder",
                        "value": "Value"
                    }
                }                   
            ]
        },
        {
            "type": "Field",
            "props": {
                "label": "Field 2",
                "icon": "Icon",
                "style": ["light", "transparent"],
                "callback": "field_callback"
            },
            "children": [
                {
                    "type": "TextField",
                    "props": {
                        "type": "text",
                        "name": "Test",
                        "placeholder": "Placeholder",
                        "value": "Value"
                    }
                }
            ]
        }
    ] 
}
```
