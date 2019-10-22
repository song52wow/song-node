
import { config } from "./config"
import http from "./plugins/http"
import ControllerDirRead from "./plugins/decorator/controller"

ControllerDirRead.instantiation()

// 启动http服务器
http.listen(config.port, () => console.log(`http://127.0.0.1:${config.port}`))