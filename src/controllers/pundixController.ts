import logs from "../plugins/decorator/logs";
import { Post, Prefix, Controller, Get } from "../plugins/decorator/controller";

@Controller
@Prefix('/api/v1')
class Pundix {

  // @logs()
  @Get('/auth/setup')
  setup() {
    console.log('setup')
  }

  @Post('/auth/token')
  authToken() {
    console.log('AuthToken')
  }
}

export default Pundix