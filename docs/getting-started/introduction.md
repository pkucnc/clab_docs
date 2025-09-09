---
title: 快速上手
---

太长不看版：记得登陆 ITS！

# 简介

云平台中，最核心的资源是云主机（VM）。本文从创建和连接云主机出发，介绍云平台的最基本使用。

# 本地客户端准备

为了连接到云主机，我们需要一个终端和 SSH 客户端。在 Windows 系统中，我们推荐安装 [Windows Terminal](https://aka.ms/terminal) （Windows11 应已自带）。在 macOS 和 Linux 系统中，我们推荐使用系统自带的终端。

然后，我们需要一个 SSH 密钥对。如果你还没有 SSH 密钥对，可以通过以下方式生成。如果你之前用密钥登录过其他机器，或者电脑的个人目录中已经有`.ssh/id_rsa.pub`或者`.ssh/id_ed25519.pub`文件，可以直接复制现有的.pub 文件到平台，会较为方便。

:::tip 小贴士
我们这里说的用户目录，在 Windows 下指的是 `C:\Users\用户名`，macOS 和 Linux 中指的是`/home/用户名`
:::

下列操作将在 用户目录下`.ssh`文件夹下生成一个名为 `id_ed25519` 的密钥对。请将 `id_ed25519.pub` 中的内容添加到云平台的 SSH 密钥管理中。请注意，这是密钥的默认位置，你可能已经有一个同名密钥在同一位置了。如果是这样，请直接使用那个密钥，千万不要重新创建！如果重新创建，会有提示，询问是否覆盖。请不要覆盖！

打开终端执行如下命令：

```bash
ssh-keygen -t ed25519
```

如果报错为找不到`ssh-keygen`命令，说明你的 Windows 系统版本较老，推荐更新至近期的 Windows 版本或者下载学生免费版[Xshell](https://www.netsarang.com/en/free-for-home-school/)使用。

# 登陆平台

点击首页的“登录”或者“登陆使用”按钮，会跳转至登陆页面。点击“北京大学统一认证登陆”按钮，使用统一身份认证登陆。如果为新用户，会弹出“前言与用户公约”页面，翻到页面最下方，点击“同意并继续”按钮即可。此时可能会等待十秒钟左右，请耐心等待平台初始化。

# 查看云主机控制页面

登陆之后就能看到云控制台页面了，主体部分是用户配额，可以查看现有资源使用情况。左侧是导航栏，展开“计算”面板后，点击”云主机”进入云主机管理页面。也可以直接点击页面上方的“云主机”按钮进入。这个页面可以查看现有云主机的状态，也可以创建新的云主机。

![](/assets/getting-started/move-to-vm-list.png)

# 创建云主机

新用户是没有云主机的，点击“创建云主机”按钮，填写云主机的基本信息，就可以创建云主机了，我们一步步来填写：

特别的，可以点击页面左下角，显示新手引导，有详细的操作步骤和一些小贴士。特别的，这个页面是可以滚动的，可以查看更多的信息。

![](/assets/getting-started/create-1.png)

## 选择规格

首先选择云主机的规格，包括 CPU 核数、内存大小、最小硬盘大小等。不同规格的云主机价格不同，可以根据自己的需求选择。CLab 的规格分为三类，分别介绍如下，通常我们选择 Playgrounds 即可：

- Playgrounds：适合学习和测试，比如编程作业、小型网站等。也可以用来熟悉 Linux 操作和基本使用
- Labs_and_Courses：适合课程实验，比如编译原理、操作系统、数据库等对计算资源要求较高的场景
- Elite_Courses：适合高性能计算，比如深度学习、大数据处理等对计算资源要求非常高的场景

CPU 核数和内存大小是用来区分不同规格的云主机的，每位同学默认有 4 核心 4 G 内存的配额，可以按需选择。一般情况下，编程作业（比如只需要 GCC 编译，运行一些简单的程序）可以选择 1 核心 1 G 内存的规格，小型网站可以选择 2 核心 2 G 内存的规格。

## 选择启动源和镜像

接下来选择启动源和镜像。启动源是指云主机启动时使用的文件，有三种，分别是：

- 镜像：使用一个镜像启动云主机，镜像是一个预先配置好的系统，没有任何数据
- 云主机镜像：是一个云主机的快照，包含了云主机的所有数据，主要用途是避免重复配置
- 云硬盘：是一个云硬盘，可以在不同同学之间传输。如果需要用到这部分，请参考[储存：高级功能](/docs/storage/advanced)

我们一般选择镜像启动。云为大家提供了一些常用的镜像，比如 RockyLinux, Debian, Ubuntu, Arch Linux 等。选择一个镜像后，可以选择镜像的版本，比如 RockyLinux 9, Ubuntu 22.04 等。
我们定期测试并维护 RockyLinux, Debian, Ubuntu 和 Arch Linux 的镜像和常见问题文档，推荐使用这些镜像。
我们推荐的镜像是 RockyLinux 9，是一个基于 RHEL 的 Linux 发行版，有着良好的兼容性和稳定性。Ubuntu 24.04.1 和 Ubuntu 20.04 也是非常好的选择，有着良好的社区支持。

## 选择硬盘类型和大小

CLab 提供两种硬盘类型，分别是 SSD 和 HDD。SSD 是固态硬盘阵列，适合对随机访问速度要求高的场景，也适合作为系统盘，但是因为容量较小，每位用户的配额较小。HDD 是机械硬盘阵列，适合对顺序访问速度要求高的场景，适合作为数据盘。我们一般选择 SSD 类型的硬盘作为系统盘，如果需要大容量的数据盘，增加一块 HDD 类型的硬盘。

硬盘大小是指云主机的硬盘大小，可以根据自己的需求选择。一般情况下，使用默认最小值就够了。

![](/assets/getting-started/disk.png)

（现在点击页面右下角的“下一步”按钮，进入网络设置）

## 网络设置

首先是选择需要加载的网络。网络分为两种：

- 共享网络：大家可以在这里看到两个网络，一个是“pku”，另一个是“pku-new“，它们都是校园网，建议选择容量更大的“pku-new”网络。使用 PKU 网络后，云主机就直接被校园网访问，在云主机上登陆网关之后就可以访问互联网。校园网的带宽限制为 200 Mbps
- 当前项目网络：大家可以创建当前项目使用的网络，可以用来在云主机之间高速互联。自组网的带宽为 10Gbps 。详细可以参考[网络：自组网](/docs/networking/private-network)。对于大部分同学来说，不需要选择这个网络。

选择网络后，会看到有一个虚拟网卡选项，这里保持默认即可。手动指定地址会导致云主机创建失败。

![](/assets/getting-started/network.png)

## 安全组

安全组是用来控制云主机的网络访问的。我们为大家设置好了默认的安全组，允许所有的入站和出站流量。如果需要更改安全组，可以在云主机创建后，进入云主机详情页面，点击“安全组”标签页，进行更改。可以参考[网络：安全组](/docs/networking/security-group)。

（现在点击页面右下角的“下一步”按钮，进入名称和密钥设置）

## 名称和密钥设置

在这里设置云主机的名称和 SSH 密钥。名称是云主机的显示名称，可以随意设置。SSH 密钥是用来登陆云主机的密钥，可以选择之前添加的密钥，也可以添加新的密钥。如果没有添加密钥，可以点击“创建密钥”按钮，把我们在“本地连接客户端准备”中生成的密钥添加进去。

:::tip 小贴士
创建云主机时只能放入一个 SSH 密钥。如果你需要放入更多密钥，请在创建云主机成功后连接并修改~/.ssh/authorized_keys 文件（注意不要 sudo，不要改变其权限），方法是另起一行，每行放一个密钥，密钥同样来自于 xxx.pub 文件，你也可以从 CLab 的密钥模块查看之前添加过的密钥详情，并直接复制其中的公钥。
:::

（现在点击页面右下角的“下一步”按钮，进入确认页面）

![](/assets/getting-started/name-key.png)

## 确认

在这里确认云主机的配置，如果有错误，可以点击“上一步”按钮返回修改。确认无误后，点击“创建”按钮，云主机就会开始创建了。稍等片刻，云主机就会创建完成，可以在云主机列表中看到新创建的云主机。

# 连接云主机

云主机创建完成后，可以点击云主机的名称进入云主机详情页面。在这里可以看到云主机的状态、IP 地址等信息。如果选择的是“共享网络”，可以在校园网内直接使用 SSH 连接到云主机。在云主机详情页面中，有”内网 IP“，复制这个 IP 地址，然后在终端中输入以下命令：

```bash
ssh 用户名@内网IP
```

这里的用户名是与云主机镜像相关的，见下表：

| 镜像        | 用户名 |
| ----------- | ------ |
| Rocky Linux | rocky  |
| Debian      | debian |
| Ubuntu      | ubuntu |
| Arch Linux  | arch   |
| CentOS      | centos |
| Fedora      | fedora |

输入之后会提示确认云主机的指纹，输入“yes”后，就可以连接到云主机了。如果连接失败，请检查 SSH 密钥是否正确，云主机是否启动成功。

![](/assets/getting-started/ssh-hostkey.png)

# 登陆网关

未联网前可访问北京大学镜像站 mirrors.pku.edu.cn 获取软件源，请参考[网络：北京大学镜像站](/docs/getting-started/lcpu-mirror)。

如果云虚拟机需要连接互联网，需要和正常手机电脑一样登陆网关。特别的，如果需要`vscode`连接到主机，则需要联网才能获得较好体验。

云主机通常不方便使用网页版网关，对于部分镜像（比如 ICS 的课程镜像），我们提供了`clabcli`命令可以连接校园网。使用方法如下。注意，输入密码时，密码是不显示的，输入完成后回车即可。

连接网关：

```bash
clabcli connect
```

断开网关连接：

```bash
clabcli disconnect
```

对于其他镜像，可以使用如下网关登陆程序。

```python
#!/usr/bin/env python3

import requests
import getpass

# 从命令行获取用户名和密码
username = input("请输入用户名: ")
password = getpass.getpass("请输入密码: ")

url = "https://its4.pku.edu.cn/cas/ITSClient"
payload = {
    'username': username,
    'password': password,
    'iprange': 'free',
    'cmd': 'open'
}
headers = {'Content-type': 'application/x-www-form-urlencoded'}

result = requests.post(url, params=payload, headers=headers)
print(result.text)
```

将程序保存为`login.py`，运行程序，根据提示输入用户名和密码，就可以登陆网关了。程序会返回网关的登陆结果。注意，密码不会显示在终端上，这是为了保护密码的安全，直接输入即可。

```bash
python3 login.py
```

部分发行版需要安装 Python3 才可以运行这个程序，命令如下：

```bash
sudo apt install python3 # Ubuntu, Debian
sudo dnf install python3 # Fedora, CentOS, Rocky Linux
```

如果您想使用`clabcli`工具，可以用如下命令安装：

Ubuntu/Debian:

```bash
distribution=$(cat /etc/os-release | grep UBUNTU_CODENAME | cut -d = -f 2)
curl https://git.pku.edu.cn/api/packages/lcpu/debian/repository.key -o /etc/apt/keyrings/lcpu.asc
echo "deb [signed-by=/etc/apt/keyrings/lcpu.asc] https://git.pku.edu.cn/api/packages/lcpu/debian $distribution main" | tee -a /etc/apt/sources.list.d/lcpu.list
apt update
apt install -y clab-guest-tools
```

Rocky Linux/CentOS/Fedora:

```bash
sudo wget -O /etc/yum.repos.d/lcpu.repo https://git.pku.edu.cn/api/packages/lcpu/rpm/el$(rpm -E %{rhel}).repo
sudo dnf install -y clab-guest-tools
```

# 虚拟机文件传输

可以使用`scp`传输文件，`scp`命令的基本结构是：

```bash
scp （-r，如果是文件夹的话） 从哪里发送 在哪里接收
```

发送和接收的地址都遵守相同的规则，如下。其中，第一部分是机器，格式为`用户名@IP地址:`。不写`---:`代表着从本地传输。第二部分是路径，不写路径默认保存在家目录。这两部分必须要至少有一部分。接收文件时，如果保存在当前路径，第二部分可以写为`.`。

```bash
用户名@IP地址:路径
#----:（第一部分：机器）----（第二部分：路径）
```

有一些例子：

```bash
scp 本地文件 用户名@机器10段IP地址:远端路径 #上传文件
scp 用户名@机器10段IP地址:远端路径 本地文件 # 下载文件
scp -r 本地文件 用户名@机器10段IP地址:远端路径 #上传文件夹
scp -r 用户名@机器10段IP地址:远端路径 本地文件 # 下载文件夹
```

例：假如本地有一个文件为`test.cpp`，上传到远端，用户名为`ubuntu`，`ip`为 10.129.81.222，想放到家目录中：

```bash
scp test.cpp ubuntu@10.129.81.222:
```

这里，远端路径可以不填，默认会放在家目录中。但是`:`一定不能漏掉，否则不会发生传输。

例：假如服务器家目录下有一个文件夹是`clab`，想下载到本地：

```bash
scp -r ubuntu@10.129.81.222:clab .
```

# 总结

本文介绍了如何创建和连接云主机。创建云主机时，需要选择规格、镜像、硬盘类型和大小、网络、安全组、名称和密钥等信息。连接云主机时，需要使用 SSH 客户端，输入云主机的内网 IP 地址和用户名，就可以连接到云主机了。希望大家能够顺利创建和连接云主机，体验云平台的便利和强大功能。
请在提问前，仔细阅读本文和相关文档，以便更好地理解云平台的使用方法。
