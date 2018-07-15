export interface MyLibraryPluginInterface {
    configure(): void;
    execute(rule: string): void;
}

export class MyLibrary {
    static sum(a: number, b: number): number {
        return a + b;
    };
}