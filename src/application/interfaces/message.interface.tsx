export interface IMessageProps {
    won: boolean | undefined;
    over: boolean | undefined;
    onKeepGoing: () => void | undefined;
    onTryAagin: () => void | undefined;
}