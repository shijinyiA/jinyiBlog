---
icon: pen-to-square
date: 2024-09-08
category:
  - 机器人
tag:
  - Miao-Yunzai
  - Windows
star: true
---

# 1.利用WSL2安装Miao-Yunzai教程

## 准备工作

一台Windows10/Windows11系统的电脑（PC） (这里注意**虚拟化平台**的开启,需要Windows10/11专业版)

### 开始

#### 开始前准备：

1. 在电脑任务栏（或开始菜单中）搜索**启用或关闭Windows功能**

   ![图1](https://dl.img.timecdn.cn/2024/08/13/QQ_1723550668855.png)

2. 打开后，将**适用于Windows的linux子系统**及**虚拟机平台**打钩


3. 点击确定，然后提示**重启计算机**，选择**马上重启**

#### 正式准备安装：

1. 在系统内，打开**微软商店**

   ![图3](https://dl.img.timecdn.cn/2024/08/13/QQ_1723550749345.png)

2. 然后搜索Ubuntu,选择第一个，选择**下载**

   ![图4](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723550800610.png)
   ![图5](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723550823311.png)

3. 下载后，打开**Ubuntu**，然后等待一会，弹出以下界面：

   ![图6](https://dl.img.timecdn.cn/2024/08/13/QQ_1723551821914.md.png)

   内容为：

   请创建一个默认的 UNIX 用户帐户。用户名不需要与 Windows 用户名匹配。
   [更多信息](https://aka.ms/wslusers)

   **输入新的 UNIX 用户名：**（用户名字）

   在此输入你想命名的**名字**，按**回车**下一步；然后弹出输入密码（New password），随便输入即可。 继续回车确认密码（Retype new password:）

4. 弹出以下界面：

   ![图7](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723552237514.md.png)

   **这里就无需管，关掉窗口**，然后打开系统的**终端管理员（或者CMD管理员运行）**，输入：

   ```bash
   Ubuntu config --default-user root
   ```

5.再次打开Ubuntu程序


### 开始安装脚本
1.Ubuntu程序内输入
```bash
bash <(curl https://raw.githubusercontent.com/ArcticFox520/Yunzai-Script/main/start)
```

>无法安装使用以下
```bash
bash -c "$(curl -L https://mirrors.chenby.cn/https://raw.githubusercontent.com/ArcticFox520/Yunzai-Script/main/start)"
```
2.最后提示

```
- 安装成功
- 请使用 afyz 命令 打开脚本
```
说明脚本已经安装完成
**启动脚本**命令为
```
afyz
```

---
## 注意
在退出之后启动脚本的方式为
- 1. 打开cmd
- 2. 使用下面的命令启动WSL中的Ubuntu22.04
```powershell
wsl Ubuntu
```

>或在搜索框中搜索Ubuntu22.04打开，执行第三步

- 3. 使用下面的命令启动脚本
```bash
afyz
```

<Comment2 />

