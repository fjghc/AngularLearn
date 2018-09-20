# 创建带路由，less的项目
> ng new today-ng --routing --style less

# 添加一个模块,一个组件
> ng g m pages/setup
> ng g c pages/setup --module pages/setup #这句话表示在pages线面创一个名字叫setup的组件，并且把他添加到 pages/setup 这个模块中
# 添加一个服务
> ng g s services/local-storage --module app
