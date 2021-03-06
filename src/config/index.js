const Config = {
  baseURL: process.env.VUE_APP_BASE_URL,
  stagnateTime: 1 * 60 * 60 * 1000, // 无操作停滞时间  默认1小时
  openAutoJumpOut: true, // 是否开启无操作跳出
  notLoginRoute: ["login", "index", "docs", 'post', 'comment', 'tag-list', 'tag-detail', 'user', 'login-result'], // 无需登录即可访问的路由 name,
  sideBarLevel: 3, // 侧边栏层级限制, 3表示三级, 可设置 2 和 3
  showSidebarSearch: false, // 默认打开侧边栏搜索
  defaultRoute: "/index" // 默认打开的路由
};

export default Config;
