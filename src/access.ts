/**
 * @see https://umijs.org/docs/max/access#access
 * */
import {initialState} from "@/typings";

export default function access(initialState: initialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canAdmin: loginUser && loginUser.userRole === '0',
    canUser: loginUser,
  };
}
