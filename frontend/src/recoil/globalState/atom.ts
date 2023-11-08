import { atom } from "recoil";
import { getRecoilKeyHash } from "../../utils/getRecoilKeyHash";
import { Hello } from "../../types/hello";

const originGlobalStateKey = ["hello"] as const;
export const globalStateKey = getRecoilKeyHash(originGlobalStateKey);

export const globalState = {
  hello: atom<Hello | null>({
    key: globalStateKey.hello,
    default: null,
  }),
};
