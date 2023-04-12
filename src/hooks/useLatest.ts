import { useRef } from "react";

/**
 * 获取最新值
 *
 * @param {() => void} fn
 */
const useLatest = <T>(value: T) => {
	const ref = useRef(value);
	ref.current = value;
	return ref;
};

export default useLatest;
