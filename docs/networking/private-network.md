---
title: 创建网络
--- 

# 创建网络

在左侧的【网络】-【网络】界面中，你可以找到【创建网络】按钮。在弹出的表单中填写如下内容：
-	网络名称：网络名
-	描述：请用全英文进行描述，暂时不支持中文
-	可用域：域是openstack中对于物理基础设施的一种逻辑抽象，通常按照地理位置、网络布局或电源来源进行划分，目前平台只提供`nova`可用域
-	MTU：可不填。MTU是指在网络层（如以太网）可以传输的最大数据包大小，超过该大小的数据包就会被分割，目前支持的最大值为1480
-	创建子网：见下部分
 
![](/assets/networking/create_network.png)
选中创建子网按钮，一个子网需要填写如下信息：
-	子网名称
-	IP版本：ipv4或ipv6
-	网络地址：用CIDR格式标记的子网信息。如192.168.0.0/24表明从`192.168.0.0`到`192.168.0.255`的地址范围，用于一个包含256个地址的网络（从0到255）
 
![](/assets/networking/create_subnet.png)

## 如何创建安全组
在默认情况下，主机自带了一个安全组，其中针对所有的ip的出、入流量都不做拦截
![](/assets/networking/create_security_group.png)
 
你可以自己创建一些安全组规则，如下图演示了创建一个允许80端口被外界访问的规则
![](/assets/networking/create_security_group_rule.png)

## 如何将主机加入网络
在新主机的创建页面的【网络配置】环节，可以在【当前项目网络】中找到网络的ID，此时IP分配有两种策略：自动分配与手动分配。下图展示的是采用手动分配时需要填写的信息：
-	子网：此处选中了subnet_1
-	具体ip：此处填写为192.168.0.10
 
![](/assets/networking/create_PC_with_network_1.png)
同时，还需要为主机指定安全组
![](/assets/networking/create_PC_with_network_2.png)
 
## 如何将已经创建的主机加入网络
在【计算】-【云主机】页面，选中一台主机，通过右上角的【更多】-【关联资源】-【挂载网卡】可以进入网络设置页面
 
![](/assets/networking/add_PC_to_network_1.png)
选中网络与子网后，IP设置方法与上文类似：
![](/assets/networking/add_PC_to_network_2.png)
 
