## Description
I've created it to count all keywords from scientific paper using a .bibtext file.
It will help you generating an output as a json contains all grouped words to be used in a quantitative analyse of paper.

Ps: The installation is done by [npm](https://www.npmjs.com/)

## Base Installation

### 1. Initial Upgrade
Make the initial config with `npm install` on root folder of project

### 2. Export your collection of articles from [mendeley](https://blog.mendeley.com/tag/bibtex/) or any program that exports all articles in bibtext file

## Running the project
All commands must be executed from command line on project folder

### 1. Build the project
Execute the command `npm run build`

### 2. Running the project
Run the command `node build/index.js --path fullPathOfBibTextFile`
> Example:
`node build/index.js --path /home/thiagolsilva/Downloads/myCollection.bib`

### 3. Analyse the output json
```
[
    {
        "blockchain": 62
    },
    {
        "bitcoin": 12
    },
    {
        "security": 9
    },
    {
        "ethereum": 8
    }
]
```
