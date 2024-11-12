---
title: 校内镜像站使用
---

# 校内镜像站使用

北京大学镜像站 mirrors.pku.edu.cn 是设置在校内的镜像站，速度较快，同时不需要登陆网关即可使用，推荐大家使用北大镜像站，一下是常见系统的使用方法。

## Rocky Linux 9

```bash
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.pku.edu.cn/rocky|g' \
    -i.bak \
    /etc/yum.repos.d/rocky-extras.repo \
    /etc/yum.repos.d/rocky.repo
```

## Rocky Linux 8

```bash
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.pku.edu.cn/rocky|g' \
    -i.bak \
    /etc/yum.repos.d/Rocky-AppStream.repo \
    /etc/yum.repos.d/Rocky-BaseOS.repo \
    /etc/yum.repos.d/Rocky-Extras.repo \
    /etc/yum.repos.d/Rocky-PowerTools.repo
```

## Ubuntu 24.04

```bash
sudo sed -i 's@//.*archive.ubuntu.com@//mirrors.pku.edu.cn@g' /etc/apt/sources.list.d/ubuntu.sources
```

## Ubuntu 20.04 & 22.04

```bash
sudo sed -i 's@//.*archive.ubuntu.com@//mirrors.pku.edu.cn@g' /etc/apt/sources.list
```

## Debian 12

```bash
sudo sed -i 's/deb.debian.org/mirrors.pku.edu.cn/g' /etc/apt/mirrors/debian.list
sudo sed -i 's/deb.debian.org/mirrors.pku.edu.cn/g' /etc/apt/mirrors/debian-security.list
```

## Debian 11

```bash
sudo sed -i 's@http://deb.debian.org@https://mirrors.pku.edu.cn@g' /etc/apt/sources.list
sudo sed -i 's@http://security.debian.org@https://mirrors.pku.edu.cn@g' /etc/apt/sources.list
```

## Arch Linux

编辑文件/etc/pacman.d/mirrorlist，在开头插入

```plain
Server = https://mirrors.pku.edu.cn/archlinux/$repo/os/$arch
```
