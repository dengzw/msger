# 编码规范

### 通用

1、首选使用const，确定需要可变才用let; => 方便自测是否变更

2、使用===、!==，而不是==、!=

3、除了html中书写用双引号外，其他均使用单引号

4、尽量少用if嵌套，尽量用三元符号去实现

5、操作数组时，多用map、filter、find、reduce等自带方法更为简洁，少用for、forEach

### 全局

1、在Vue.prototype上挂载方法均加个$为前缀，如Vue.prototype.$axios = axios

2、引入路径时，尽量都用绝对路径，即多用'@/api'而少用'../api';有定义的'@',就尽量多用

3、作为文件夹"首页"的文件，建议均以index为文件名，并且每个文件夹仅有一个；引用时也可省略index；


###  template

每个页面组件与业务组件均以section标签为开始 =>语义化；方便定位组件位置；

### script

1、顺序components、data、props、computed、filters、methods、watch、created、mounted、beforeUpdate、beforeDestroy

2、data：都要有个行注释为开头，划分块范围；同个块内要注释则直接同行写注释

3、methods、computed等每个方法/变量均要注释

###  style

定义样式：基本不用id（如：#app）,也少用html标签（如：.main p、.list li），多用class（如：.main .bd、.list .item）

需要多个单词的class，请统一使用‘-’连接，如：.main-page、.nav-bar、.list-hd