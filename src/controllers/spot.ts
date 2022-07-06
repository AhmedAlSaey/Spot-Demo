import { api, String } from "@airtasker/spot";
import { oa3server } from "@airtasker/spot/build/lib/src/syntax/oa3server";
import { oa3serverVariables } from "@airtasker/spot/build/lib/src/syntax/oa3serverVariables";
import {} from "./create-user/spot";

/** This API is a POC for using SPOT in our projects in Coformatique */
@api({
  name: "My API",
  version: "1.0.0",
})
class Api {
  /**
   * The production API server
   */
  @oa3server({
    url: "http://{baseUrl}:{port}/",
  })
  productionServer(
    @oa3serverVariables
    variables: {
      /**
       * @default "localhost"
       */
      baseUrl: String;
      /**
       * @default "3000"
       */
      port: String;
    }
  ) {}
}
