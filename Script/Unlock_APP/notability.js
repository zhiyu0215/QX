#Notability +解锁订阅
#软件说明：
#第一步：自己下载老版本—版本11.7.1或者11.7.2版本…等等
#第二步：下载圈X解锁脚本
#第三步：规则下载以后，先开规则，在进入软件点击恢复即可
#第四步：解锁成功以后，记得设置里面打开iCloud同步
#第五步：同步以后，永久解锁，无论卸载安装，支持最新版本，以及老版本

^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/zhiyu0215/QX/main/Script/Unlock_APP/notability.js

hostname = notability.com
