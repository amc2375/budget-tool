# Here's how we are writing this application!

* [Guide to writing great React](https://medium.com/swlh/how-to-write-great-react-c4f23f2f3f4f)
* [Project structure](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)
* [Description of what each folder should contain](https://sergiodxa.com/articles/next-file-structure/)
* [Here's how the styles work](https://nextjs.org/docs/basic-features/built-in-css-support)
* [Here's sort of how we're managing the database via Heroku command line](https://www.youtube.com/watch?v=80oty2v4HsE)
* [This is sort of how the DB connectivity works](https://www.codeoftheprogrammer.com/2020/01/16/postgresql-from-nextjs-api-route/)

## How do you connect to the database?
* First, install heroku CLI.
* Second, talk to Miles McLeod and get the db credentials and details.
* [Third, read all this](https://devcenter.heroku.com/articles/heroku-postgresql)
* You can connect to the db with a command similar to the following
```
$ psql --host=ec2-54-211-160-34.compute-1.amazonaws.com --port=5432 --username=wvcxjgpxcwawpg --password --dbname=dbjuiggta1an9s
```
* You can pull a copy of the database like so, for the purpose of parity between the hosted db and the local dev db:
```
$ heroku pg:pull postgresql-closed-53032 peoplesbudget-test --app peoplesbudget-test
```
* You can set up the schema by doing the following:
```
$ heroku pg:psql postgresql-closed-53032 --app peoplesbudget-test < utilities/schema.sql
```

## DANGER: How do you drop the heroku database?
```
$ heroku pg:reset -a peoplesbudget-test
```

## How do you drop a local psql DB?
```
$ psql
$ DROP DATABASE "peoplesbudget-test";
```
* Then you can re-seed the remote DB, and pull a copy locally.

### API routes with REST

Next.js ships with [API routes](https://github.com/vercel/next.js#api-routes), which provide an easy solution to build your own `API`. This example shows how it can be used to create your [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) `API`.

#### Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest&project-name=api-routes-rest&repository-name=api-routes-rest)

#### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example api-routes-rest api-routes-rest-app
# or
yarn create next-app --example api-routes-rest api-routes-rest-app
```

##### Deploy to Now

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
