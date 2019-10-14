import { Post } from "../plugins/decorator/router";
import logs from "../plugins/decorator/logs";

class Pundix {
  // @logs()
  @Post('/api/v1/auth/token')
  setup() {
    console.log('AuthToken')
  }
}

export default new Pundix()