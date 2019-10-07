import http from "./src/plugins/http"
import { config } from "./src/config"

http.listen(config.port, () => console.log(`http://127.0.0.1:${config.port}`))
