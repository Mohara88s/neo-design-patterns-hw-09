import { UserData } from "../data/UserData";
import fetch from "node-fetch";

export abstract class DataExporter {
	protected data: UserData[] = [];
	protected result: string = "";

	public async export() {
		// TODO: Implement export logic
		await this.load();
		this.transform();
		this.beforeRender();
		this.result = this.render();
		this.afterRender();
		this.save();
	}

	protected async load() {
		// TODO: Implement load logic
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		this.data = await res.json();
	}

	protected transform() {
		// TODO: Implement transform logic
		const data = this.data.map((user: UserData) => ({
			id: user.id,
			name: user.name,
			email: user.email,
			phone: user.phone,
		}));
		this.data = data.sort((a, b) => a.name.localeCompare(b.name));
	}

	protected beforeRender() {
		// hook
	}

	protected afterRender() {
		// hook
	}

	protected abstract render(): string;
	protected abstract save(): void;
}
