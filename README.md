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

If you want to use gulp:
- gulp (npm install -g gulp-cli)


Build module with npm
--------------

You need npm in you system.

```bash
npm run build
```


Use module with npm
--------------

You need npm installed in you system

```bash
npm run exec
```



Use gulp
--------------

You need gulp installed in you system.
Available commands:
- watch_to_build_and_execute
- build
- run_with_npm



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


Test
==============
TODO:

```bash
npm test
```

