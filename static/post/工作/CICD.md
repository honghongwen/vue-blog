# 后端自动化部署

> 如果有一个后端新开的服务，如何构建自动化部署。本文将做出说明。 首先，新开一个springboot（默认采取springboot新建的项目，如果是spring或netty的项目可能要稍微做出调整）。将进行下面 的流程

---
&nbsp;
### 1.新建gitlab库
> 新建gitlab仓库，将方式由ssh切换为http

> 执行下面命令，使用cmd/powershell/cmder之类终端执行以下命令将项目推到远程仓库


> 完成后在gitlab上能看到项目代码已经被推上去了，建议使用
> 
> idea插件.gitignore新建或从别的项目拷贝ignore文件。避免将
> 
> 本地target/.idea/.iml等文件推到远程库。
  
---
&nbsp;

### 2.新建jenkins项目

> 1.新建一个新任务

> 2.输入任务名。选择复制demo项目，如果熟悉jenkins也可自己定义

> 3.在配置-源码管理界面将仓库地址更改为上面的gitlab的http地址。(带.git后缀的这个，也就是上面命令remote的地址)
> url改为gitlab对应浏览器地址栏上的url。

> 4.在构建配置将command的地址改为新项目文件夹的shell地址（稍后去到机器上新建文件夹）


> 5.登录上105（jenkins部署的）机器，新建文件夹，并将demo下的start.sh拷贝到新文件夹下

> 6.使用vim编辑newProject中的start.sh文件，使用底线命令批量替换demo为newProject（具体为项目名，newProject只是代称）名




---
&nbsp;
### 3.将服务托管给supervisor

> 执行下面命令


> 查看服务状态



--- 
&nbsp;
### 4.总结

> 经过上面的一些搭建，就能够使用jenkins自由部署不同分支上的应用了，还可以具体设置部署到哪台机器。更甚至可以借用webhook实现无需手动的全自动部署。环境更复杂的情况下可以开发自己的部署平台等。