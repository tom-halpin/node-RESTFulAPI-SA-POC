## Synopsis

Coming Soon -  a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Coming Soon -  Details what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

Coming Soon - A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Coming Soon - Provide code examples and explanations of how to get the project.

## API Reference

Coming Soon - Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Coming Soon - Describe and show how to run the tests with code examples.

## Contributors

Coming Soon - Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

Coming Soon - A short snippet describing the license (MIT, Apache, etc.)

## To Run

Start Server
npm start or node app.js

## API
http://localhost:3000/v1/hello
http://localhost:3000/v1/helloGet
http://localhost:3000/v1/hello/Tom

http://localhost:3000/v1/contacts
http://localhost:3000/v1/contacts/+359777123456

http://localhost:3000/v1/groups
http://localhost:3000/v1/groups/Dev

## To Test

npm Test

To See Coverage browse To

coverage/lcov-report/index.html

## To Document

ESDoc is a good documentation generator for JavaScript.
https://esdoc.org/

move to a your project directory
cd your-project/

install ESDoc and standard plugins
npm install --save-dev esdoc esdoc-standard-plugin
npm install --save-dev esdoc-brand-plugin
npm install --save-dev esdoc-publish-html-plugin

# write a configuration file -> root folder esdoc.json
{
  "source": ".",
  "destination": "./docs",
  "plugins": [{"name": "esdoc-standard-plugin"}],
  "includes": ["^modules", "^test"]
}

# run ESDoc
npm run doc or .\node_modules\.bin\esdoc -c .\esdoc.json

# see a documentation
open .\docs\index.html

## To add to Git

Create repo from an existing folder

Add .gitignore to root folder
Add README to root folderinit
got to folder
Type git init.
Type git add to add the files to staging
Type git commit -m "initial commit" to commit the files

Connect to github - create New Repository 
https://github.com/tom-halpin/node-RESTFul-API-POC 

Push an existing repository from the command line

git remote add origin https://github.com/tom-halpin/node-RESTFul-API-POC.git
git push -u origin master

need to authenticate user:tom.halpin@dxc.com pwd next team

to verify

change a file
add it to staging : git add .
ensure it is added: git status
commit: git commit -m "comment"
add to repo: git push origin master

## Docker Container

create .Dockerfile init containter with node image and expose port
create docker-compose.yml

build containter : docker build -t restfulapi_v1 -f./.Dockerfile .
verify image created : docker images 
run image : docker run -it -p 1337:3000 restfulapi_v1
call API: http://192.168.99.101:1337/v1/hello 

publish container to docker hub

docker login
tag the image: docker tag restful-api-poc tomhalpin/restful-api-poc:v1
push image to docker hub: docker push tomhalpin/restful-api-poc:v1
view repo on docker hub: https://hub.docker.com/u/tomhalpin/

## Jenkins

run jenkins from a container mapped to local folder

docker run --name myjenkins -p 8080:8080 -p 50000:50000 -v //c/Users/halpint/Downloads/jenkins/:/var/jenkins_home jenkins

open jenkins

http://192.168.99.101:8080

admin and password

go to update center : http://192.168.99.101:8080/updateCenter/

download and install nodejs Jenkins plugin https://plugins.jenkins.io/nodejs

force jenkins restart : http://192.168.99.101:8080/restart