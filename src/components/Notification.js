import React, { Component } from "react";
import {
	NotificationContainer,
	NotificationManager
} from "react-notifications";
export default class Notification extends Component {
	createNotification = type => {
		return () => {
			switch (type) {
				case "info":
					NotificationManager.info("Info message");
					break;
				case "success":
					NotificationManager.success("Success message", "Title here");
					break;
				case "warning":
					NotificationManager.warning(
						"Warning message",
						"Close after 3000ms",
						3000
					);
					break;
				case "error":
					NotificationManager.error("Error message", "Click me!", 5000, () => {
						alert("callback");
					});
					break;
				default:
					break;
			}
		};
	};

	render() {
		return (
			<div>
				{console.log("in notify")}
				{this.createNotification("warning")}

				<NotificationContainer />
			</div>
		);
	}
}
