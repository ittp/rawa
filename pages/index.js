import Layout from "../components/layout";
// import { Button } from "rsuite";
//import "rsuite/lib/styles/index.less"; // or 'rsuite/dist/styles/rsuite-default.css'
import "rsuite/dist/styles/rsuite-default.css";
import { Button } from "rsuite";

export default function Page() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <Button>@#</Button>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  );
}
