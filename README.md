# Timer For Web & Runtime Environments

Newtimer is a powerful timing tool, that can help you record time at different points in your code, while stopping the event loop.

### Example
1. You can get the number of milliseconds spent;
``` javascript 
    import timer from 'newtimer';
    timer('start');
    // Some Time Killing Task
    console.log(`Process exited in ${timer('start')}ms`)
```

2. You can get the number of seconds spent;
``` javascript 
    import timer from 'newtimer';
    timer('start');
    // Some Time Killing Task
    console.log(`Process exited in ${timer('start', true)}s`)
```

3. You can pause the event loop as well;
``` javascript 
    import timer from 'newtimer';
    timer('start');
    await timer(5000);
    console.log(`Process exited in ${timer('start', true)}s`);
```
**Note:** This is a test used to increase my knowledge in how npm, Markdown & the node runtime work. Still, it won't hurt to use it in production mode as it might come in handy. 
This is my first full-fledged README ever, if you think I tried, you can comment your thought [here](https://github.com/CHIBX/newtimer/issues/1), and we could just connect together for any open-source project.