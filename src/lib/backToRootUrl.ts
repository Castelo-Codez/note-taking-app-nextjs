import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
export const BackToRootUrl = (
    Router: AppRouterInstance,
    currentUrl: string
) => {
    const baseUrl = currentUrl.match(/\/notes\/\w+/);
    Router.replace(`http://localhost:3000/${baseUrl?.[0]}`);
    return true;
};
