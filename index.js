// import Emitter from "Emitter";
import EventEmitter from "events";

const firstEmitter = new EventEmitter();

// register a listerner
firstEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

firstEmitter.emit("greet", "Kenny");

// for Event folder