import { body, endpoint, request, response, String } from "@airtasker/spot";

/**
 * Endpoint for creating new users
 */
@endpoint({
  method: "POST",
  path: "/users",
})
export class CreateUser {
  @request
  request(@body body: CreateUserRequest) {}

  /**
   * User created successfully
   */
  @response({ status: 201 })
  successfulResponse(@body body: CreateUserResponse) {}
}

interface CreateUserRequest {
  /** First name of the user */
  firstName: String;
  /** Last name of the user */
  lastName: String;
}

interface CreateUserResponse {
  /** First name of the user */
  firstName: String;
  /** Last name of the user */
  lastName: String;
  /** User role that defines its permissions */
  role: String;
}
