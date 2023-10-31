import * as signalR from "@microsoft/signalr";
const URL = process.env.HUB_ADDRESS ?? "http://localhost:5133/chatHub";
interface Message{
    question: string;
    ansA: string;
    ansB: string;
    ansC: string;
    ansD: string;
    correctAnswer: number;
}
class Connector {
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (username: string, message: string) => void, onResponseReceived: (payload: Number) => void) => void;
    static instance: Connector;
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => document.write(err));
        this.events = (onMessageReceived, onResponseReceived) => {
            this.connection.on("messageReceived", (username, message) => {
                onMessageReceived(username, message);
            });
            this.connection.on("responseReceived", (payload) =>{
                onResponseReceived(payload);
            });
        };
    }
    public newMessage = (messages: Message) => {
        const message = messages.question + "|" + messages.ansA + "|" + messages.ansB + "|" + messages.ansC + "|" + messages.ansD;
        console.log(messages.correctAnswer + 'a ovo kasnije');
        this.connection.send("newMessage", "foo", message, parseInt(messages.correctAnswer.toString())).then(x => console.log(messages));
    }
    public answerMessage = (answer: Number, questionId: Number) => {
        this.connection.send("ResponseReceived", answer, questionId).then(x=>console.log('odogovreno'));
    }
    public static getInstance(): Connector {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}
export default Connector.getInstance;