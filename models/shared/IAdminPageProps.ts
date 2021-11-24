import { AppProps } from "next/dist/shared/lib/router/router";

type IAdminPageProps = AppProps & {
	Component: AppProps["Component"] & {
		Layout?: React.ComponentType;
	};
};

export default IAdminPageProps;
