
import { config } from "./config"
import http from "./plugins/http"
import Controller from "./controllers"

// 实例化所有Controller
Controller.instantiation()
  
// 启动http服务器
http.listen(config.port, () => console.log(`http://127.0.0.1:${config.port}`))
