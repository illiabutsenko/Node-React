import WithRenderTime from "./WithRenderTime";
import Footer from "./Footer";
import { CounterRedux } from "./CounterRedux";
import Joke from "./Joke";
import Posts from "./Posts";
import Toolbar from "./Toolbar";

const FooterWithRenderedTime = WithRenderTime(Footer);
const CounterReduxWithRenderTime = WithRenderTime(CounterRedux);
const JokeWithRenderedTime = WithRenderTime(Joke);
const PostsWithRenderedTime = WithRenderTime(Posts);
const ToolbarWithRenderedTime = WithRenderTime(Toolbar);

export {
  FooterWithRenderedTime,
  CounterReduxWithRenderTime,
  JokeWithRenderedTime,
  PostsWithRenderedTime,
  ToolbarWithRenderedTime,
};
