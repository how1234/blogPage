# Some common unclassfied bug

## Post has been taken

Check which process is using the given port(like 3000).

```
sudo lsof -i :3000

```

Then kill the process by it's PID 

```
kill -9 {PID}
```

## 502 on Google server

The running port for NodeJS must be 8080.

## Untrack file on GitHub

The reason why gitignore doesn't work may due to the ignored file is a tracked file. So we can use ```git rm --cached .env ```. By the way, we can use ``` git status ``` to check the untracked file.