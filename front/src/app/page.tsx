const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL as string;
  return (
    <div>
      <h1>Page</h1>
      <p>
        NEXT_PUBLIC_API_URL ={" "}
        <a style={{ color: "blue" }} href={`/api`}>{`${url}/api`}</a>
      </p>
    </div>
  );
};

export default Page;
