import WithLoadingIndicator from "./withLoadingIndicator";
import Footer from "./Footer";
import { CounterRedux } from "./CounterRedux";
import Joke from "./Joke";
import Posts from "./Posts";
import Toolbar from "./Toolbar";

let isLoading = false;

const FooterWithLoadingIndicator = WithLoadingIndicator(Footer, isLoading);
const CounterWithLoadingIndicator = WithLoadingIndicator(
  CounterRedux,
  isLoading
);
const JokeWithLoadingIndicator = WithLoadingIndicator(Joke, isLoading);
const PostsWithLoadingIndicator = WithLoadingIndicator(Posts, isLoading);
const ToolbarWithLoadingIndicator = WithLoadingIndicator(Toolbar, isLoading);

export {
  FooterWithLoadingIndicator,
  CounterWithLoadingIndicator,
  JokeWithLoadingIndicator,
  PostsWithLoadingIndicator,
  ToolbarWithLoadingIndicator,
};
