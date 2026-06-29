export class AppConfig {
    public readonly apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5032";
}

export default new AppConfig();