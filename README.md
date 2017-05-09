<a href="https://kfuentez.github.io">kfuentez.github.io</a>
<br/>

To get started you need to do:
```
git clone https://github.com/kfuentez/kfuentez.github.io.git
cd kfuentez.github.io
jekyll serve
```

Then go to <a href="http://127.0.0.1:4000/">http://127.0.0.1:4000/</a> and you're all set.

If you already have the project and aren't sure if you have the most recent version run:
```
git checkout master
git merge --ff-only origin/master
```

If you have receive this message:
```
fatal: Not possible to fast-forward, aborting.
```

Then you have made changes that are not in the repository. That's alright, you just need to rebase your branch instead:
```
git rebase --preserve-merges origin/master
```

Any merge conflicts that come up will prompt you to resolve them before that commit is applied, which will make the changes part of that commit. Assuming all went well, it should look something like this:
```
First, rewinding head to replay your work on top of it...
```

Once you have made the changes you want to publish you need to do (in the root of the project):
```
git add .
git commit -m '<a message saying what you did>'
git push origin master
```