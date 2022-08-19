# git操作

## 撤销add

``` bash
git reset HEAD ./
```

## 跟踪一个分支

``` bash
git push -u origin dev-xxx #推到一个分支的时候指定远程分支
git branch --set-upstream-to=origin/<branch> master #设置本地分支master跟踪origin/<branch>远程分支
```

## 查看当前分支对应远程的哪个分支

``` bash


git branch -vv
```

## git commit --amend

git add 之后，使用git commit --amend --no-edit 可以在原有commit上修改

## 撤销commit

git reset HEAD^

## git Rebase

