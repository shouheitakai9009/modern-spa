import { act, renderHook } from "@testing-library/react-hooks";
import { useTest } from "./useTest";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
// @ts-ignore
const wrapper = ({ children }) => (
  <QueryClientProvider client={client}>
    <RecoilRoot>{children}</RecoilRoot>
  </QueryClientProvider>
);

describe("useTest", () => {
  it("onAdd", async () => {
    const { result } = renderHook(() => useTest(), { wrapper: wrapper });
    result.current.setNewBook({ title: "title1", author: "author1" });
    result.current.onAdd();
    expect(result.current.filteringBooks).toHaveLength(1);
    expect(result.current.filteringBooks[0]).toEqual({
      title: "title1",
      author: "author1",
    });

    result.current.setNewBook({ title: "title2", author: "author2" });
    result.current.onAdd();
    expect(result.current.filteringBooks).toHaveLength(2);
    expect(result.current.filteringBooks[1]).toEqual({
      title: "title2",
      author: "author2",
    });

    expect(result.current.newBook).toEqual({ title: "", author: "" });
  });
});
