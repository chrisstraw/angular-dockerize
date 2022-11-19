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

## [Dev Container Example](./using-dev-container/README.md)
