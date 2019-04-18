import path from 'path'

// 系统配置
export let System = {
  API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
  API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
  API_server_port: '8888', // API服务器监听的端口号
  HTTP_server_type: 'https://', // HTTP服务器协议类型,包含"http://"或"https://"
  HTTP_server_host: 'www.XXX.com', // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
  HTTP_server_port: '65534', // HTTP服务器端口号
  System_country: 'zh-cn', // 所在国家的国家代码
  System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
  Session_Key: 'RESTfulAPI', // 生产环境务必随机设置一个值
  db_type: 'mysql' // 数据库类型
}

// export let DB = {
//   host: 'localhost', // 服务器地址
//   port: 3306, // 数据库端口号
//   username: 'root', // 数据库用户名
//   password: 'pan9pang', // 数据库密码
//   database: 'pan9', // 数据库名称
//   prefix: 'api_' // 默认"api_"
// }

export let DB = {
  host: '192.144.141.90', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'root', // 数据库用户名
  password: '123456', // 数据库密码
  database: 'pan9', // 数据库名称
  prefix: 'api_' // 默认"api_"
}

export let SendEmail = {
  service: 'smtp.abcd.com', // SMTP服务提供商域名
  username: 'postmaster%40abcd.com', // 用户名/用户邮箱
  password: 'password', // 邮箱密码
  sender_address: '"XX平台 👥" <postmaster@abcd.com>'
}

export let session = {
  key: 'koa:ppsm', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 5000, /** expire time */
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

export let redius = {
  host: '127.0.0.1',
  port: '6379',
  password: null
}
