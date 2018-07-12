export interface MyLibraryPluginInterface {
    configure(): void;
    execute(rule: string): void;
}
