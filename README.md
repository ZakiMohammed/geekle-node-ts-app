# Geekle NodeTS App

TypeScript is well-established in the Node.js world.

## Playing along with TypeScript

Check Node.js and TypeScript:
```
node –v
tsc --version
```

Initialize TypeScript:
```
tsc --init
```

TypeScript Config for Node.js:
```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noEmitOnError": true
  }
}
```

Playing along with TypeScript and Node.js:
```
const greet = (message: string) => console.log(message)

greet('Hello World’)

interface Product {
    id: string
    name: string
    price: number
    category: Category
    tags: string[]
}

type Category = 'Cloth' | 'Food' | 'Computer'

const product: Product = {
    id: '1',
    name: 'Shirt',
    category: 'Cloth',
    price: 1200,
    tags: ['blue', 'denim', 'soft']
}
```

## NPM Project Setup

Initialize NPM:
```
npm init
```

Create NPM Scripts:
```
"scripts": {
	"start": "node dist/index",
	"build": "tsc -p ."
}
```

Run NPM Scripts:
```
npm run build
npm start
```

Install ts-node-dev package:
```
npm i ts-node-dev -D
```

Create NPM Script for ts-node-dev:
```
"scripts": {
	"watch": "ts-node-dev --respawn ./src/index.ts",
}
```

Run NPM Script ts-node-dev:
```
npm run watch
```

## Working with Express

Install Express and Type Definition:
```
npm i express
npm i @types/express -D
```

Boilerplate Code for Express:
```
import express, { Application, json, Request, Response, urlencoded } from "express";

const app: Application = express()

const PORT = process.env.PORT || 3000

app.use(json())
app.use(urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Node.ts Express App! 😃</h1>')
})

app.use('/api/employees', require('./api/employees'))

app.listen(PORT, () => console.log(`Server running at ${PORT}`))
```

Run Express App:
```
npm run watch
```

## Creating Git Repository

Create .gitignore file:
```
node_modules
dist
```

Create and push to Git repository:
```
git init
git add .
git commit -m "first commit"
git remote add origin <repository_url>
git push -u origin master
```

## Heroku Setup

Create Heroku Account
Create Heroku App
Install Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli

Run Heroku CLI commands:
```
heroku login

heroku git:clone -a <your_app_name
cd <your_app_name>

git add .
git commit -am "make it better"
git push heroku master
```