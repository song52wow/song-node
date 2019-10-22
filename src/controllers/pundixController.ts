import logs from "../plugins/decorator/logs";
import { Post, Prefix, Controller } from "../plugins/decorator/controller";
import { IncomingMessage } from "http";

@Controller
@Prefix('/api/v1')
class Pundix {

  // @logs()
  @Post('/auth/setup')
  setup(req: IncomingMessage) {
    // console.log(req)
  }

  @Post('/auth/token')
  authToken() {
    console.log('AuthToken')
  }
}

export default Pundix