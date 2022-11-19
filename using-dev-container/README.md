A post that explains how to setup a devcontainer [post](https://blog.hammelburg.me/developing-angular-apps-inside-a-docker-container-fbca44438e05)

Changed angular.json
_original_

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "configurations": {
    "production": {
      "browserTarget": "example-app:build:production"
    },
    "development": {
      "browserTarget": "example-app:build:development"
    }
  },
  "defaultConfiguration": "development"
},
```

1. To server on a different port than 4200. You can get conflicts running multiple Angular apps
2. poll is to refresh within the devcontainer
   _updated_

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "configurations": {
    "production": {
      "port": 12454,
      "poll": 500,
      "browserTarget": "example-app:build:production"
    },
    "development": {
      "port": 12453,
      "poll": 500,
      "browserTarget": "example-app:build:development"
    }
  },
  "defaultConfiguration": "development"
},
```
