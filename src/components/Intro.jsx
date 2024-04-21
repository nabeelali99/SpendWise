// react-router-dom-imports
import { Form } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets imports
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Welcome to <span className="accent"> SpendWise</span>
        </h1>
        <p>
          Your premier destination for effortless financial tracking and
          management.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};
export default Intro;
