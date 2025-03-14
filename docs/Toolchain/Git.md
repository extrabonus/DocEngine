# Git



Git 是一款**分布式版本控制系统**，专为代码变更追踪与团队协作开发设计。


## 基础操作

| 命令 | 示例 | 说明 |
|------|------|------|
| `git init` | `git init` | 初始化新仓库 |
| `git clone` | `git clone https://github.com/user/repo.git` | 克隆远程仓库 |
| `git status` | `git status` | 查看工作区状态 |
| `git add` | `git add .` | 添加所有修改到暂存区 |
| `git commit` | `git commit -m "feat: add login"` | 提交到本地仓库 |


## 分支管理

| 命令 | 示例 | 说明 |
|------|------|------|
| `git branch` | `git branch` | 查看本地分支列表 |
| `git checkout` | `git checkout -b doc` | 创建并切换到 `doc` 分支 |
| `git merge` | `git merge doc` | 将 `doc` 分支合并到当前分支 |
| `git push origin <branch>` | `git push origin doc` | 推送分支到远程仓库 |


## 版本发布

### 标签管理

| 命令 | 示例 | 说明 |
|------|------|------|
| `git tag` | `git tag` | 查看所有标签 |
| `git tag -a` | `git tag -a v1.0.0 -m "1.0版本发布"` | 创建带注释的标签 |
| `git push --tags` | `git push origin --tags` | 推送所有标签到远程仓库 |
| `git describe` | `git describe --tags` | 获取当前版本描述（最近标签） |
| `git checkout <tag>` | `git checkout v1.0.0` | 切换到指定标签版本 |

### 发布流程
```bash
# 1. 确保主分支（如 main）最新
git checkout main
git pull origin main

# 2. 合并功能分支到主分支
git merge --no-ff fix/login  # 非快进合并，保留合并记录

# 3. 创建版本标签
git tag -a v1.0.0 -m "Release version 1.0.0"

# 4. 推送代码和标签
git push origin main
git push origin --tags
```

## 远程仓库协作

| 命令 | 示例 | 说明 |
|------|------|------|
| `git remote -v` | `git remote -v` | 查看远程仓库地址 |
| `git fetch` | `git fetch origin` | 拉取远程仓库更新（不合并） |
| `git pull` | `git pull origin main` | 拉取并合并远程分支到当前分支 |
| `git push` | `git push origin main --force` | **强制推送**（慎用） |


## 撤销与修复

| 命令 | 示例 | 说明 |
|------|------|------|
| `git reset` | `git reset --soft HEAD~1` | 撤销最后一次提交（保留修改） |
| `git revert` | `git revert HEAD` | 撤销某次提交（生成新提交） |
| `git cherry-pick` | `git cherry-pick doc` | 将某次提交应用到当前分支 |
| `git stash` | `git stash` | 暂存当前修改（快速切分支） |

## 日志与历史

| 命令 | 示例 | 说明 |
|------|------|------|
| `git log` | `git log --oneline --graph` | 查看提交历史（简洁版） |
| `git diff` | `git diff HEAD~2..HEAD` | 对比两次提交差异 |
| `git blame` | `git blame README.md` | 查看文件修改历史 |

## 分支命名规范

| **分类**       | **前缀**      | **描述**                                                                 | **示例**                 |
|----------------|---------------|--------------------------------------------------------------------------|--------------------------|
| **新增文档**   | `add/`   | 新增文档或章节                                                       | `add/user-guide`    |
| **文档更新**   | `update/`| 更新现有文档内容                                                     | `update/readme`    |
| **文档修复**   | `fix/`   | 修复文档中的错误（如拼写错误、格式问题等）                           | `fix/typo`         |
| **文档重构**   | `refactor/`| 重构文档结构或内容，不涉及功能变更                                 | `refactor/structure`|
| **翻译相关**   | `translate/`| 文档翻译任务                                                       | `translate/zh-cn`  |
| **版本发布**   | `release/`| 文档版本发布                                                         | `release/v1.0.0`   |
| **日常维护**   | `chore/` | 文档相关的日常维护任务（如工具配置、依赖更新等）                     | `chore/tooling`    |


## 版本号规范
| 版本号 | 格式 | 说明 |
|--------|------|------|
| **主版本** | `vX.0.0` | 大版本发布，通常跟随产品 |
| **次版本** | `v1.X.0` | 向下兼容的功能新增 |
| **修订号** | `v1.0.X` | 向下兼容的问题修复 |
