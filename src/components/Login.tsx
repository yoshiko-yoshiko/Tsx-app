import { LoginAuth } from "./firebase";

export default function LoginButton() {
  return <button onClick={LoginAuth}>サインイン</button>;
}
