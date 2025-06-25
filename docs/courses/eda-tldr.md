# CLab for EDA 学生快速上手指南

CLab 交流 QQ 群号为`432191140`，我们会在群内回答您的问题，欢迎加入。

本文为针对`CLab for EDA`特化的极简指南。为了完全理解云平台，我们依然建议阅读[快速上手](https://clab.pku.edu.cn/docs/getting-started/introduction)

# 本地客户端准备

为了连接到云主机，我们需要一个终端和 SSH 客户端。在 Windows 系统中，我们推荐安装 [Windows Terminal](https://aka.ms/terminal) （Windows11 应已自带）。在 macOS 和 Linux 系统中，我们推荐使用系统自带的终端。

然后，我们需要一个 SSH 密钥对。如果你还没有 SSH 密钥对，可以通过以下方式生成。如果你之前用密钥登录过其他机器，或者电脑的个人目录中已经有`.ssh/id_rsa.pub`或者`.ssh/id_ed25519.pub`文件，可以直接复制现有的.pub 文件到平台，会较为方便。

:::tip 小贴士
我们这里说的用户目录，在 Windows 下指的是 `C:\Users\用户名`，macOS 和 Linux 中指的是`/home/用户名`
:::

下列操作将在 用户目录下`.ssh`文件夹下生成一个名为 `id_ed25519` 的密钥对。`id_ed25519.pub`文件中的内容后续会用到 。请注意，这是密钥的默认位置，你可能已经有一个同名密钥在同一位置了。如果是这样，请直接使用那个密钥，千万不要重新创建！如果重新创建，会有提示，询问是否覆盖。请不要覆盖！

打开终端执行如下命令：

```bash
ssh-keygen -t ed25519
```

如果报错为找不到`ssh-keygen`命令，说明你的 Windows 系统版本较老，推荐更新至近期的 Windows 版本或者下载学生免费版[Xshell](https://www.netsarang.com/en/free-for-home-school/)使用。

### 创建课程主机

在左边栏选中`计算-云主机`，进入云主机列表，点击`创建云主机`

![](/assets/getting-started/move-to-vm-list.png)

#### 第一页

![](/assets/courses/eda/create_vm.jpg)

1. 选择规格：使用`elite_computing`分类，类型为`e3`
2. 选择操作系统：使用`其他`分类，选择`Almalinux 8.10 with GUI`，版本随意
3. 选择硬盘：点击“是-创建云硬盘”，使用`SSD`类型，大小为`100GB`

#### 第二页

![](/assets/courses/eda/config_net.png)

选择网络：首先勾选”共享网络“中的`pku-new`，然后勾选”当前项目网络“中的课程 EDA 课程网络，名称一般为`eda-`开头。顺序不能颠倒，必须先勾选`pku-new`，再勾选课程网络。

#### 第三页

1. 填写名称，比如`eda2025`
2. 选择密钥。如果之前没有添加过密钥，可以选择“创建密钥”，使用“导入密钥”选项，复制之前生成的`id_ed25519.pub`文件中的内容，粘贴到“公钥”一栏，名称随意。如果之前已经添加过密钥，可以直接选择已有的密钥。

点击两次确定，创建机器。等待主机状态从“创建中“变为“运行中“。这一步可能需要等待几分钟，可以刷新页面查看状态

### 登录主机

通过主机的 IP 地址登录主机，进行后续操作，用户名是`almalinux`。例如：

```plain
ssh almalinux@10.129.242.10
```

**此时，输入教师提供的命令，通常会是`sudo clabcli eda 课程名`，初始化主机。**

课程名助教会在课程群内通知。

### 连接北大网关

如果你需要在机器里上网，或者使用 VSCode 连接远程主机，你需要连接北大网关。可以使用以下命令连接，输入学号和网关密码即可。连接成功后，您可以使用`clabcli disconnect`命令断开连接。

```bash
clabcli connect # 连接到北大网关
clabcli disconnect # 断开连接
```

#### 连接远程桌面

使用`clabcli desktop`命令，输入您的学号或者工号，即可使用远程桌面。您可以通过家目录中`rd_password`文件，或者再次输入`clabcli desktop`命令，查看远程桌面的密码。

访问`https://rdv2.lcpu.dev`，使用账号密码登录，即可使用远程桌面。
