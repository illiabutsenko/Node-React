import Counter from "../components/CounterOld";

export default {
  title: "Counter Component",
  component: Counter,
};

function Template() {
  return <Counter />;
}

function Button() {
  return <button type="button">Натисни мене</button>;
}

export const Default = Template.bind({});
export const button = Button.bind({});
