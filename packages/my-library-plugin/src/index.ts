import {MyLibraryPluginInterface} from "@brainstaff/my-library";

export class MyLibraryPlugin implements MyLibraryPluginInterface {
    configure() {
        console.log("My Library Plugin is registered.");
    }
}
