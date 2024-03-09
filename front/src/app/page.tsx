import TestFetch from "./fetch";

const Page = () => {
  const data = TestFetch();
  return (
    <div>
      <h1>Page</h1>
      <p>{data}</p>
    </div>
  );
};

export default Page;
