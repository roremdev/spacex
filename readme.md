# SpaceX

### Git Actions
According with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), the rules for commit the changes:
The commit message should be structured as follows:
```bash
    <type>: devmoji <description>
```
The commit contains the following structural elements:
- *feat*: A new feature
- *fix*: A bug fix
- *refac*: A code change that neither fixes a bug nor adds a feature

Depending of your terminal configuration, you can write alias for keyshort git actions.
```bash
feat message
fix message
refac message
pull
push branch_name
```

### NPM Actions
For this project, we can use the next npm scripts:

|Script      |Description                                             |
|------------|--------------------------------------------------------|
|`start`     |Launch dev server                                       |
|`test`      |Launch local test for unit-testing, integration-testing |
|`dev`       |Launch prod server                                      |
|`build`     |Generate static files                                   |
|`storybook` |Launch web components visualiser                        |
