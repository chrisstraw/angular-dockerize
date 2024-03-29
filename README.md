## My working example of a Dockerized Angular project using a devcontainer

A post that explains how to setup a devcontainer [post](https://blog.hammelburg.me/developing-angular-apps-inside-a-docker-container-fbca44438e05)

_I typically create my git repo separately, then create my angular app in another directory, then copy it into my git directory_

## Steps to create Angular project

_Note: change the workspace name (i.e., angular-dockerize)_

```cmd
ng new angular-dockerize --create-application=false --style=scss --routing=true --skip-git
```

### Change directory to new angular workspace (i.e., angular-dockerize), then run

_Note: change the app name_

```cmd
ng g application example-app --routing=true --style=scss
```

## Final Adjustments

After the devcontainer.json is created, you can add your favorite vscode exentions to the devcontainer:

select extension -> gear -> Add to devcontainer.json
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

1. You can get conflicts running multiple Angular apps, so I always change the default port from 4200.
2. poll is required to refresh when a file change is done within the devcontainer [more...](https://github.com/angular/angular-cli/pull/1814#issuecomment-241854816)

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

---

# To Run the Angular App inside Docker

```
docker build -t example-app-image .
```

1. Then to view the docker image

```
docker image ls
```

2. Then create the container

```
docker run -p 5757:80 -d example-app-image:latest
```

3. Command example with my image and repository

```
docker run -p 5757:80 -d example-app-image:latest
```

### To Manually Push to AWS ECR

_Credit Here: https://plainenglish.io/blog/how-to-push-an-image-to-aws-ecr_

4. Command to tag an image

```
docker image tag example-app:latest  <aws_account_id>.dkr.ecr.<region>.amazonaws.com/example-app-image:latest
```

5. Get an ECR credential

```
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com/example-app-image
```

6. Push image to ECR repo

```
docker image push 630597503681.dkr.ecr.us-east-2.amazonaws.com/example-app-image:latest
```

### To Manually Pull from AWS ECR to Docker

7. Get an ECR credential

```
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
```

8. Pull or Run the latest from AWS ECR

```
docker pull <aws_account_id>.dkr.ecr.<region>.amazonaws.com/example-app-image:latest
```

OR

```
docker run -p 5750:80 -d <aws_account_id>.dkr.ecr.<region>.amazonaws.com/example-app-image:latest
```
