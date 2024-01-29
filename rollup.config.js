import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    replace({
      presetAssignment: false,
      "process.env.NODE_ENV": '"development"',
    }),
    postcss({
      modules: true,
      plugins: [],
    }),
  ],
};
