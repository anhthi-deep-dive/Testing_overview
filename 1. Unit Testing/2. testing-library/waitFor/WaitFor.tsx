import { useState } from "react";

import { fakeCall, FakeCallResult } from "../../../utils/fakeCall";

export const WaitFor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<FakeCallResult>();

  const getData = async () => {
    setIsLoading(true);
    const data = await fakeCall();

    setIsLoading(false);
    setData(data);
  };

  return (
    <>
      {isLoading && <p data-testid="loading">Loading...</p>}
      {data && <p data-testid="result">Message: {data?.message}</p>}
      <button onClick={getData} data-testid="get-data-button">
        Get data
      </button>
    </>
  );
};
