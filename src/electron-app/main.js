"use strict";

const { app, BrowserWindow, ipcMain } = require("electron");
const { resolve } = require("path");
const { format } = require("url");
const msgpack = require('msgpack5')();

import Ledger from './blockchain/ledger.mjs';

let mainWindow;
let ledger = new Ledger('mongodb://localhost:27017');

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: resolve(__dirname, "icon.png"),
		webPreferences: {
			nodeIntegration: true,
		}
	});

	mainWindow.setMenu(null);

	mainWindow.loadURL(process.env.NODE_ENV === "development" ? format({
		hostname: "localhost",
		pathname: "index.html",
		protocol: "http",
		slashes: true,
		port: 8080
	}) : format({
		pathname: resolve(__dirname, "..", "vue-app/index.html"),
		protocol: "file",
		slashes: true
	}));

	if(process.env.NODE_ENV === "development") {
		mainWindow.webContents.openDevTools();
		require("devtron").install();
		require("vue-devtools").install();
	}

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

app.on("ready", () => {
	createWindow();

	mainWindow.webContents.on('did-finish-load', () => {
		ledger.initialize((block) => {
			// block.data = msgpack.decode(block.data);
			if (block.data != null) {
				mainWindow.webContents.send('new-block', block);
			}

			mainWindow.webContents.send('notify-block', block);
		});

		ipcMain.on('push-block', (event, data) => {
			ledger.push(data);
		});
	})
});

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if(mainWindow === null) {
		createWindow();
	}
});