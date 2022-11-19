A post that explains how to setup a devcontainer [post](https://blog.hammelburg.me/developing-angular-apps-inside-a-docker-container-fbca44438e05)

After the devcontainer.json is created:
To add vscode extensions to the devcontainer, you can select your currently installed extsnsions -> gear -> Add to devcontainer.json
![image](https://user-images.githubusercontent.com/1365728/202858614-05ca7368-3ef2-4594-afa5-a295d434b574.png)


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
