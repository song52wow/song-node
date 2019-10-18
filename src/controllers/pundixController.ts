import logs from "../plugins/decorator/logs";
import { Post, Prefix } from "../plugins/decorator/controller";

@Prefix('/api/v1')
class Pundix {
  @logs()
  @Post('/auth/token')
  setup() {
    console.log('AuthToken')
  }
}

export default Pundix