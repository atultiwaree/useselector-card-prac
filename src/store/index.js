import { createStore } from "redux";
import reducer from "../reducer";
const intVal = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost",
}

const store = createStore(reducer, intVal);
export default store