const WithLoadingIndicator = (WrappedComponent, isLoading) => {
  return function withLoadingIndicator(props) {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoadingIndicator;
