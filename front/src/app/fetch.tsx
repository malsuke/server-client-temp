const TestFetch = (): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL as string;
  const data = fetch(`http://${url}/`)
    .then((res) => res.json())
    .then((data) => {
      return data.message;
    });

  return data;
};

export default TestFetch;
