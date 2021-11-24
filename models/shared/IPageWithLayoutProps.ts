import { AppProps } from "next/dist/shared/lib/router/router";

type IPageWithLayoutProps = AppProps & {
	Component: AppProps["Component"] & {
		Layout?: React.ComponentType;
	};
};

export default IPageWithLayoutProps;
