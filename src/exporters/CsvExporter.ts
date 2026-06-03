import { DataExporter } from "./DataExporter";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export class CsvExporter extends DataExporter {
	protected render(): string {
		// TODO
		const headerRow = "id,name,email,phone";
		const rows = this.data.map(
			(user) => `${user.id},${user.name},${user.email},${user.phone}`,
		);
		return [headerRow, ...rows].join("\n");
	}

	protected save(): void {
		// TODO
		const filePath = "./dist/users.csv";
		const dir = dirname(filePath);
		if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
		writeFileSync(filePath, this.result, "utf-8");
	}
}
