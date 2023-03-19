export type FakeCallResult = {
  message: string;
};

export const fakeCall = (): Promise<FakeCallResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Hello world",
      });
    }, 3000);
  });
};
