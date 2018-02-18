Description
========
Snippet for creating a new javascript module using typescript<br>

It include:
- typescript configs
- gulp utility to wath file
- visual studio code configuration to debug typescript [see more detail in nexts chapter](#debug-in-visual-code)

So, let's suppose you want to create a new module, you need to clone this repository and execute:
```bash
npm install
gulp watch_to_build_and_execute
```


Before starting
--------------

You need to install:
- nodejs
- npm
- typescript
- ts-node (optional but it is needed to execture some npm commands)



If you want to use gulp:
- gulp (npm install -g gulp-cli)


Build module with npm
--------------

You need npm in you system.

```bash
npm run build
```


Use module with npm and nodejs
--------------

You need npm installed in you system, and to have already compites the module

```bash
npm run exec
```



Use module with ts-node
--------------

You can use ts-node (without compiling)

```bash
npm run tsnode_exec
```


Use gulp
--------------

You need gulp installed in you system.
Available commands:
- watch_to_build_and_execute
- build
- run_with_npm
- test_with_npm //it use ts-node
- watch_to_test //it use ts-node



Test
--------------

You can use gulp (see previous section), or: 
```bash
npm run test
```
Watching file and execute test:
```bash
npm run watch_for_testing
```


Debug in Visual Code
==============


Before starting
--------------

You need to install:
- ts-node (npm install -g ts-node)

for more information see [HERE](https://github.com/TypeStrong/ts-node)


How to use
--------------
All configuration are already committed!

