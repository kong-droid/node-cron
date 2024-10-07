Node Cron
=============

## cron sample

### 1. version and purpose
``````
    > node.js
        - version: (local) 17.9.1 / (stage) 17.9.0 / (dev) 16.14.2
        - purpose: js runtime
    > npm
        - version: (local) 8.11.0 / (stage) 8.5.5 / (dev) 8.5.5
        - purpose: package manager
    > dotenv
        - version: 16.3.1 (not affected by node.js)
        - purpose: environment managing
    > axios
        - version: 1.4.0 (not affected by node.js)
        - purpose: ajax
    > node-cron
        - version: 3.0.2 (not affected by node.js)
        - purpose: scheduling
    > winston
        - version: 3.10.0 (not affected by node.js)
        - purpose: scheduling log
    > winston-daily-rotate-file
        - version: 4.7.1 (not affected by node.js)
        - purpose: make daily log
    > moment
        - version: 2.29.4 (not affected by node.js)
        - purpose: get time
    > moment-timezone
        - version: 0.5.43 (not affected by node.js)
        - purpose: get time based on KST
``````

### 2. start
```
    > local: npm run local
    > dev: npm run dev
```
### 3. build
```
    > local: npm build local
    > dev: npm build dev
```





