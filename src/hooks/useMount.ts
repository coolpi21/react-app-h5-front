import { useEffect } from "react";

/**
 *组件初始化加载
 *
 * @param {() => void} fn
 */
const useMount = (fn: () => void) => {
	useEffect(() => {
		fn?.();
	}, []);
};

export default useMount;
