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

git rebase 如何把多个提交合并成一个

使用 git rebase 命令可以将多个分支合并为一个分支。下面是一个简单的步骤示例：

首先，切换到目标分支（即要将其他分支合并到的分支）：

使用以下命令启动交互式 rebase：

git rebase -i HEAD~n
这里的 n 是要合并的提交数量。例如，如果要合并最近的 3 个提交，n 将是 3。

打开一个文本编辑器，显示了一个包含要合并的提交的列表。对于每个提交，可以选择要执行的操作。

在编辑器中，将要合并的提交的行前面的 pick 关键字替换为 squash 或 s（代表 "合并（squash）"）。对于要合并的第一个提交，保留 pick 关键字。

例如，假设您要将最近的 3 个提交合并为一个提交，编辑器内容可能如下所示：

pick abc123 Commit message 1
squash def456 Commit message 2
squash ghi789 Commit message 3
保存并关闭编辑器。

Git 将会自动应用您的选择，并打开另一个编辑器，以供您编辑合并提交的提交消息。

编辑提交消息，保存并关闭编辑器。

Git 将会创建一个新的合并提交，包含了您选择的多个提交的更改。

请注意，在进行交互式 rebase 时，Git 可能会在合并提交过程中出现冲突。您需要解决这些冲突，并按照提示继续 rebase 进程。

## git config

- 解决中文乱码：git config --global core.quotepath false

## git stash

git stash list  查看所有的stash

git stash list -p 查看所有的stash的详细代码

git stash show

显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}

4、git stash show -p

显示第一个存储的改动，如果想显示其他存存储，命令：git stash show stash@{$num} -p ，比如第二个：git stash show stash@{1} -p

## Git提交到错误分支咋办？

复制提交到当前分支
git cherry-pick c335b65ea166e8dd3a399ebd60ad0e5839f6f4e6