import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes/Routes";
import { ConfigProvider } from "antd";
import ScrollButtons from "./components/ScrollButtons";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<ConfigProvider
				theme={{
					components: {
						Modal: {
							colorBgOverlay: "#124e65",
							colorBgElevated: "#1f89b1",
						},
						Input: {
							colorBgContainer: "#d4d9d5",
						},
					},
				}}
			>
				<RouterProvider router={router} />
				<ScrollButtons />
			</ConfigProvider>
		</HelmetProvider>
	</StrictMode>
);
