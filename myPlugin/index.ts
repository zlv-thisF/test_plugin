import { say } from "./other";

class MyPlugin {
    private options: any;

    public constructor(options: any) {
        this.options = options;
    }

    public apply(compiler: any) {
        compiler.hooks.entryOption.tap("my plugin", () => {
            const { port } = this.options;
            say(port);
        });
    }
}

export default MyPlugin;
