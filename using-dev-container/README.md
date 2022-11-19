Example of Dockerized Angular project using a devcontainer

_I typically create my git repo separately, then create my angular app in another directory, then copy it into my git directory_

# Steps to create Angular project

_Note: change the workspace name (i.e., angular-dockerize)_

```cmd
ng new angular-dockerize --create-application=false --style=scss --routing=true --skip-git
```

### Change directory to new angular workspace (i.e., angular-dockerize), then run

_Note: change the app name_

```cmd
ng g application example-app --routing=true --style=scss
```

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
