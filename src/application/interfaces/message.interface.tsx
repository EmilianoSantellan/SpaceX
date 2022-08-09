export interface IMessageProps {
    won: boolean | undefined;
    over: boolean | undefined;
    onKeepGoing: () => void | undefined;
    onTryAagin: () => void | undefined;
}
export interface IGameWonProp {
    won: boolean | undefined;
    score: number;
    onKeepGoing: () => void | undefined;
}
export interface IGameOverProp {
    over: boolean | undefined;
    score: number;
    onTryAagin: () => void | undefined;
}